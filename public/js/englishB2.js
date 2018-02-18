var English = {
    data: {}, //functions:{},

    read: function(source) {
        var linArray = source.split("\n");
        bool = true;
        // functionBuffer = [];
        //  functionBufferNum = 0;
        /*   for(f = 0; f < linArray.length; f++){
               if(linArray[f] = "function"){
                   boolB = true
                   funWord = 3;
                   while(boolB){
                       if((linArray[funWord] + linArray[f+1]) == ("end" + linArray[f+1])){
                           functions[linArray[f+1]] = functionBuffer;
                           functionBuffer = [];
                           functionBufferNum = 0;
                           boolB = false;
                       }
                       else {
                           functionBuffer[functionBufferNum] = linArray[funWord];
                           functionBufferNum++;
                       }
                   }
               }
            }*/
      //  while (bool) {
            for (lin = 0; lin < linArray.length; lin++) {
                var srcArray = linArray[lin].split(" ");
                for (i = 0; i < srcArray.length; i++) {
                    if (srcArray[i] == "variable") {
                        // if(English.data[srcArray[i+1]] != null){
                        //   console.log("Error: Variable declared twice");
                        // bool = false;
                        //}
                        //else
                        English.data[srcArray[i + 1]] = srcArray[i + 3];
                    }
                    if (srcArray[i] == ("equals") && srcArray[i - 2] != "variable") {
                        English.data[srcArray[i - 1]] = srcArray[i + 1];
                    }
                    if (lin = linArray.length - 1){
                        bool = false;
                    } 
           //     }
            }
        }
    }
}
English.read("variable x equals 3");
console.log(English.data.x);