var English = {
    data: {},

    functionBuffer: {},
    functionBufferNum: 0,

    read: function(source) {
        console.log(source);
        var lineArray = source.split("\n");
        
        for (line = 0; line < lineArray.length; line++) {
            var srcArray = lineArray[line].split(" ");
            for (i = 0; i < srcArray.length; i++) {
                if (srcArray[i] == "variable") {
                    English.data[srcArray[i + 1]] = srcArray[i + 3];
                    
                    console.log(srcArray[i + 1]);
                }

                if (srcArray[i] == ("equals") && srcArray[i - 2] != "variable") {
                    English.data[srcArray[i - 1]] = srcArray[i + 1];
                }
            }
        }
    }
}
