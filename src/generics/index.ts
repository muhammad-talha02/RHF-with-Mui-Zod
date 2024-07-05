 type ApiResponse<Data  extends object = {name:string, age:20}> = {
    data:Data,
    isError:boolean
 }

 const response : ApiResponse = {
    data:{
        name:"Talha",
        age:20
    },
    isError:false
 }

 console.log("response", response)