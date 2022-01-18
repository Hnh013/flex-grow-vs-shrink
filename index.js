var children = document.querySelectorAll('.child');

const childWidth = () => {
    for (let i = 0; i < children.length; i++) {
        children[i].innerText = `${children[i].offsetWidth}`;
    }
}

childWidth();

for (let i = 0; i < children.length; i++) {
    new ResizeObserver(childWidth).observe(children[i])
}