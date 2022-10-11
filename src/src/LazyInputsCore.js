// Note class wrapper so this is an object instance
class LazyInputsCore {
    test1 = [
        "beta", "alpha", "gamma", "tau", "delta", "gamma", "epsilon",
        "omicron", "iota", "theta", "lambda", "kappa", "pi","mu", "rho",
        "zeta", "omega", "sigma", "psi"  
        ];

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


        // console.log(this.test1.sort());

        let z = new Trie();
        z.insert("apple");
        z.insert("application");
        z.traverse(z.root, "", []);
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
            // console.log("Input Character: ", c);

            if (curr.children[c.charCodeAt(0) - 'a'.charCodeAt(0)] == null) {
                // Create the node (We have never seen it)
                curr.children[c.charCodeAt(0) - 'a'.charCodeAt(0)] = new Node(c);
            }

            // Node has been created, then move on...
            curr = curr.children[c.charCodeAt(0) - 'a'.charCodeAt(0)];
        }

        // Mark last word as true as it ends
        curr.isWord = true;

        console.log("Insertion Operation successful!");
    }

    traverse(curr, str, arr) {
        for (let i = 0; i < curr.children.length; i++) {
            // We found a character that isn't null
            if (curr.children[i] != null) {

                console.log("Output str: ", str);
                str = str + curr.children[i].c;
                // console.log("Output Character: ", curr.children[i].c);
                // If we hit a node that ends with a word.
                if (curr.isWord) {
                    console.log("Here is the str:", str);
                    arr.push(str);
                }
                // Concat character
                this.traverse(curr.children[i],str, arr);
            }
        }

        console.log("return str", str);
        return;
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