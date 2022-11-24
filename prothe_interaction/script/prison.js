let userPost = document.querySelector('.user__post');
let viewport = document.querySelector('.custom-viewport');
viewport.style.position = 'sticky';
viewport.style.top = 0;

function func1() {
  viewport.dataset.idx = '1';
  userPost.scrollIntoView({ block: 'start' });
}
function func2() {
  viewport.dataset.idx = '2';
  userPost.scrollIntoView({ block: 'start' });
}
function func3() {
  viewport.dataset.idx = '3';
  userPost.scrollIntoView({ block: 'start' });
  setTimeout(() => {
    viewport.style.position = 'relative';
  }, 500);
}
