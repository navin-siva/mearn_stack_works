function valemail(email)
{
    if(email.endsWith("@gmail.com"))
    {
        return true
    }
    else
    {
        return false
    }
    
    
}console.log(valemail("@gmail.com"));