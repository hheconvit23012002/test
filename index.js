document.getElementById("form").onsubmit = function (e) {
    e.preventDefault()
    fetch('http://laravel_bhsoft_v1.test/api/users', {
        method: 'GET',
        body: {page : 2}
    })
        .then(response => response.json())
        .then(data => {
            // Xử lý dữ liệu nhận được từ API ở đây
            console.log(data);
        })
        .catch(error => {
            // Xử lý lỗi ở đây
            console.error(error);
        });
}