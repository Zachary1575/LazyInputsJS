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
        if (arr.length < 2 || arr === undefined || arr === null) {
            return arr;
        }


        console.log(this.test1.sort());
    }

    // Private Trie class (LazyInputCore.TrieObj is the constructor)
    static TrieObj = class Trie {
        
    }
}

const t1 = new LazyInputsCore();