const l = new myLinkedList();
const a = new myArrayList();
const c = new myArrayList()
const tree = new myBSTree();
c.array = [1,2,3];
const link = new myLinkedList();
link.push(1);
link.push(2);
link.push(3);
const multiThen = function (a){
    return a*10;
    };
//
// describe(" test name", () => {
//     beforeEach(() => {
//         console.log('running before each test')
//     })
//     it(`test myLinkedList`, function () {
//         const act = l.name;
//         const exp = 'List';
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList`, function () {
//         const act = a.name;
//         const exp = 'List';
//         assert.deepEqual(act, exp);
//     });
//
//
// });
// describe(" test getSize", () => {
//     beforeEach(() => {
//         console.log('running before each test')
//     })
//     it(`test myLinkedList`, function () {
//         l.size=5;
//         const act = l.getSize();
//         const exp = 5;
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList`, function () {
//         a.array=[1,2,3,4,5];
//         const act = a.getSize()
//         const exp = 5;
//         assert.deepEqual(act, exp);
//     });
//
//
// });
// describe(" test upgradeList", () => {
//     beforeEach(() => {
//         console.log('running before each test')
//     })
//     it(`test myLinkedList`, function () {
//         const act = l.upgradeList();
//         const exp = {
//             root:null,
//             size:0,
//         };
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList`, function () {
//         a.array=[1,2,3];
//         const act = a.upgradeList();
//         const exp = [];
//         assert.deepEqual(act, exp);
//     });
//
//
// });
// describe(" test push List", () => {
//     before(() => {
//         l.upgradeList();
//         a.upgradeList();
//     })
//     it(`test myLinkedList`, function () {
//         const act = l.push('test');
//         const exp = {
//             el:'test',
//             prev: l.rootNode,
//             next: null,
//         };
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList`, function () {
//         const act = a.push('test');
//         const exp = 'test';
//         assert.deepEqual(act, exp);
//     });
//     it(`test myLinkedList`, function () {
//         const act = l.push('test2');
//         const exp = {
//             el:'test2',
//             prev: l.rootNode.next,
//             next: null,
//         };
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList`, function () {
//         const act = a.push('test2');
//         const exp = 'test2';
//         assert.deepEqual(act, exp);
//     });
//     it(`test myLinkedList size`, function () {
//
//         const act = l.getSize();
//         const exp = 2;
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList size`, function () {
//
//         const act = a.getSize()
//         const exp = 2;
//         assert.deepEqual(act, exp);
//     });
//
// });
// describe(" test unShift List", () => {
//     before(() => {
//         l.upgradeList();
//         a.upgradeList();
//     })
//     it(`test myLinkedList`, function () {
//         const act = l.unshift('test');
//         const exp =
//             {
//             el:'test',
//             prev: l.rootNode,
//             next: null,
//         };
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList`, function () {
//         const act = a.unShift('test');
//         const exp = 'test';
//         assert.deepEqual(act, exp);
//     });
//     it(`test myLinkedList`, function () {
//         const act = l.unshift('test2');
//         const exp = {
//             el:'test2',
//             prev: l.rootNode,
//             next: l.rootNode.next.next,
//         };
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList`, function () {
//         const act = a.unShift('test2');
//         const exp = 'test2';
//         assert.deepEqual(act, exp);
//     });
//     it(`test myLinkedList size`, function () {
//
//         const act = l.getSize();
//         const exp = 2;
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList size`, function () {
//
//         const act = a.getSize()
//         const exp = 2;
//         assert.deepEqual(act, exp);
//     });
//
// });
// describe(" test pop List", () => {
//     before(() => {
//
//     })
//     it(`test myLinkedList`, function () {
//         const act = l.pop();
//         const exp =
//             {
//                 el:'test2',
//                 prev: l.rootNode,
//                 next: null,
//             };
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList`, function () {
//         const act = a.pop();
//         const exp = 'test2';
//         assert.deepEqual(act, exp);
//     });
//     it(`test myLinkedList`, function () {
//         const act = l.pop();
//         const exp = {
//             el:'root',
//             prev: null,
//             next: null,
//         };
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList`, function () {
//         const act = a.pop();
//         const exp = 0;
//         assert.deepEqual(act, exp);
//     });
//     it(`test myLinkedList size`, function () {
//
//         const act = l.getSize();
//         const exp = 0;
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList size`, function () {
//
//         const act = a.getSize();
//         const exp = 0;
//         assert.deepEqual(act, exp);
//     });
//
// });
// describe(" test shift List", () => {
//     before(() => {
//         l.upgradeList();
//         a.upgradeList();
//         a.array=['test', 'test2'];
//         l.push('test');
//         l.push('test2');
//     });
//     it(`test myLinkedList`, function () {
//         const act = l.shift();
//         const exp = {
//             el:'test2',
//             prev: l.rootNode,
//             next: null,
//         };
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList`, function () {
//         const act = a.shift();
//         const exp = ['test2'];
//         assert.deepEqual(act, exp);
//     });
//     it(`test myLinkedList`, function () {
//         const act = l.shift();
//         const exp = {
//             el:'root',
//             prev: null,
//             next: null,
//         };
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList`, function () {
//         const act = a.shift();
//         const exp = [];
//         assert.deepEqual(act, exp);
//     });
//     it(`test myLinkedList size`, function () {
//
//         const act = l.getSize();
//
//         const exp = 0;
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList size`, function () {
//
//         const act = a.getSize()
//         const exp = 0;
//         assert.deepEqual(act, exp);
//     });
//
// });
// describe(" test sort List", () => {
//     before(() => {
//         l.upgradeList();
//         a.upgradeList();
//         a.array=[5,4,3,2,1];
//         l.push('test');
//         l.push('test2');
//     });
//     // it(`test myLinkedList`, function () {
//     //     const act = l.sort();
//     //     const exp = {
//     //         el:'test2',
//     //         prev: l.rootNode,
//     //         next: null,
//     //     };
//     //     assert.deepEqual(act, exp);
//     // });
//     it(`test myArrayList`, function () {
//         const act = a.sort();
//         const exp = [1,2,3,4,5];
//         assert.deepEqual(act, exp);
//     });
// });
// describe(" test remove List", () => {
//     before(() => {
//         l.upgradeList();
//         a.upgradeList();
//         a.array=[5,4,3,2,1];
//         l.push('test');
//         l.push('test2');
//     });
//     it(`test myLinkedList`, function () {
//         const act = l.remove('test');
//         const exp = 'test';
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList`, function () {
//         const act = a.remove(1);
//         const exp = [5,3,2,1];
//         assert.deepEqual(act, exp);
//     });
// });
// describe(" test Splice List", () => {
//     before(() => {
//         l.upgradeList();
//         a.upgradeList();
//         a.array=[5,4,3,2,1];
//         l.push('test');
//         l.push('test2');
//         l.push('test3');
//     });
//     it(`test myLinkedList`, function () {
//         const act = l.splice('test',2);
//         const exp = 'test3';
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList`, function () {
//         const act = a.splice(1,2);
//         const exp = [5,2,1];
//         assert.deepEqual(act, exp);
//     });
// });
// describe(" test ToString List", () => {
//     before(() => {
//         l.upgradeList();
//         a.upgradeList();
//         a.array=[5,4,3,2,1];
//         l.push('test');
//         l.push('test2');
//         l.push('test3');
//     });
//     it(`test myLinkedList`, function () {
//         const act = l.toString();
//         const exp = 'root, test, test2, test3, ';
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList`, function () {
//         const act = a.toString();
//         const exp = '54321';
//         assert.deepEqual(act, exp);
//     });
// });
// describe(" test Map List", () => {
//     before(() => {
//         l.upgradeList();
//         a.upgradeList();
//         a.array=[5,4,3,2,1];
//         l.push(1);
//         l.push(2);
//         l.push(3);
//     });
//     it(`test myLinkedList`, function () {
//         const act = l.map(multiThen);
//         const exp = 10;
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList`, function () {
//         const act = a.map(multiThen).array;
//         const exp = [50,40,30,20,10];
//         assert.deepEqual(act, exp);
//     });
// });
// describe(" test convert array to Linked", () => {
//     before(() => {
//
//     })
//     it(`test myLinkedList 1st node`, function () {
//         const act = l.convertList(c).rootNode.next.el;
//         console.log(l.convertList(c).push(333));
//         const exp = 1;
//         assert.deepEqual(act, exp);
//     });
//     it(`test myLinkedList 2nd node`, function () {
//         const act = l.convertList(c).rootNode.next.next.el;
//         const exp = 2;
//         assert.deepEqual(act, exp);
//     });
//     it(`test myLinkedList 2nd node`, function () {
//         const act = l.convertList(c).rootNode.next.next.next.el;
//         const exp = 3;
//         assert.deepEqual(act, exp);
//     });
//     it(`test myLinkedList size`, function () {
//         const act = l.convertList(c).size;
//         const exp = 3;
//         assert.deepEqual(act, exp);
//     });
//     it(`test myArrayList 1st node`, function () {
//         const act = a.convertList(link).array[0];
//         const exp = 1;
//         assert.deepEqual(act, exp);
//     });
//
//
//     });
//
//
//
describe(" test BSTree", () => {
    before(() => {

    })
    it(`test BSTree size`, function () {
        tree.sumSize();
        const act = tree.getSize();
        const exp = 1;
        assert.deepEqual(act, exp);
    });
    it(`test upgrade`, function () {
        tree.upgrade();
        const act = tree.getSize();
        const exp = 0;
        assert.deepEqual(act, exp);
    });
    it(`test init`, function () {
        tree.initList("test")
        const act = tree.rootNode;
        const exp = {
            el:'test',
            right:null,
            left:null,
        };
        assert.deepEqual(act, exp);
    });
    it(`test first push`, function () {
        tree.upgrade();
        const act = tree.push(tree.rootNode, 100);
        const exp = {
            el:100,
            right:null,
            left:null,
        };
        assert.deepEqual(act, exp);
    });
    it(`test second push`, function () {
             const act = tree.push(tree.rootNode, 90);
        const exp = {
            el:90,
            right:null,
            left:null,
        };
        assert.deepEqual(act, exp);
    });
    it(`test repeat push`, function () {
        const act = tree.push(tree.rootNode, 90);
        const exp = 90;
        assert.deepEqual(act, exp);
    });
    it(`test third left push`, function () {
        const act = tree.push(tree.rootNode, 80);
        const exp = {
            el:80,
            right:null,
            left:null,
        };
        assert.deepEqual(act, exp);
    });
    it(`test third right push`, function () {
        const act = tree.push(tree.rootNode, 110);
        const exp = {
            el:110,
            right:null,
            left:null,
        };
        assert.deepEqual(act, exp);
    });
    it(`test Get Node`, function () {
        const act = tree.getNode(tree.rootNode, 110);
        const exp = {
            el:110,
            right:null,
            left:null,
        };
        assert.deepEqual(act, exp);
    });
    // it(`test Get prev Node root`, function () {
    //     const act = tree.getPrevNode(tree.rootNode, 100);
    //     const exp = 'rootNode';
    //     assert.deepEqual(act, exp);
    // });
    // it(`test Get prev Node 110`, function () {
    //     const act = tree.getPrevNode(tree.rootNode, 110);
    //     const exp = tree.rootNode;
    //     assert.deepEqual(act, exp);
    // });
    // it(`test Get prev Node 90`, function () {
    //     const act = tree.getPrevNode(tree.rootNode, 90);
    //     const exp = tree.rootNode;
    //     assert.deepEqual(act, exp);
    // });
    it(`test Get prev Node 80`, function () {
        const act = tree.getPrevNode(tree.rootNode, 80);
        const exp = tree.rootNode.left;
        assert.deepEqual(act, exp);
    });
});