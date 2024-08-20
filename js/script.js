window.onload = () => {
    const utkBtnClipboardCode = document.querySelectorAll('.utk-owner-btn-clipboardcode');

    for (let i = 0; i < utkBtnClipboardCode.length; i ++) {
        utkBtnClipboardCode[i].addEventListener('click', () => {
            let codeCopy = utkBtnClipboardCode[i].nextElementSibling;
            let createAlertCopy = document.createElement('div');
            let createAlertCopyTime = 0;
            let deleteAlertCopy;

            createAlertCopy.classList.add('uk-alert', 'uk-position-fixed', 'uk-position-top-center');
            createAlertCopy.style.zIndex = '3000';
            createAlertCopy.innerHTML = 'Copiado com sucesso!';

            codeCopy.select();

            // document.execCommand('copy');
            navigator.clipboard.writeText(codeCopy.textContent);

            document.body.appendChild(createAlertCopy);

            deleteAlertCopy = setInterval(() => {
                ++ createAlertCopyTime;

                if (createAlertCopyTime >= 1) {
                    document.body.removeChild(createAlertCopy);

                    clearInterval(deleteAlertCopy);
                }
            }, 2000);
        });
    }
};