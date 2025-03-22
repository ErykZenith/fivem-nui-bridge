Wait(1000)
iframe.invoke.log("lua")
iframe.createCommand({
    print = function(...)
        print(...)
        iframe.destroyCommand("print")
        return "lua ok"
    end
})
