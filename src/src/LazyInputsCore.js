// Note class wrapper so this is an object instance
class LazyInputsCore {
    test1 = [
        "beta", "alpha", "gamma", "tau", "delta", "gamma", "epsilon",
        "omicron", "iota", "theta", "lambda", "kappa", "pi","mu", "rho",
        "zeta", "omega", "sigma", "psi"  
        ];
    test2 = [
        "This is a sentence", "It has spaces!", " We want to see what it will do! "
    ]

    // Options/IO
    state = {
        
    }

    // React options
    options = {

    }

    // Main Constructor
    constructor() {
        this.init();
    }

    // Init routine
    init() {
        this.trieSort(this.test1);
    }

    trieSort = (arr) => {
        // Edge Cases
        // if (arr.length < 2 || arr === undefined || arr === null) {
        //     return arr;
        // }

        console.log("Expected Output for test 1: ", this.test1.sort());
        console.log("Expected Output for test 2: ", this.test2.sort());

        let z = new Trie();
        let z1 = new Trie();

        this.test1.forEach((v) => {
            z.insert(v);
        })

        this.test2.forEach((v) => {
            z1.insert(v);
        })

        // z.insert("apple");
        // z.insert("application");
        arr = z.traverse(z.root, "", []);
        let arr2 = z1.traverse(z1.root, "", []);
        console.log("Outputted for test 1: ", arr);
        console.log("Outputted for test 2: ", arr2);
    }
}

// Trie Class
export class Trie {
    root;

    constructor() {
        this.root = new Node('\0');
    }

    // Trie Insertion Operation
    insert(word) {
        let curr = this.root;

        // Iteration over the word
        for (let i = 0; i < word.length; i++) {
            var c = word.charAt(i);

            if (curr.children[c.charCodeAt(0) - 'a'.charCodeAt(0)] == null) {
                // Create the node (We have never seen it)
                curr.children[c.charCodeAt(0) - 'a'.charCodeAt(0)] = new Node(c);
            }

            // Node has been created, then move on...
            curr = curr.children[c.charCodeAt(0) - 'a'.charCodeAt(0)];
        }

        // Mark last word as true as it ends
        curr.isWord = true;

        // console.log("Insertion Operation successful!");
    }

    traverse(curr, str, arr) {
        // For each node we make sure we add the word once
        let addedThisNode = false;

        for (let i = 0; i < curr.children.length; i++) {
            // We are currently at the end of the word
            if (curr.isWord) {
                // Add the final word
                str = str + curr.c;
                // Push it to the array
                arr.push(str);
                //Then we return, we know that this is a leaf node with no children
                return;
            } else if (curr.c !== '' && curr.c !== '\0' && (!addedThisNode)) {
                // We add the character to the string we are building
                str = str + curr.c;
                addedThisNode = true;
            }

            // We found a character that isn't null, traverse to it
            if (curr.children[i] != null) {
                this.traverse(curr.children[i],str, arr); // Recursion call
            }   
        }

        // console.log("return str", str);
        return arr;
    }
}

// Node Class
export class Node {
    c;
    isWord;
    children;

    constructor(c) {
        this.c = c;
        // Termination of last character
        this.isWord = false;
        // Each Node will have a 26 alphabet associated with it
        this.children = Array(26).fill(null);
    }
}


const t1 = new LazyInputsCore();