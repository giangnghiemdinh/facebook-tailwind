document.querySelector('#light-mode-toggle').onclick = () => {
    console.log('test');
    document.documentElement.classList.toggle('dark');
}
document.querySelector('#light-mode-toggle-mb').onclick = () => {
    console.log('test mb');
    document.documentElement.classList.toggle('dark');
}