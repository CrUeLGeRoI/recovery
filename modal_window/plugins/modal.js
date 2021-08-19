function _createModal(options) {
    const DEFAULT_MODAL_WIDTH = '600px'
    const modal = document.createElement('div')
    modal.classList.add('wmodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="wmodal__overlay">
            <div class="wmodal__window" style="width:${options.width || DEFAULT_MODAL_WIDTH}">
                <div class="wmodal__header">
                    <span class="wmodal__title">${options.title || "Title isn't working!"}</span>
                    ${options.closable ? `<span class="wmodal__close" data-close="true">&times;</span>` : ''}
                </div>
                <div class="wmodal__body" data-content>
                    ${options.content || "content isn't working!"}
                </div>
                <div class="wmodal__footer">
                    <button class="wmodal__button_accept">OK</button>
                    <button class="wmodal__button_cancel">Cancel</button>
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal = function(options){
    const ANIMATION_SPEED = 500
    const $modal = _createModal(options)
    let closing = false
    let destroyed = false
    const modal = {
        open() {
            if (destroyed) {
                return console.log('Modal destroyed')
            }
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED);
        }
    }

    const listener = event => {
        console.log('Clicked', event.target.dataset.close)
        if (event.target.dataset.close) {
            modal.close()
        }
    }

    $modal.addEventListener('click', listener)

    return Object.assign(modal, {
        destroy() {
            destroyed = true
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
        },
        setContent(html){
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}