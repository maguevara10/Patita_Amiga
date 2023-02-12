let compr = false;

function menuar()
{
    const menu = document.querySelector("#vertical");
    const icon = document.querySelector("#hamburguesa");
    
        if(compr)
        {
            menu.style.display="none";
            icon.blur();
            compr=false;
        }
        else{
            menu.style.display="grid";
            menu.style.position="sticky";
            menu.style.top="15px";
            menu.style.paddingTop = "0px";
            icon.focus();
            compr=true;
        }
}

export default menuar;