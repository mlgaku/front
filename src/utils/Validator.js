import Validator from "validatorjs"

export default (data, rule, msg) => {
    const {values, entries} = Object;

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
        msg[k] = v.replace(/:name\s?/g, ":attribute")
    }

    const vali = new Validator(data, rule, msg)
    vali.setAttributeNames(name)

    if (vali.fails()) {
        for (let x of values(vali.errors.all())) {
            return x
        }
    }
}