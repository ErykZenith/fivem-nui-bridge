import {
    createCommand,
    destroyCommand,
    command,
    invoke
} from "https://cdn.jsdelivr.net/npm/@erykzenith/fivem-nui-bridge@1.1.1/dist/index.js"


(async ()=>{
    createCommand({
        log(..._args){
            console.log(..._args);
        }
    })
    
    command.debug.log("debug")
    command.log("release")
    
    const res = await invoke.print("test")
    console.log(res);
    
    destroyCommand("log")
})()
