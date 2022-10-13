const click = document.querySelector('.click'),
popup = document.querySelector('.popup_box'),
cancelBtn=document.querySelector('.btn1'),
deleteBtn=document.querySelector('.btn2'); 



click.addEventListener('click', () => {
    
    popup.style.opacity= '1';
    popup.style.pointerEvents='auto'
})

cancelBtn.addEventListener('click', () => {
    popup.style.opacity= '0';
    popup.style.pointerEvents='none'; 
})

function deletedPopup () {
    
    alert("Your account was deleted successfully!"); 
}




deleteBtn.addEventListener('click', () => {
    
    let response= prompt(`Do you really want to delete popup window?`)
    

    

    if (response===`y` || response===`yes`) {
        
        popup.parentNode.removeChild(document.querySelector('.popup_box')); 
        deletedPopup()

    } else if(response===`n` || response===`no`) {
        popup.style.opacity= '0';
    popup.style.pointerEvents='none';
    }
    
    
    
})

// https://www.youtube.com/watch?v=QKMFJhB9eEY&list=PLpwngcHZlPadhRwryAXw3mJWX5KH3T5L3&index=102