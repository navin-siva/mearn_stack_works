class parent
{
    bike()                              //method overriding
    {
        console.log("passion plus");
    }
}
class child extends parent
{
    bike()                              //method overriding-number of parametrs,name,method,methodname,signature are all same as class
    {
        console.log("highness");
    }
}

var ch=new child()
ch.bike()

// method overloadign---- a method acts in different Ways like using "spread"