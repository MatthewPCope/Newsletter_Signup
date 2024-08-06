document.addEventListener("DOMContentLoaded", function() {
    var modal = this.getElementById('modal')
    var closeBtn = this.getElementsByClassName('close')[0]

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        modal.style.display = "block";
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
        
            modal.style.display = "none";
        }
    };
})