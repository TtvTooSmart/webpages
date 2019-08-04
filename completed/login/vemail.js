function ValidateEmail(InputText)
{
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(Input.Text.value.match(mailFormat))
    {
        return
    }
    else
    {
        alert("incorrect email brah!")
        document.form1.text1.focus()
        return false;
    }

}