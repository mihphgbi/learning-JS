function toast({
    title = '',
    message = '',
    type ='success',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        const icons = {
            success: 'fa-solid fa-circle-check',
            warning: 'fa-solid fa-circle-exclamation',
            danger: 'fa-solid fa-circle-exclamation'
        };
        const icon = icons[type];
        const delay = (duration/1000).toFixed(2);

        toast.classList.add('toast', `${type}`);
        toast.style.animation = `slideInLeft ease .5s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = ` 
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close" >
                <i class="fa-solid fa-xmark"></i>
            </div>`;
        main.appendChild(toast);

        setTimeout(() => {
            main.removeChild(toast);
        },duration + 1000);
    }
}

function showSuccessToast(){
    toast({
        title: 'Success',
        message: 'Anyone with access can view your invited visitors.',
        type:'success',
        duration: 3000
    });
}
function showErrorToast(){
    toast({
        title: 'Danger',
        message: 'Anyone with access can view your invited visitors.',
        type:'danger',
        duration: 2000
    });
}
function showWarningToast(){
    toast({
        title: 'Warning',
        message: 'Anyone with access can view your invited visitors.',
        type:'warning',
        duration: 1000
    });
}
