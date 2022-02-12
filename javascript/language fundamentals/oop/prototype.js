//as we cannot use extends to inherit classes with differebt objects,prototype inheritance is used,,-----


// childclass.__proto__=parentclass

var languages={
    basename:"javascript",
    type:"intepreted",
    version:"ES10"
}
var framework={
    name:"express"
}

framework.__proto__=languages
console.log(framework.version);
console.log(framework.type);