function handleClick(){
    const tabItem = document.querySelectorAll(".tab-item");
    const tabContent = document.querySelectorAll(".tab-content");
    tabItem.forEach (
        (item,index) => {
            item.onclick =  () => {
                const tabItemActive = document.querySelector(".tab-item.active");
                const tabContentActive = document.querySelector(".tab-content.active");
                tabItemActive.classList.remove("active");
                item.classList.add("active");
                tabContentActive.classList.remove("active");
                tabContent[index].classList.add("active");
            }; 
        }
    );
    
}
handleClick();