const dropdownbutton = document.getElementById('dropdownButton')
const dropdowncontent = document.getElementById('dropdownContent')
let opened = false;

dropdownbutton.addEventListener('click', () => {
    if (opened == false){
    opened == true;
    dropdowncontent.style.maxheight = '100px';
}
    else {
        opened = false;
        dropdowncontent.style.maxheight;



    }
})
