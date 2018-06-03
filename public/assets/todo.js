let form = document.querySelector('form');

form.onsubmit(() => {
    let item = document.querySelector('form input');
    let task = {item: item.val};
    let value = item.val;

    fetch('/', {
        method: "post",
        data: task
    }).then((data) => {
        document.querySelector('#todo ul').appendChild('<li onclick="this.remove();">' + value + '</li>')
    })
});