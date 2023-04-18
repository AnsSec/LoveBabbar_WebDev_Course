const darkModeBtn=document.querySelector(".btn-icon");
const profileContainerDark=document.querySelector(".profile-container")
const serchSection=document.querySelector(".search-section")
const userinfoContainer=document.querySelector(".userinfo-container")
const inputSec=document.querySelector(".input")
const userDesc=document.querySelector(".user-disc")
const darkShadow=document.querySelector(".search-section")
const headinH1=document.querySelector(".headName")
const para=document.querySelector(".para")
const profileUsernamepara=document.querySelector(".profile-username")


// dark mode enable
darkModeBtn.onclick=function(){
    document.body.classList.toggle("body-profile-bg")
    profileContainerDark.classList.toggle("body-profile-bg")
    serchSection.classList.toggle("dark-bgColour")
    userinfoContainer.classList.toggle("dark-bgColour")
    inputSec.classList.toggle("dark-bgColour")
    userDesc.classList.toggle("dark-bgColour")
    darkShadow.classList.toggle("dark-shadow")
    userinfoContainer.classList.toggle("dark-shadow")
    headinH1.classList.toggle("font-color")
    para.classList.toggle("font-color")
    profileUsernamepara.classList.toggle("font-color")
    userDesc.classList.toggle("font-color")
    profiedark.classList.toggle("font-color")




}
