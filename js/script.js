var request= new XMLHttpRequest();

request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);

request.send();

request.onload=function(){
   
    var data=JSON.parse(request.response);
    console.log(data);

    for(var i in data){
        try{
            var name=data[i].name;
            var lang=data[i].latlng;
            if(lang.length === 0) throw new Error("Longitude not found ");
            wd(name,...lang);
        }catch(e){
           console.log("invalid coordinates"+name+" "+e.message);
        }
       
    }
}

function wd(name,lat,lon){

var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=10990d4d78c76c5b88cdf3a778906431`;
var request=new XMLHttpRequest();
request.open('GET',url,true);
request.send();
request.onload=function(){
   var data=JSON.parse(request.response);
    console.log(`${name}-${data.main.temp}`);
}
}
