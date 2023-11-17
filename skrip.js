document.addEventListener('DOMContentLoaded', function () {
    var openbtn = document.getElementById('openbtn');
    var modal = document.getElementById('modal');
    var closebtn = document.getElementById('closebtn');

    openbtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closebtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
