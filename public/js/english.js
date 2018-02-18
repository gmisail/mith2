var English = {
    data: {},

    errorFind: 0,
    functionBuffer: {},
    functionBufferNum: 0,

    read: function(source) {
        console.log(source);
        var lineArray = source.split("\n");
        //sep

        var allLinesArray = source.split(" ");
        amountFunction = 0;
        amountEnd = 0;
        for (token = 0; token < allLinesArray.length; token++) {
            if (allLinesArray[token] == "function") {
                if(typeof allLinesArray[token+1] != 'string')
                {
                    errorFind++;
                }
                for(tokenNext = token; tokenNext < allLinesArray.lenght; tokenNext++){
                    if (allLinesArray[tokenNext] == "end" && allLinesArray[tokenNext+1] == allLinesArray[token++]){}
                }
            }
        }
    

    //sep
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