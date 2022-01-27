export const errorMessage = (obj) => {
    var msg = Object.values(obj)[0][0];
    var ky = Object.keys(obj)[0] ? Object.keys(obj)[0].toUpperCase() : ''
    try {
        if (msg) {
            if (msg.length === 1) {
                msg = Object.values(obj)[0]
            }
            if (msg.length === 1) {
                msg = JSON.parse(obj.replace(/'/g, '"'))[0];
            }
            return (ky + ': ' + msg[0].toUpperCase() + msg.slice(1))
        } else {
            return "Something went wrong.Try Again!!"
        }
    }
    catch {
        return "Something went wrong..Data not saved!!"
    }
}