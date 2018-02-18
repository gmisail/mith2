var English = {
data:{},

    read: function(source)
    {
        //console.log(source);
        var linArray = source.split("\n");
        bool = true;
        while(bool){
        for(lin = 0; lin < linArray.length; lin++){
        var srcArray = linArray[lin].split(" ");
        for(i = 0; i < srcArray.length; i++){
            
            if(srcArray[i] == "variable"){
                if(English.data[srcArray[i+1]] != null){
                    console.log("Error: Variable declared twice");
                    bool = false;
                }
                  else
                 English.data[srcArray[i+1]] = srcArray[i+3];   
             }
            if(srcArray[i]==("equals") && srcArray[i-2] != "variable"){
                //console.log('y');
                English.data[srcArray[i-1]] = srcArray[i+1];
                    }
                }
            }
        }
    }
}
English.read("variable x equals 3");
console.log(English.data.x);
