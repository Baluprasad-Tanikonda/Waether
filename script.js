let input = document.getElementById('location')
let btn = document.getElementById('btn')
let temp = document.getElementById('temp')
let desc = document.getElementById('description')
let locationVal = document.getElementById('location-description')



const apikey = 'e11f4384118a43be349a4584f3fe6bdf'

// btn.onclick = function(){
//     if(input.value == ""){
//         alert('enter location')
//     }else{
//         loc = input.value
//        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`

//         fetch(url).then(res => res.json())
//         .then(data => {
//             console.log(data)
  
btn.onclick = function(){
    if(input.value=="")
    {
        alert('please enter some location')
    }else{
        loc = input.value
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        fetch(url).then(res => res.json())
        .then(data => {
            console.log(data)

            const{name} = data;
            const{feels_like}=data.main
            const{description}=data.weather[0]

            locationVal.innerText = name;
            temp.innerText =Math.round( feels_like-276)
            desc.innerText = description
        })
      .catch(()=>{
            alert('enter valid location')

        })

        input.value = ""


    }
}
