// The Complete DSA Handbook - 10 Core Chapters & Concept Deep Dives

export const DSA_CHAPTERS = [
    {
        id: 1,
        title: "Introduction to DSA & Big-O",
        tagline: "Master fundamentals, growth curves, and the 5-step problem solving approach",
        sections: [
            {
                heading: "1. What is DSA & Why Learn It?",
                content: `**Data Structures** are ways of organizing, managing, and storing data efficiently in memory.
**Algorithms** are step-by-step well-defined instructions to solve computational problems.

**Why Master DSA?**
- Builds deep mental models for code efficiency and scalability.
- Essential for technical placements, FAANG/Tier-1 coding interviews.
- Helps you architect systems that scale from 1,000 to 100,000,000 users without crashing.`
            },
            {
                heading: "2. Data Structure vs Algorithm",
                type: "table",
                columns: ["Data Structure", "Algorithm"],
                rows: [
                    ["A way of storing and organizing data in memory.", "A sequence of logical steps to solve a problem."],
                    ["Focuses on data layout and operations on data.", "Focuses on logic, control flow, and efficiency."],
                    ["Examples: Array, Linked List, Stack, Queue, Tree, Graph.", "Examples: Binary Search, Quick Sort, BFS/DFS, Dynamic Programming."]
                ]
            },
            {
                heading: "3. Classification: Linear vs Non-Linear",
                content: `**Linear Data Structures** (Sequential layout):
- Elements are arranged in a single line.
- Examples: **Array**, **Linked List**, **Stack**, **Queue**, **Deque**.

**Non-Linear Data Structures** (Hierarchical / Interconnected):
- Elements are not arranged sequentially; one element can connect to multiple elements.
- Examples: **Tree**, **Binary Search Tree**, **Heap**, **Graph**, **Hash Table**.`
            },
            {
                heading: "4. Big-O Growth Order (Best to Worst)",
                type: "growth_order",
                growthList: [
                    { notation: "O(1)", name: "Constant", example: "Accessing array element by index, HashMap get/put average", growth: "1" },
                    { notation: "O(log n)", name: "Logarithmic", example: "Binary Search, BST lookup (balanced), Heap push/pop", growth: "log n" },
                    { notation: "O(n)", name: "Linear", example: "Traversing an array/linked list, Linear search", growth: "n" },
                    { notation: "O(n log n)", name: "Linearithmic", example: "Merge Sort, Heap Sort, Quick Sort (average)", growth: "n log n" },
                    { notation: "O(n^2)", name: "Quadratic", example: "Bubble Sort, Selection Sort, Nested loops over array", growth: "n^2" },
                    { notation: "O(2^n)", name: "Exponential", example: "Recursive Fibonacci, generating all subsets", growth: "2^n" },
                    { notation: "O(n!)", name: "Factorial", example: "Generating all permutations, Traveling Salesperson", growth: "n!" }
                ]
            },
            {
                heading: "5. The 5-Step Problem Solving Framework",
                content: `1. **Understand the Problem**: Clarify constraints, input ranges, edge cases (empty array, negatives, nulls).
2. **Choose the Right Data Structure**: Identify access vs modification patterns.
3. **Design & Apply Suitable Algorithm**: Select optimal algorithmic pattern (Two Pointers, DP, BFS).
4. **Analyze Time & Space Complexity**: Calculate theoretical Big-O before coding.
5. **Optimize & Implement**: Clean code, handle edge cases, verify with dry runs.`
            }
        ]
    },
    {
        id: 2,
        title: "Time & Space Complexity",
        tagline: "Formal asymptotic analysis, auxiliary memory, and rules of thumb",
        sections: [
            {
                heading: "1. Time vs Space Complexity",
                content: `**Time Complexity**: Quantifies the execution time of an algorithm as a function of input size *n*. It counts the number of elementary operations performed.
**Space Complexity**: Quantifies the total memory required by the algorithm during execution.

**Total Space = Auxiliary Space + Input Space**
- **Auxiliary Space**: Extra temporary memory allocated (variables, hash tables, recursion stack).
- **Input Space**: Memory used to store the input arguments.`
            },
            {
                heading: "2. Common Analysis Rules",
                content: `- **Ignore Constants**: O(2n + 5) simplifies to **O(n)**.
- **Focus on the Dominant Term**: O(n^2 + 100n + 500) simplifies to **O(n^2)**.
- **Different Inputs**: A loop over array A of size *n* and array B of size *m* is **O(n + m)** (not O(n)).
- **Worst Case Assumption**: Standard Big-O analyzes the upper bound of operations.`
            },
            {
                heading: "3. Space Complexity Breakdown by Data Structure",
                type: "table",
                columns: ["Data / Construct", "Space Complexity", "Explanation"],
                rows: [
                    ["Primitive variables (int, char, pointers)", "O(1)", "Fixed memory independent of input size n."],
                    ["Array of size n", "O(n)", "Allocates memory for n contiguous elements."],
                    ["2D Matrix (n x m)", "O(n * m)", "Allocates n rows with m columns each."],
                    ["Recursive Call Stack (depth = d)", "O(d)", "Each stack frame stores local variables and return address."],
                    ["Balanced Binary Tree (n nodes)", "O(log n)", "Maximum call stack depth during DFS traversal is height = log n."],
                    ["Skewed Tree / Linked List DFS", "O(n)", "Call stack depth equals number of nodes n in worst case."]
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Arrays & Memory Representation",
        tagline: "Contiguous memory layout, 1D/2D indexing formulas, and core operations",
        sections: [
            {
                heading: "1. Contiguous Memory Representation",
                content: `An **Array** is a linear data structure storing elements of the same data type in contiguous memory locations.

**1D Array Address Formula**:
\`Address(arr[i]) = Base_Address + (i * Element_Size_k)\`

**Why Random Access is O(1)**:
Because elements are stored contiguously, the CPU directly computes the memory offset using the base address and index formula without traversing previous elements.`
            },
            {
                heading: "2. Array Operations & Complexities",
                type: "table",
                columns: ["Operation", "Time Complexity", "Explanation"],
                rows: [
                    ["Access by Index", "O(1)", "Direct calculation via Base + i * k."],
                    ["Search (Linear)", "O(n)", "Must scan elements one by one if unsorted."],
                    ["Search (Binary)", "O(log n)", "Requires array to be sorted."],
                    ["Insertion at End", "O(1) amortized", "Direct write; dynamic array may resize when full."],
                    ["Insertion at Beginning / Middle", "O(n)", "Requires shifting all subsequent elements to the right."],
                    ["Deletion", "O(n)", "Requires shifting all following elements to the left to fill gap."]
                ]
            },
            {
                heading: "3. 2D Arrays (Matrices) & Traversal",
                content: `**Row-Major Order** (standard in C/C++/Python):
\`Address(arr[i][j]) = Base + (i * num_cols + j) * k\`

**Advantages**: Fast O(1) random access, cache friendly due to spatial locality of reference.
**Limitations**: Fixed size in static arrays, costly O(n) insertions and deletions requiring memory shifts.`
            }
        ]
    },
    {
        id: 4,
        title: "Strings & Hashing",
        tagline: "String immutability, Hash functions, collision resolution, and HashMap vs HashSet",
        sections: [
            {
                heading: "1. Strings Representation & Immutability",
                content: `- In **C/C++**: Strings are null-terminated character arrays (\`'\\0'\`).
- In **Java & Python**: Strings are **immutable objects**. Modifying a string creates a new string in memory.
- String concatenation in a loop without StringBuilder / list join runs in **O(n^2)** time!`
            },
            {
                heading: "2. Hashing & Hash Functions",
                content: `Hashing maps arbitrary keys (strings, objects) to fixed integer indices in a bucket array using a **Hash Function**:
\`Index = h(k) = k mod m\` (where m is table size).

**Properties of a Good Hash Function**:
- Fast O(1) computation.
- Uniformly distributes keys across buckets to minimize collisions.`
            },
            {
                heading: "3. Collision Resolution Techniques",
                type: "table",
                columns: ["Technique", "Mechanism", "Pros / Cons"],
                rows: [
                    ["Separate Chaining", "Each bucket contains a Linked List or Red-Black Tree of colliding entries.", "Simple, handles high load factors gracefully. Extra memory for pointers."],
                    ["Linear Probing", "On collision, probe sequentially: index = (h(k) + i) mod m.", "Cache friendly. Suffers from primary clustering (long contiguous runs of occupied slots)."],
                    ["Quadratic Probing", "Probe with quadratic step: index = (h(k) + i^2) mod m.", "Eliminates primary clustering. May fail to find empty slot if table > 50% full."],
                    ["Double Hashing", "Use second hash function: index = (h1(k) + i * h2(k)) mod m.", "Excellent uniform distribution. Requires independent second hash function."]
                ]
            },
            {
                heading: "4. HashSet vs HashMap",
                type: "table",
                columns: ["Feature", "HashSet", "HashMap"],
                rows: [
                    ["Stores", "Unique keys only (no values).", "Key-Value pairs."],
                    ["Duplicates", "Duplicate elements rejected.", "Keys must be unique; duplicate values allowed."],
                    ["Under the hood", "Implemented as a HashMap with dummy values.", "Array of buckets with linked lists / balanced trees."],
                    ["Average Complexity", "O(1) Add, Remove, Contains.", "O(1) Get, Put, Remove."]
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Linked Lists, Stacks, Queues & Deques",
        tagline: "Linear data structures, pointer mechanics, LIFO vs FIFO, and operations comparison",
        sections: [
            {
                heading: "1. Linear Data Structures Overview",
                content: `- **Singly Linked List**: Nodes with \`val\` and \`next\` pointer. Dynamic sizing, non-contiguous memory.
- **Doubly Linked List**: Nodes with \`prev\`, \`val\`, and \`next\`. Enables O(1) deletions given node pointer.
- **Stack (LIFO - Last In First Out)**: Top-only access. Used for function call stacks, backtracking, parsing expressions.
- **Queue (FIFO - First In First Out)**: Enqueue at rear, dequeue from front. Used in BFS, scheduling, printer queues.
- **Deque (Double Ended Queue)**: Insert/delete at both front and rear in O(1). Used in sliding window maximum.`
            },
            {
                heading: "2. Operations Complexity Comparison Table",
                type: "table",
                columns: ["Data Structure", "Order", "Insertion", "Deletion", "Access"],
                rows: [
                    ["Array", "Sequential", "O(n) / O(1) at end", "O(n)", "O(1) by index"],
                    ["Singly Linked List", "Sequential", "O(1) at head / O(n)", "O(1) at head / O(n)", "O(n) traversal"],
                    ["Doubly Linked List", "Sequential", "O(1) at head/tail", "O(1) given node", "O(n) traversal"],
                    ["Stack", "LIFO", "O(1) Push (Top)", "O(1) Pop (Top)", "O(1) Peek Top"],
                    ["Queue", "FIFO", "O(1) Enqueue (Rear)", "O(1) Dequeue (Front)", "O(1) Front"],
                    ["Deque", "Double Ended", "O(1) Front & Rear", "O(1) Front & Rear", "O(1) Front & Rear"]
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Trees & Binary Search Trees (BST)",
        tagline: "Hierarchical data structures, DFS vs BFS, BST invariants, and Heap fundamentals",
        sections: [
            {
                heading: "1. Tree Terminology",
                content: `- **Root**: Topmost node with no parent.
- **Leaf**: Node with no children.
- **Height**: Number of edges on the longest path from node to a leaf.
- **Level / Depth**: Distance from root (Root is at Level 0).
- **Degree**: Number of children of a node.`
            },
            {
                heading: "2. Tree Traversals (DFS vs BFS)",
                content: `**Depth-First Search (DFS)**:
- **Preorder (Root -> Left -> Right)**: Used to clone or serialize trees.
- **Inorder (Left -> Root -> Right)**: Returns elements in **sorted ascending order** for BST!
- **Postorder (Left -> Right -> Root)**: Bottom-up aggregation (height, diameter, memory cleanup).

**Breadth-First Search (BFS)**:
- **Level Order**: Traverses level-by-level using a Queue. Optimal for shortest path in unweighted trees.`
            },
            {
                heading: "3. Binary Search Tree (BST) Properties & Complexities",
                content: `In a valid BST, for every node:
\`All keys in Left Subtree < Node.val < All keys in Right Subtree\`

**Time Complexities**:
- **Balanced BST** (AVL, Red-Black): Search, Insert, Delete = **O(log n)**
- **Skewed BST** (degenerated into Linked List): Search, Insert, Delete = **O(n)**`
            }
        ]
    },
    {
        id: 7,
        title: "Graphs: Representations & Traversals",
        tagline: "Vertices, edges, Adjacency Matrix vs List, BFS, DFS, cycle detection, and shortest paths",
        sections: [
            {
                heading: "1. Graph Representations",
                type: "table",
                columns: ["Feature", "Adjacency Matrix", "Adjacency List"],
                rows: [
                    ["Space Complexity", "O(V^2)", "O(V + E)"],
                    ["Check if Edge (u, v) exists", "O(1)", "O(degree(u))"],
                    ["Iterate all neighbors of u", "O(V)", "O(degree(u))"],
                    ["Best Used When", "Dense graphs (E ~ V^2)", "Sparse graphs (E << V^2) - Most real-world problems!"]
                ]
            },
            {
                heading: "2. BFS vs DFS in Graphs",
                type: "table",
                columns: ["Feature", "BFS (Breadth First Search)", "DFS (Depth First Search)"],
                rows: [
                    ["Data Structure", "Queue (FIFO)", "Stack / Recursion (LIFO)"],
                    ["Strategy", "Explores level by level outwards.", "Goes as deep as possible before backtracking."],
                    ["Shortest Path", "Finds shortest path in unweighted graphs.", "Does not guarantee shortest path."],
                    ["Primary Use Cases", "Shortest path, nearest neighbor, web crawling.", "Connected components, topological sort, cycle detection, maze paths."]
                ]
            },
            {
                heading: "3. Shortest Path Algorithms",
                content: `- **Unweighted Graph**: **BFS** in O(V + E).
- **Non-negative Weighted Graph**: **Dijkstra's Algorithm** with Min-Heap in O((V + E) log V).
- **Graphs with Negative Weights**: **Bellman-Ford Algorithm** in O(V * E) (also detects negative weight cycles).
- **All-Pairs Shortest Path**: **Floyd-Warshall Algorithm** in O(V^3).`
            }
        ]
    },
    {
        id: 8,
        title: "Searching & Sorting Master Table",
        tagline: "Comprehensive comparison of all major sorting and searching algorithms",
        sections: [
            {
                heading: "1. Linear Search vs Binary Search",
                type: "table",
                columns: ["Algorithm", "Best Case", "Avg Case", "Worst Case", "Space", "Prerequisite"],
                rows: [
                    ["Linear Search", "O(1)", "O(n)", "O(n)", "O(1)", "None (works on unsorted)"],
                    ["Binary Search", "O(1)", "O(log n)", "O(log n)", "O(1) iterative", "Must be sorted!"]
                ]
            },
            {
                heading: "2. Sorting Algorithms Comparison Table",
                type: "table",
                columns: ["Algorithm", "Best Time", "Average Time", "Worst Time", "Space", "Stable?", "Notes"],
                rows: [
                    ["Bubble Sort", "O(n)", "O(n^2)", "O(n^2)", "O(1)", "Yes", "Repeatedly swap adjacent elements."],
                    ["Selection Sort", "O(n^2)", "O(n^2)", "O(n^2)", "O(1)", "No", "Find minimum and place at start."],
                    ["Insertion Sort", "O(n)", "O(n^2)", "O(n^2)", "O(1)", "Yes", "Great for small or nearly sorted arrays."],
                    ["Merge Sort", "O(n log n)", "O(n log n)", "O(n log n)", "O(n)", "Yes", "Divide and conquer. Preferred for Linked Lists."],
                    ["Quick Sort", "O(n log n)", "O(n log n)", "O(n^2)", "O(log n)", "No", "Fast in-place cache performance. Bad pivot gives O(n^2)."],
                    ["Heap Sort", "O(n log n)", "O(n log n)", "O(n log n)", "O(1)", "No", "Build max heap, swap root with end and heapify."]
                ]
            }
        ]
    },
    {
        id: 9,
        title: "Recursion, Backtracking & Dynamic Programming",
        tagline: "From brute-force recursion to state-memoized optimal substructures",
        sections: [
            {
                heading: "1. Recursion vs Backtracking vs DP",
                content: `- **Recursion**: A function calling itself to solve smaller sub-instances until reaching a Base Case.
- **Backtracking**: Systematically searching all candidate solutions and abandoning ('backtracking') branches as soon as constraints are violated (Choice -> Explore -> Undo).
- **Dynamic Programming (DP)**: Solving problems by combining solutions to overlapping subproblems with optimal substructure. Results are cached (memoization/tabulation) to avoid recomputation.`
            },
            {
                heading: "2. 7 Classic DP Problems Summary",
                type: "table",
                columns: ["Problem", "State / Recurrence", "Approach", "Time", "Space"],
                rows: [
                    ["Fibonacci / Stairs", "dp[i] = dp[i-1] + dp[i-2]", "1D Linear DP", "O(n)", "O(1) with 2 vars"],
                    ["House Robber", "dp[i] = max(nums[i] + dp[i-2], dp[i-1])", "1D Linear DP", "O(n)", "O(1)"],
                    ["0/1 Knapsack", "dp[w] = max(dp[w], dp[w-wt[i]] + val[i])", "2D / 1D backward", "O(n * W)", "O(W)"],
                    ["Coin Change (Min Coins)", "dp[w] = min(dp[w], dp[w-c] + 1)", "1D forward", "O(n * Amount)", "O(Amount)"],
                    ["Longest Common Subseq (LCS)", "dp[i][j] = 1+dp[i-1][j-1] if match else max", "2D Grid DP", "O(m * n)", "O(m * n) or O(min(m,n))"],
                    ["Longest Increasing Subseq (LIS)", "tails array with binary search", "Patience sort", "O(n log n)", "O(n)"],
                    ["Matrix Unique Paths", "dp[r][c] = dp[r-1][c] + dp[r][c-1]", "2D Grid DP", "O(m * n)", "O(n) 1D row"]
                ]
            }
        ]
    },
    {
        id: 10,
        title: "Greedy, Heaps, Tries & Bit Manipulation",
        tagline: "Low-level bit hacks, prefix tries, priority queues, and greedy choices",
        sections: [
            {
                heading: "1. Bit Manipulation Quick Tricks",
                type: "table",
                columns: ["Operation", "Code Formula", "Explanation"],
                rows: [
                    ["Check if Even / Odd", "(n & 1) == 0", "Lowest bit is 0 for even, 1 for odd."],
                    ["Check if Power of 2", "(n > 0) && (n & (n - 1)) == 0", "Powers of 2 have exactly one 1-bit."],
                    ["Set K-th Bit", "n | (1 << k)", "Forces the k-th bit to 1."],
                    ["Clear K-th Bit", "n & ~(1 << k)", "Forces the k-th bit to 0."],
                    ["Toggle K-th Bit", "n ^ (1 << k)", "Flips the k-th bit (0->1, 1->0)."],
                    ["Extract Lowest Set Bit", "n & (-n)", "Isolates the rightmost 1-bit using 2's complement."],
                    ["Clear Lowest Set Bit", "n & (n - 1)", "Brian Kernighan trick: removes rightmost 1-bit."],
                    ["Swap x and y without temp", "x ^= y; y ^= x; x ^= y", "In-place bitwise swap."]
                ]
            },
            {
                heading: "2. Greedy Algorithm Principles",
                content: `A **Greedy Algorithm** builds up a solution piece by piece, always choosing the next piece that offers the most immediate (local) benefit.

**When Greedy Works**:
- **Greedy Choice Property**: A globally optimal solution can be reached by making locally optimal choices.
- **Optimal Substructure**: An optimal solution to the problem contains optimal solutions to subproblems.
- Classic: Activity Selection, Fractional Knapsack, Huffman Coding, Dijkstra, Kruskal / Prim MST.`
            }
        ]
    }
];
