var English = {
    data:{},
    
        read: function(source)
        {
            console.log(source);
            var linArray = source.split("\n");
            functionBuffer = [];
         functionBufferNum = 0;
      /*  for(f = 0; f < linArray.length; f++){
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
            bool = true;
            boolAr = true;
            while(bool){
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
                bool = false;
            }
           /* while(boolAr){
                for(lin=0;lin<linArray.length;lin++){
                    var srcArray = linArray[lin].split(" ");
                    for(i = 0; i < srcArray.length; i++){
                    }
                }
            }*/
        }
    }
    English.read("variable x equals 3 \n x equals 5");
    console.log(English.data.x);