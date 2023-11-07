class Queue {
    constructor(queue) {
        this.queue = []
        if (queue) {
            this.queue = queue.filter(function(x) {
                return x !== undefined;
           })
        }
    }

    add(value) {
        if (typeof value === 'object') {
            this.queue.push(value.filter(function(x) {
                return x !== undefined;
           }))
        }
        else {
            this.queue.push(value)
        }
    }

    get() {
        let firstElement = this.queue.at(0)
        this.queue.shift()
        return firstElement
    }
}

const queue = new Queue([undefined, 1, 2]);
queue.add([5,undefined, 6])
console.log(queue.queue.at(-1).at(-1))