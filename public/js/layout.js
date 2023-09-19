const url= "http://localhost:3002"


$("#index-Login").on('click',(event)=>{
    location.assign(url+"/login")
})

$("#index-Register").on('click',(event)=>{
    location.assign(url+"/register")
})