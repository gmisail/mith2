var CodeView = {
    console : document.getElementById("console"),
    editor : document.getElementById("code"),
    runButton : document.getElementById("run"),

    addToConsole: function(data)
    {
        CodeView.console.innerHTML += "<div>" + data + "</div>"
    },

    run: function()
    {
        var script = CodeView.editor.value;
        CodeView.addToConsole("Running code...");
        
    },

    init: function()
    {
        CodeView.runButton.onclick = CodeView.run;
    }
}

CodeView.init();