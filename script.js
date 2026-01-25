let req = new XMLHttpRequest()
req.open("GET","https://api.github.com/users/elzerowebschool/repos")
req.send()
console.log(req)

req.onreadystatechange = function ()
{
console.log(req.readyState)
console.log(req.status)
if(this.readyState === 4 & this.status === 200)
{
    console.log(req.response)
}
}