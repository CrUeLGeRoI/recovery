function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('wmodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="wmodal__overlay">
            <div class="wmodal__window">
                <div class="wmodal__header">
                    <span class="wmodal__title">Modal title</span>
                    <span class="wmodal__close">&times;</span>
                </div>
                <div class="wmodal__body">
                    <span class="wmodal__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ipsam cumque eos voluptates sunt libero beatae, eius veritatis minima quo eligendi, quasi, numquam reprehenderit voluptate non architecto explicabo dolores maiores.</span>
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
    return{
        open() {
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
        },
        destroy() {}
    }
}