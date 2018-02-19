var English = {
    data: {},

    errorFind: 0,
    functionBuffer: {},
    functionBufferNumber: 0,
    functions: {},

    read: function(source) {
        console.log(source);
        var lineArray = source.split("\n");
        var allLinesArray = source.split(" ");
        for(i = 0; i < allLinesArray.length; i++){
            if(allLinesArray[i] == "#")
            {
                for(j = i; j < allLinesArray.length; j++)
                if(allLinesArray[i] != '\n'){
                    allLinesArray[i]=="";
                    break;
                }
                else{
                    allLinesArray[i]=="";
                }
            }
        }
        for(i = 0; i < allLinesArray.length; i++){
            source = "";
            source += allLinesArray[i];
        }
        var allLinesArray = source.split(" ");
        amountFunction = 0;
        amountEnd = 0;
        for (token = 0; token < allLinesArray.length; token++) {
            if (allLinesArray[token] == "function") {
                amountFunction++;
                if (typeof allLinesArray[token + 1] != 'string' || allLinesArray[token + 1] != '\n') {
                    errorFind++;
                }
                for (tokenNext = token; tokenNext < allLinesArray.length; tokenNext++) {
                    if (allLinesArray[tokenNext] == "end" && allLinesArray[tokenNext + 1] == allLinesArray[token++]) {
                        amountEnd++;
                    }
                }
            }
        }

        if (amountFunction == amountEnd) {
            for (token = 0; token < allLinesArray.length; token++) {
                if (allLinesArray[token] == "function") {
                    for (tokenNext = token + 2; token < allLinesArray.length; tokenNext++) {
                        if (allLinesArray[tokenNext] == "end" && allLinesArray[tokenNext + 1] == allLinesArray[token + 1]) {
                            functions[token + 1] = functionBuffer;
                            functionBuffer = {};
                            functionBufferNumber = 0;
                            break;
                        } else {
                            functionBuffer[functionBufferNumber] == allLinesArray[tokenNext];
                            functionBufferNumber++;
                        }
                    }
                }
            }
        }
        for (line = 0; line < lineArray.length; line++) {
            var srcArray = lineArray[line].split(" ");
            for (i = 0; i < srcArray.length; i++) {
                if (srcArray[i] == "variable") {
                    English.data[srcArray[i + 1]] = srcArray[i + 3];

                    console.log(srcArray[i + 1]);
                }

                if (srcArray[i] == ("equals") && srcArray[i - 2] != "variable") {
                  if(English.data[srcArray[i-1]] == undefined || English.data[srcArray[i-1] == null])
                    CodeView.addToConsole("[EnglishScript] Error: Variable not defined");
                    else
                    English.data[srcArray[i - 1]] = srcArray[i + 1];
                }

                if (srcArray[i] == "plus") {
                    if(English.data[srcArray[i-1]] == undefined || English.data[srcArray[i-1] == null])
                    CodeView.addToConsole("[EnglishScript] Error: Variable not defined");
                    else
                    English.data[srcArray[i - 3]] = parseInt(srcArray[i - 1]) + parseInt(srcArray[i + 1]);
                }

                if (srcArray[i] == "minus") {
                    if(English.data[srcArray[i-1]] == undefined || English.data[srcArray[i-1] == null])
                    CodeView.addToConsole("[EnglishScript] Error: Variable not defined");
                    else
                    English.data[srcArray[i - 3]] = parseInt(srcArray[i - 1]) - parseInt(srcArray[i + 1]);
                }

                if (srcArray[i] == "times") {
                    if(English.data[srcArray[i-1]] == undefined || English.data[srcArray[i-1] == null])
                    CodeView.addToConsole("[EnglishScript] Error: Variable not defined");
                    else
                    English.data[srcArray[i - 3]] = parseInt(srcArray[i - 1]) * parseInt(srcArray[i + 1]);
                }

                if (srcArray[i] == "divide") {
                    if(English.data[srcArray[i-1]] == undefined || English.data[srcArray[i-1] == null])
                    CodeView.addToConsole("[EnglishScript] Error: Variable not defined");
                    else
                    English.data[srcArray[i - 3]] = parseInt(srcArray[i - 1]) / parseInt(srcArray[i + 1]);
                }
//paste from here
                if (srcArray[i] == "call") {
                    if (srcArray[i + 1] == "print") {
                        var textBuffer = "";
                        for (var chunk = 2; chunk < srcArray.length; chunk++) {
                            if(srcArray[chunk].charAt(0) == "@"){
                                var d = srcArray[chunk].substring(1);
                                console.log(d);
                                textBuffer += English.data[d] + " ";
                                //console.log();
                            }else{
                                textBuffer += srcArray[chunk] + " ";
                            }
                        }
                        // console.log(textBuffer);
                        
                        CodeView.addToConsole(textBuffer);
                    }
                    else
                    CodeView.addToConsole("[EnglishScript] Error: Function not defined");
                }
            }
        }
    }
}