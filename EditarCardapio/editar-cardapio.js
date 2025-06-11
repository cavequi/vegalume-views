document.querySelectorAll('.numerico').forEach(input => {
    input.addEventListener('input', function () {
        if (this.classList.contains('phone-mask')) return;
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});

document.querySelectorAll('.float').forEach(input => {
    input.addEventListener('input', function () {
        if (this.classList.contains('phone-mask')) return;

        this.value = this.value.replace(/\./g, ',');

        this.value = this.value.replace(/[^0-9,]/g, '');

        const parts = this.value.split(',');
        parts[0] = parts[0].replace(/,/g, '');

        if (parts.length > 1) {
            parts[1] = parts[1].substring(0, 2);
            this.value = parts[0] + ',' + parts[1];
        } else {
            this.value = parts[0];
        }
    });
});