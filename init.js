function myList() {
    this.name = "List";
    this.size;
    this.getSize = function () {
        return this.size;
    };
    this.push = function () {
    };
    this.upgradeList = function () {
    };
    this.unshift = function () {
    };
    this.pop = function () {
    };
    this.listToList = function () {
    };
    this.remove = function () {
    };
    this.shift = function () {

    };
    this.sort = function () {

    };
    this.splice = function () {
    };
    this.toString = function () {
    };
    //Метод map позволяет применить заданную функцию для каждого элемента массива.
    // При этом метод не изменяет исходный массив, а возвращает измененный.
    this.map = function () {

    };
    this.convertList = function (list) {
        if (list.array != null) {
            myLinkedList.apply(this);
            let newLink = new myLinkedList();

            for (let i = 0; i < list.array.length; i++) {
                newLink.push(list.array[i]);
            }
            return newLink;
        }
        if (list.rootNode != null) {

            myArrayList.apply(this);
            let newArray = new myArrayList();
            let nextNode = list.rootNode;
            for (let i = 0; i < list.size; i++) {
                nextNode = list.getNextNode(list.rootNode);
                newArray.push(nextNode.el);
            }
            return newArray;
        }
        return false;
    };
}


function myArrayList() {
    this.array = [];
    myList.call(this);
    this.size = 0;
    this.getSize = function () {
        let size = 0;
        this.array.forEach(function (element) {
            size++;

        });
        return size;
    };
    this.setArray = function (array) {
        if (array == null) {
            return false;
        }
        if (array.length >= 0 && typeof array != 'string') {
            this.array = array;
            return this.array;
        }
        return false;
    };
    this.push = function (element) {
        if (element == null) {
            return false;
        }
        this.array[this.array.length] = element;
        return element;
    };
    this.upgradeList = function () {
        this.array = [];
        return this.array;
    }
    this.unShift = function (element) {
        if (element == null) {
            return false;
        }
        for (let i = this.getSize(); i > 0; i--) {
            this.array[i] = this.array[i - 1];
        }
        this.array[0] = element;
        return this.array[0];
    };
    this.pop = function () {
        if (this.getSize() == 0) {
            return false;
        }
        delete this.array[this.getSize() - 1];
        if (this.getSize() === 0) {
            return 0;
        }
        if (this.getSize() > 0) {

            return this.array[this.getSize() - 1];
        }
    };
    this.listToList = function () {
    };
    this.remove = function (index) {
        if (this.getSize() <= 0) {
            return false;
        }
        for (let i = index; i < this.getSize() - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        delete this.array[this.getSize() - 1];
        return this.array;
    };
    this.shift = function () {
        if (this.getSize() == 0) {
            return false;
        }
        for (let i = 0; i < this.getSize() - 1; i++) {
            this.array[i] = this.array[i + 1]
        }
        delete this.array[this.getSize() - 1];
        return this.array;
    };
    this.sort = function () {
        if (this.getSize == 0) {
            return false;
        }

        let count = 0;
        for (let i = 0; i <= this.getSize(); i++) {
            if (this.array[i] / 0 == Infinity) {
                count++;
            }
        }
        if (count < this.getSize()) {
            return false;
        }
        for (i = 0; i < this.getSize() - 1; i++) {
            for (j = 0; j < this.getSize(); j++) {
                if (this.array[j] > this.array[j + 1]) {
                    var temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                }
            }
        }
        return this.array;
    };
    this.splice = function (pos, amount) {
        if (this.getSize() < amount + pos) {
            return false;
        }
        for (let i = pos; i <= pos + amount; i++) {
            this.array[i] = this.array[i + amount];
        }
        // let oldSize = this.doGetSize();
        // for(let i = oldSize; i>=oldSize-amount; i--){
        //     delete this.array[i];
        // }
        this.array.length = this.array.length - amount;
        return this.array;
    };
    this.toString = function () {

        let result = '';
        for (let i = 0; i < this.getSize(); i++) {
            result = result + String(this.array[i]);
        }
        return result;
    };
    this.map = function (foo) {//foo(a) = return a*10;

        const result = new myArrayList();

        for (let i = 0; i < this.getSize(); i++) {
            result.array[i] = foo(this.array[i]);
        }
        return result;
    };
}

function myLinkedList() {
    myList.call(this);
    this.size = 0;
    this.rootNode = null;
    this.sumSize = function () {
        this.size++;
        return this.size;
    };
    this.minusSize = function () {
        if (this.size < 1) {
            return false;
        }
        this.size--;
        return this.size;
    };
    this.initList = function () {
        if (this.rootNode != null) {
            return false;
        }
        if (this.rootNode == null) {
            this.rootNode = this.createNode('root');
            return this.rootNode;
        }
    };
    this.createNode = function (el) {
        return {
            el: el,
            prev: null,
            next: null,
        }
    };
    this.getLastNode = function (node) {
        if (node === null) {
            return null;
        }
        if (node.next === null) {
            return node;
        }
        return this.getLastNode(node.next);
    };
    this.push = function (el) {
        if (this.rootNode === null) {
            this.initList();
        }
        if (this.rootNode.next == null) {

            this.rootNode.next = this.createNode(el);
            this.rootNode.next.prev = this.rootNode;
            this.sumSize();
            return this.rootNode.next;
        }
        if (this.rootNode.next != null) {
            let wasLast = this.getLastNode(this.rootNode);
            wasLast.next = this.createNode(el);
            this.getLastNode(this.rootNode).prev = wasLast;
            this.sumSize();
            return wasLast.next;
        } else {
            console.log('is empty');
        }

    };
    this.upgradeList = function () {
        this.size = 0;
        if (this.rootNode != null) {
            this.rootNode = null;
        }
        const result = {
            root: this.rootNode,
            size: this.size,
        }
        return result;
    };
    this.unshift = function (el) {
        if (this.rootNode === null) {
            this.initList();
        }
        if (this.rootNode.next === null) {
            this.rootNode.next = this.createNode(el);
            this.rootNode.next.prev = this.rootNode;
            this.sumSize();
            return this.rootNode.next;
        }
        if (this.rootNode.next != null) {
            let wasFirst = this.rootNode.next;//бывшая первая нода
            wasFirst.prev = this.createNode(el);//сщздали новую ноду, как прев первой
            wasFirst.prev.next = wasFirst;//привязали новой первой в некст бывшую первую
            this.rootNode.next = wasFirst.prev;//
            wasFirst.prev.prev = this.rootNode;
            this.sumSize();
            return this.rootNode.next;
        }

    };
    this.pop = function () {
        if (this.rootNode === null) {
            return false;
        }
        if (this.rootNode.next === null) {
            return false;
        }
        if (this.rootNode.next != null) {
            let wasLastNode = this.getLastNode(this.rootNode);
            let newLastNode = wasLastNode.prev;
            wasLastNode = null;
            newLastNode.next = null;
            this.minusSize();
            console.log(this.getLastNode(this.rootNode));
            return this.getLastNode(this.rootNode);
        }
    };
    this.remove = function (val) {
        let wasValue;
        let prevNode;
        let nextNode;
        let deadNode
        if (this.rootNode === null) {

            return false;
        }
        if (this.rootNode.next === null) {
            return false;
        }
        deadNode = this.getNodeByValue(this.rootNode, val);
        if (deadNode === false) {
            return false;
        }

        wasValue = deadNode.el;
        if (this.rootNode.next.next === null) {
            this.rootNode.next = null;
            return wasValue;
        }
        prevNode = deadNode.prev;
        nextNode = deadNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.minusSize();
        return wasValue;
    };
    this.getNodeByValue = function (pos, val) {

        if (this.rootNode === null) {
            return false;
        }
        if (this.rootNode.next === null) {
            return false;
        }
        if (pos.el === val) {
            return pos;
        }
        if (pos.el != val) {
            if (pos.next === null) {
                return false;
            }
            return this.getNodeByValue(pos.next, val);

        }

    };
    this.shift = function () {
        let newFirst = null;
        if (this.rootNode === null) {
            return false;
        }
        if (this.rootNode.next === null) {
            return false;
        }
        if (this.rootNode.next != null) {
            let wasFirst = this.rootNode.next;
        }
        if (this.rootNode.next.next === null) {
            this.rootNode.next = null;
            this.minusSize();
            return this.rootNode;
        }
        if (this.rootNode.next.next != null) {
            newFirst = this.rootNode.next.next;
            this.rootNode.next = newFirst;
            newFirst.prev = this.rootNode;
            this.minusSize();
            return this.rootNode.next;
        }
    };
    this.changePosition = function (firstEl) {
        let first = this.getNodeByValue(this.rootNode, firstEl);
        if (first === null || first === false) {
            return false;
        }
        if (first.next === null || first.el === 'root') {
            return false;
        }
        let second = first.next;
        let zero = first.prev;
        if (this.getLastNode(this.rootNode) === second) {
            zero.next = second;
            first.prev = second;
            second.next = first;
            second.prev = zero;

            return second;
        }
        if (this.getLastNode(this.rootNode) === second.next) {
            let last = second.next;
            first.prev = second;
            second.prev = zero;
            last.prev = first;
            zero.next = second;
            second.next = first;
            first.next = last;
            return second;
        }
    };
    this.sortInt = function (node) {
        for (let i = 1; i <= this.size - 1; i++) {
            for (let i = 1; i <= this.size - 1; i++) {
                let firstNode = this.getNextNode(node);

                let secondNode = firstNode.next;

                if (firstNode.el > secondNode.el) {
                    this.changePosition(firstNode.el);
                    node = secondNode;
                }
                if (firstNode.el <= secondNode.el) {
                    node = firstNode;
                }
            }

        }
        console.log(this.getLastNode(this.rootNode));
        return this.getLastNode(this.rootNode);
    }
    this.splice = function (val, amount) {
        let nextDead = null;
        let nextValue = null;
        if (arguments.length < 2 || arguments.length > 2) {
            return false;
        }
        if (this.rootNode === null || amount > this.size) {
            return false;
        }
        if (this.rootNode.next === null) {
            return false;
        }
        for (let i = 1; i <= amount; i++) {
            if (this.getNodeByValue(this.rootNode, val) === null || this.getNodeByValue(this.rootNode, val) === false) {
                return false;
            }

            nextDead = this.removeForSplice(val);
            val = nextDead.el;

            if (nextDead === false) {
                return this.getLastNode(this.rootNode).el;
            }
        }
        if (arguments.length === 2) {
            return this.getLastNode(this.rootNode).el;
        }

    };
    this.removeForSplice = function (val) {

        let wasValue;
        let prevNode;
        let nextNode;
        let deadNode
        if (this.rootNode === null) {

            return false;
        }
        if (this.rootNode.next === null) {
            return false;
        }
        deadNode = this.getNodeByValue(this.rootNode, val);
        if (deadNode === false) {
            return false;
        }

        wasValue = deadNode.el;
        if (this.rootNode.next.next === null) {
            this.rootNode.next = null;
            return wasValue;
        }
        prevNode = deadNode.prev;
        nextNode = deadNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.minusSize();
        return nextNode;

    };
    this.toString = function () {
        let nextNode = this.rootNode;
        let result = 'root, ';
        let nextElement = '';
        for (let i = 0; i <= this.size + 2; i++) {

            nextNode = this.getNextNode(nextNode);
            nextElement = nextNode.el + ', ';
            result = result + String(nextElement);
            if (nextNode.next === null) {

                return result;
            }
        }
    };
    this.getNextNode = function (node) {
        if (node === null) {
            return null;
        }
        if (node != null) {
            return node.next;
        }
        return null;
    };
    this.map = function (foo) {
        const result = new myLinkedList();
        // let resultNextNode = result.rootNode;
        let nextNode = this.rootNode;
        for (let i = 0; i < this.getSize(); i++) {
            nextNode = this.getNextNode(nextNode);
            // resultNextNode=result.getNextNode(result.rootNode);
            let elem = foo(nextNode.el);
            result.push(elem);
        }
        return result.rootNode.next.el;
    };
}

function myBSTree() {
    myList.call(this);
    this.rootNode = null;
    this.size = 0;
    this.getSize = function () {
        return this.size;
    }
    this.sumSize = function () {
        this.size++;
        return this.size;
    };
    this.upgrade = function () {
        this.size = 0;
        this.rootNode = null;
    }
    this.minusSize = function () {
        if (this.size < 1) {
            return false;
        }
        this.size--;
        return this.size;
    };
    this.initList = function (el) {
        if (this.rootNode !== null) {
            return false;
        }
        if (this.rootNode == null) {
            this.rootNode = this.createNode(el);
            return this.rootNode;
        }
    };
    this.createNode = function (el) {
        return {
            el: el,
            right: null,
            left: null,
        }
    };
    this.push = function (firstNode, el) {
        if (this.rootNode === null) {
            this.initList(el);
            return this.rootNode;
        }
        if (firstNode.el === el) {
            return el;
        }
        if (firstNode.el > el && firstNode.left === null) {
            firstNode.left = this.createNode(el);
            this.sumSize();
            return firstNode.left;
        }
        if (firstNode.el < el && firstNode.right === null) {
            firstNode.right = this.createNode(el);
            this.sumSize();
            return firstNode.right;
        }
        if (firstNode.el < el && firstNode.right !== null) {
            return this.push(firstNode.right, el);
        }
        if (firstNode.el > el && firstNode.left !== null) {
            return this.push(firstNode.left, el);
        }

    };
    let count = 0;
    this.getNextNode = function (firstNode, el) {
        if (el > firstNode.el) {
            return firstNode.right;
        }
        if (el <= firstNode.el) {
            return firstNode.left;
        }
    };
    this.getNode = function (firstNode, el) {

        if (this.rootNode === null) {
            return false;
        }
        console.log('this.rootNode ===  ' + firstNode.el + "  =  " + el + " attempt N " + count);
        count++;
        if (firstNode.el === el) {
            console.log('in the loop this.rootNode ===  ' + firstNode.el + '  =   ' + el + " attempt N " + count);
            console.log("typeof  firstNode.el  " + typeof firstNode.el);
            console.log("typeof  el  " + typeof el + el);
            count++;
            return firstNode;

        }
        if (firstNode.el > el) {
            return this.getNode(firstNode.left, el);
        }
        if (firstNode.el < el) {
            return this.getNode(firstNode.right, el);
        }
        return firstNode;
    };
    this.getPrevNode = function (firstNode, el) {

        if (this.rootNode === null) {
            return false;
        }
        if (this.rootNode.el === el) {
            return 'rootNode';
        }
        if (firstNode.right !== null && firstNode.right.el === el) {
            return firstNode;
        }
        if (firstNode.left !== null && firstNode.left.el === el) {
            console.log('help');
            return firstNode;
        }
        if (el > firstNode.el) {
            return this.getPrevNode(firstNode.right, el);
        }
        if (el < firstNode.el) {
            return this.getPrevNode(firstNode.left, el);
        }
    };
//     this.remove = function (el) {
// let deadNode = this.getNode(this.rootNode, el);
//
//     }

}
