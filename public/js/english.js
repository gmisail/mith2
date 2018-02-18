var English = {
data:{},

    read: function(source)
    {
        console.log(source);
        var linArray = source.split("\n");
        for(lin = 0; lin < linArray.length; lin++){
        var srcArray = linArray[lin].split(" ");
        for(i = 0; i < srcArray.length; i++){
            if(srcArray[i] == "variable"){
            English.data[srcArray[i+1]] = srcArray[i+3];   
            console.log(srcArray[i+1]);
             }
            if(srcArray[i]==("equals") && srcArray[i-2] != "variable"){
                console.log('y');
                English.data[srcArray[i-1]] = srcArray[i+1];
                }
            }
        }
    }
}
English.read("variable x equals 3 \n x equals 5");
console.log(English.data.x);
