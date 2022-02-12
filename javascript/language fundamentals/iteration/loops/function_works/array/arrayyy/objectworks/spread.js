function add(...args)
{
    return args.reduce((n1,n2)=>n1+n2)

}
console.log(add(10,20,30,40,50));


function findmax(...args)
{
    return args.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(findmax(10,23,86));