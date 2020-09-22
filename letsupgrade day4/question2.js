function printvalue()
{
    const eles=document.getElementsByClassName("name")[0];
    console.log(eles.value);
    const ele=document.getElementsByClassName("name")[1];
    console.log(ele.value)
    ele.value=eles.value
    }
