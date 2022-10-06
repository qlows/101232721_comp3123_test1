const resolvedPromise = () => 
new Promise((res, rej) => {
    setTimeout(res({
        message: "Delayed Success"
    }), 500)
});

const rejectedPromise = () =>
new Promise((res, rej) =>{
    setTimeout(rej({
        error: "Delayed Exception"
    }), 500)
});

resolvedPromise().then((message) => console.log(message));
rejectedPromise().catch((message) => console.error(message));
