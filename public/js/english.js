var English = {
    data: {},

    errorFind: 0,
    functionBuffer: {},
    functionBufferNumber: 0,
    functions: {},

    read: function(source) {
        console.log(source);
        var lineArray = source.split("\n");
        //sep
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

                if (srcArray[i] == "plus") {
                    English.data[srcArray[i - 3]] = parseInt(srcArray[i - 1]) + parseInt(srcArray[i + 1]);
                }

                if (srcArray[i] == "minus") {
                    English.data[srcArray[i - 3]] = parseInt(srcArray[i - 1]) - parseInt(srcArray[i + 1]);
                }

                if (srcArray[i] == "times") {
                    English.data[srcArray[i - 3]] = parseInt(srcArray[i - 1]) * parseInt(srcArray[i + 1]);
                }

                if (srcArray[i] == "divide") {
                    English.data[srcArray[i - 3]] = parseInt(srcArray[i - 1]) / parseInt(srcArray[i + 1]);
                }

                if (srcArray[i] == "call") {
                    if (srcArray[i + 1] == "print") {
                        var textBuffer = "";
                        for (var chunk = 2; chunk < srcArray.length; chunk++) {
                            textBuffer += srcArray[chunk] + " ";
                        }

                        // console.log(textBuffer);

                        CodeView.addToConsole(textBuffer);
                    }
                }
            }
        }
    }
}