var English = {
data:{},

    read: function(source)
    {
        console.log(source);
        var srcArray = source.split(" ");
        for(i = 0; i < srcArray.length-1; i++){
            if(srcArray[i] == "variable"){
            English.data[srcArray[i+1]] = srcArray[i+3];   
            i+=4; 
             }
        }
    }
}
English.read("variable x equals 3");
console.log(English.data.x);
