// Your code goes here

/* 	* [ ] `mouseover`
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
    * [ ] `dblclick` */
    
// mouseover event
const navigation = document.querySelector('nav');
navigation.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    e.target.style.backgroundColor = 'green';
});
navigation.addEventListener('mouseleave', (e) => {
    e.stopPropagation();
    e.target.style.backgroundColor = 'white';
});
const header = document.querySelector('header');
header.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'blue';
});
header.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'white';
});

// keydown event
const body = document.querySelector('body');
body.addEventListener('keydown', (e) => {
    e.target.style.width = '50%';
});

// wheel event
const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('wheel', (e) => {
    e.preventDefault();
    let scale = 0;
    scale += event.deltaY * -0.1;

    scale = Math.min(Math.max(.5, scale), 1);

    e.target.style.transform = `scale(${scale})`;
});

// drag / drop event
    // There is a ton of moving parts with this event
    // drag, dragstart, dragend, dragover, dragenter, dragleave, drop
    // This next section will make it so you can drop images in the text content sections

var dragged

    // these are the events that need to be fired on the draggable target
document.addEventListener('drag', () => {

});

document.addEventListener('dragstart', (e) => {
    // stores a reference on the dragged element
    dragged = e.target;
    // Indicates an item is being dragged by making it half transparent
    e.target.style.opacity = .5;
});

document.addEventListener('dragend', (e) => {
    // resets the transparency
    e.target.style.opacity = '';
});

    // these are the events that are going to be fired on the drop targets

document.addEventListener("dragover", (e) => {
    // prevent default to allow drop
    e.preventDefault();
});

document.addEventListener("dragenter", (e) =>{
    // highlight a potential drop target
    if (e.target.className == 'content-section' || e.target.className == 'content-section inverse-content'){
        event.target.style.backgroundColor = 'lightblue';
    }
});

document.addEventListener("drop", (e) => {
    // prevent default action (open as a link for some elements)
    e.preventDefault();
    if (e.target.className == 'content-section' || e.target.className == 'content-section inverse-content'){
        e.target.style.backgroundColor = '';
        dragged.parentNode.removeChild(dragged);
        e.target.appendChild(dragged);
    }
});

// load event
window.addEventListener('load', (e) => {
    const loadText = document.createElement('p');
    const introContent = document.querySelector('.intro');
    loadText.textContent = "The page has been fully loaded and this is just text that has been added for the project.";
    loadText.style.fontSize = '1.5rem';
    introContent.appendChild(loadText);
});

// focus event I cant get this to work
const focusedElement = document.querySelector('.content-section');
focusedElement.addEventListener('focus', (e) => {
    e.preventDefault();
    console.log(e.target);
    e.target.style.backgroundColor = 'purple';
});

// resize event
    // This event makes it to whenever the window is resized it will make the 
    // text dissapear, but the next time it is resized the text will reappear
window.addEventListener('resize', (e) => {
    let textToHide = document.getElementsByTagName('p');
    console.log('it is working so far');
    console.log(textToHide);
    for (let i = 0; i < textToHide.length; i++){
        if (textToHide[i].style.display == 'none'){
            textToHide[i].style.display = 'block';
        } else {
        textToHide[i].style.display = 'none';
        }
    }
});

// scroll event
window.addEventListener('scroll', (e) => {
    console.log(window.scrollY);
    let text = document.getElementsByTagName('p');
    if (window.scrollY < 100){
        for (let i = 0; i < text.length; i++){
            text[i].style.color = 'blue';
        }
    } else if (window.scrollY > 100 && window.scrollY < 1000){
        for (let i = 0; i < text.length; i++){
            text[i].style.color = 'red';
        }
    } else if (window.scrollY > 1000 && window.scrollY < 2000){
        for (let i = 0; i < text.length; i++){
            text[i].style.color = 'purple';
        }
    }
});

// select event I couldn't found I reference to this
funBusImg.addEventListener('select', (e) => {
    e.target.transform.scale = 'scale(2)';
});

// doubleclick event
funBusImg.addEventListener('dblclick', (e) => {
    e.target.style.display = 'none';
});

