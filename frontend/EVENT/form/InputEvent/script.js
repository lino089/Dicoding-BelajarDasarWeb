document.addEventListener('DOMContentLoaded', function() {
    const inputMaxlengthOnLoad = document.getElementById('inputNama').maxLength;
    document.getElementById('sisaKarakter').innerText = inputMaxlengthOnLoad;

    document.getElementById('inputNama').addEventListener('input', function() {
        const jumlahKaraterDiketik = document.getElementById('inputNama').value.length;
        const jumlahKarakterMaksimal = document.getElementById('inputNama').maxLength;

        console.log('jumlahKarakterDiketik: ', jumlahKaraterDiketik);
        console.log('jumlahKarakterMaksimal: ', jumlahKarakterMaksimal);
        const sisaKaraterUpdate = jumlahKarakterMaksimal - jumlahKaraterDiketik;
        document.getElementById('sisaKarakter').innerText = sisaKaraterUpdate.toString();
        
        if(sisaKaraterUpdate === 0){
            document.getElementById('sisaKarakter').innerText = 'Batas maksimal tercapai!';
        } else if(sisaKaraterUpdate <= 5){
            document.getElementById('notifikasiSisaKarakter').style.color = 'red';
        } else{
            document.getElementById('notifikasiSisaKarakter').style.color = 'black';
        }
    })

    document.getElementById('inputNama').addEventListener('focus', () => {
        console.log('inputNama: focus');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible';
    })

    document.getElementById('inputNama').addEventListener('blur', function () {
        console.log('inputNama: blur');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden';
    })

    document.getElementById('inputCaptcha').addEventListener('change', () => {
        console.log('inputCaptcha: change');

        const inputCaptcha = document.getElementById('inputCaptcha').value;
        const submitButtonStatus = document.getElementById('submitButton');

        if (inputCaptcha === 'PRNU') {
            submitButtonStatus.removeAttribute('disabled');
        } else {
            alert('Captcha Anda belum tepat');
            submitButtonStatus.setAttribute('disabled', '');
        }
    })

    document.getElementById('formDataDiri').addEventListener('submit', (e) => {
        const inputCaptcha = document.getElementById('inputCaptcha').value;

        if(inputCaptcha === 'PRNU'){
            alert('Selamat! Captcha Anda Lolos!!');
        } else{
            document.getElementById('submitButton').setAttribute('disabled', '');
        }
        e.preventDefault();
    });

    document.getElementById('inputCopy').addEventListener('copy', () => {
        alert('Anda telah men-copy something.')
    });

    document.getElementById('inputPaste').addEventListener('paste', () => {
        alert('Anda telah men-paste something.')
    })
});