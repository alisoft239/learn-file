async function getData () {
    let names = []
    if(names.length > 0)
    {
        return "we have names"
    }else {
        throw new Error("we donot have names")
    }
}

getData().then(
    (rov) => {console.log(rov)},
    (rej) => {console.log(rej)}
)