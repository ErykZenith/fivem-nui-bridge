Wait(1000)
iframe.invoke.log("lua")
iframe.init({
    print = function(...)
        print(...)
        iframe.remove("print")
        return "lua ok"
    end
})
