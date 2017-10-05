import Validator from "validatorjs"

export default (data, rule, msg) => {
    const {entries} = Object;

    const name = {}
    for (let [k, v] of entries(rule)) {
        let a = k.split("^")
        if (a.length > 1) {
            delete rule[k]
            rule[a[0]] = v
            name[a[0]] = a[1]
        }
    }

    for (let [k, v] of entries(msg)) {
        msg[k] = v.replace(/\s?:name\s?/g, ":attribute")
    }

    const vali = new Validator(data, rule, msg)
    vali.setAttributeNames(name)

    if (vali.fails()) {
        const err = vali.errors.all()
        for (let x in err) {
            return err[x][0]
        }
    }
}