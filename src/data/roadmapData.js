export const INITIAL_ROADMAP_DATA = [
    {
        phaseId: 1,
        title: "Phase 1: Core Foundations & Basic OOP/HLD",
        weeks: [
            {
                weekNum: 1,
                title: "Big-O, Recursion & Strategy Pattern",
                tasks: [
                    { id: "w1-t1", type: "video", label: "Abdul Bari: 1.1 Recursion & Recurrence Relations", link: "https://www.youtube.com/results?search_query=Abdul+Bari+1.1+Recursion+%26+Recurrence+Relations" },
                    { id: "w1-t2", type: "video", label: "Christopher Okhravi: Strategy Pattern (ep 1)", link: "https://www.youtube.com/results?search_query=Christopher+Okhravi+Strategy+Pattern+ep+1" },
                    { id: "w1-t3", type: "code", label: "LeetCode 1: Two Sum", link: "https://leetcode.com/problems/two-sum/" },
                    { id: "w1-t4", type: "code", label: "LeetCode 242: Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/" },
                    { id: "w1-t5", type: "lld", label: "Implement Strategy Pattern class in Python" }
                ]
            },
            {
                weekNum: 2,
                title: "Arrays, Two Pointers & Sliding Window",
                tasks: [
                    { id: "w2-t1", type: "video", label: "Striver: Sliding Window & Two Pointers Series", link: "https://www.youtube.com/results?search_query=Striver+Sliding+Window+%26+Two+Pointers+Series" },
                    { id: "w2-t2", type: "video", label: "Christopher Okhravi: Observer Pattern (ep 2)", link: "https://www.youtube.com/results?search_query=Christopher+Okhravi+Observer+Pattern+ep+2" },
                    { id: "w2-t3", type: "code", label: "LeetCode 3: Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
                    { id: "w2-t4", type: "code", label: "LeetCode 11: Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/" },
                    { id: "w2-t5", type: "code", label: "LeetCode 121: Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" }
                ]
            },
            {
                weekNum: 3,
                title: "Binary Search, Stacks & Queues",
                tasks: [
                    { id: "w3-t1", type: "video", label: "Striver: Binary Search & Monotonic Stack", link: "https://www.youtube.com/results?search_query=Striver+Binary+Search+%26+Monotonic+Stack" },
                    { id: "w3-t2", type: "code", label: "LeetCode 33: Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
                    { id: "w3-t3", type: "code", label: "LeetCode 20: Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/" },
                    { id: "w3-t4", type: "code", label: "LeetCode 739: Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/" },
                    { id: "w3-t5", type: "code", label: "LeetCode 155: Min Stack", link: "https://leetcode.com/problems/min-stack/" }
                ]
            },
            {
                weekNum: 4,
                title: "Linked Lists, Binary Trees & Decorator Pattern",
                tasks: [
                    { id: "w4-t1", type: "video", label: "Striver: Binary Trees & BST Series", link: "https://www.youtube.com/results?search_query=Striver+Binary+Trees+%26+BST+Series" },
                    { id: "w4-t2", type: "video", label: "Gaurav Sen: System Design Basics", link: "https://www.youtube.com/results?search_query=Gaurav+Sen+System+Design+Basics" },
                    { id: "w4-t3", type: "code", label: "LeetCode 206: Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/" },
                    { id: "w4-t4", type: "code", label: "LeetCode 236: Lowest Common Ancestor", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
                    { id: "w4-t5", type: "code", label: "LeetCode 102: Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" }
                ]
            },
            {
                weekNum: 5,
                title: "Heaps, Priority Queues & Factory Patterns",
                tasks: [
                    { id: "w5-t1", type: "video", label: "Abdul Bari: Heap - Heap Sort - Priority Queues", link: "https://www.youtube.com/results?search_query=Abdul+Bari+Heap+Heap+Sort+Priority+Queues" },
                    { id: "w5-t2", type: "video", label: "Christopher Okhravi: Factory Method Pattern", link: "https://www.youtube.com/results?search_query=Christopher+Okhravi+Factory+Method+Pattern" },
                    { id: "w5-t3", type: "code", label: "LeetCode 215: Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
                    { id: "w5-t4", type: "code", label: "LeetCode 347: Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/" },
                    { id: "w5-t5", type: "code", label: "LeetCode 23: Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/" }
                ]
            }
        ]
    },
    {
        phaseId: 2,
        title: "Phase 2: Advanced DSA & Low-Level Design (LLD)",
        weeks: [
            {
                weekNum: 6,
                title: "Graphs I (BFS, DFS & Topological Sort)",
                tasks: [
                    { id: "w6-t1", type: "video", label: "William Fiset: BFS, DFS & Topological Sort", link: "https://www.youtube.com/results?search_query=William+Fiset+BFS+DFS+%26+Topological+Sort" },
                    { id: "w6-t2", type: "code", label: "LeetCode 200: Number of Islands", link: "https://leetcode.com/problems/number-of-islands/" },
                    { id: "w6-t3", type: "code", label: "LeetCode 207: Course Schedule", link: "https://leetcode.com/problems/course-schedule/" },
                    { id: "w6-t4", type: "code", label: "LeetCode 133: Clone Graph", link: "https://leetcode.com/problems/clone-graph/" }
                ]
            },
            {
                weekNum: 7,
                title: "Graphs II (Dijkstra's & Disjoint Set / Union-Find)",
                tasks: [
                    { id: "w7-t1", type: "video", label: "William Fiset: Dijkstra's Shortest Path & Union Find", link: "https://www.youtube.com/results?search_query=William+Fiset+Dijkstras+Shortest+Path+%26+Union+Find" },
                    { id: "w7-t2", type: "video", label: "ByteByteGo: Consistent Hashing", link: "https://www.youtube.com/results?search_query=ByteByteGo+Consistent+Hashing" },
                    { id: "w7-t3", type: "code", label: "LeetCode 743: Network Delay Time", link: "https://leetcode.com/problems/network-delay-time/" },
                    { id: "w7-t4", type: "code", label: "LeetCode 684: Redundant Connection", link: "https://leetcode.com/problems/redundant-connection/" }
                ]
            },
            {
                weekNum: 8,
                title: "Dynamic Programming I (1D DP & 0/1 Knapsack)",
                tasks: [
                    { id: "w8-t1", type: "video", label: "Striver: Dynamic Programming Series", link: "https://www.youtube.com/results?search_query=Striver+Dynamic+Programming+Series" },
                    { id: "w8-t2", type: "hld", label: "Read: Database Sharding & Partitioning", link: "https://github.com/donnemartin/system-design-primer" },
                    { id: "w8-t3", type: "code", label: "LeetCode 70: Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/" },
                    { id: "w8-t4", type: "code", label: "LeetCode 198: House Robber", link: "https://leetcode.com/problems/house-robber/" },
                    { id: "w8-t5", type: "code", label: "LeetCode 322: Coin Change", link: "https://leetcode.com/problems/coin-change/" }
                ]
            },
            {
                weekNum: 9,
                title: "Dynamic Programming II (Strings & Sequences)",
                tasks: [
                    { id: "w9-t1", type: "video", label: "Abdul Bari: Longest Common Subsequence (LCS)", link: "https://www.youtube.com/results?search_query=Abdul+Bari+Longest+Common+Subsequence+LCS" },
                    { id: "w9-t2", type: "code", label: "LeetCode 1143: Longest Common Subsequence", link: "https://leetcode.com/problems/longest-common-subsequence/" },
                    { id: "w9-t3", type: "code", label: "LeetCode 72: Edit Distance", link: "https://leetcode.com/problems/edit-distance/" },
                    { id: "w9-t4", type: "code", label: "LeetCode 300: Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/" }
                ]
            },
            {
                weekNum: 10,
                title: "Low-Level Design (LLD) Machine Coding Sprint",
                tasks: [
                    { id: "w10-t1", type: "lld", label: "Study Awesome LLD Repo: Parking Lot System", link: "https://github.com/ashishps1/awesome-low-level-design" },
                    { id: "w10-t2", type: "lld", label: "Study Awesome LLD Repo: Elevator Control System", link: "https://github.com/ashishps1/awesome-low-level-design" },
                    { id: "w10-t3", type: "code", label: "Code LLD: Build full Parking Lot in Python with tests" }
                ]
            }
        ]
    },
    {
        phaseId: 3,
        title: "Phase 3: High-Level System Design & Projects",
        weeks: [
            {
                weekNum: 11,
                title: "Distributed System Building Blocks",
                tasks: [
                    { id: "w11-t1", type: "video", label: "ByteByteGo: Caching, Message Queues & SQL vs NoSQL", link: "https://www.youtube.com/results?search_query=ByteByteGo+Caching+Message+Queues+%26+SQL+vs+NoSQL" },
                    { id: "w11-t2", type: "code", label: "Build a Redis-backed API Rate Limiter in Python" }
                ]
            },
            {
                weekNum: 12,
                title: "System Design Walkthroughs I (TinyURL & Web Crawler)",
                tasks: [
                    { id: "w12-t1", type: "video", label: "Gaurav Sen & ByteByteGo: Design TinyURL", link: "https://www.youtube.com/results?search_query=Gaurav+Sen+ByteByteGo+Design+TinyURL" },
                    { id: "w12-t2", type: "hld", label: "Practice: Back-of-envelope math for 10M DAU" }
                ]
            },
            {
                weekNum: 13,
                title: "System Design Walkthroughs II (WhatsApp & Video Streaming)",
                tasks: [
                    { id: "w13-t1", type: "video", label: "ByteByteGo: How WhatsApp Scaled & How Netflix Works", link: "https://www.youtube.com/results?search_query=ByteByteGo+How+WhatsApp+Scaled+%26+How+Netflix+Works" },
                    { id: "w13-t2", type: "hld", label: "Diagram: Real-time chat system with WebSockets + Kafka" }
                ]
            },
            {
                weekNum: 14,
                title: "Advanced DSA (Tries, Segment Trees & Backtracking)",
                tasks: [
                    { id: "w14-t1", type: "code", label: "LeetCode 208: Implement Trie (Prefix Tree)", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
                    { id: "w14-t2", type: "code", label: "LeetCode 212: Word Search II", link: "https://leetcode.com/problems/word-search-ii/" },
                    { id: "w14-t3", type: "code", label: "LeetCode 51: N-Queens", link: "https://leetcode.com/problems/n-queens/" }
                ]
            },
            {
                weekNum: 15,
                title: "Full-Stack Integration Sprint",
                tasks: [
                    { id: "w15-t1", type: "hld", label: "Read Full Stack Open / TOP Modules", link: "https://fullstackopen.com/en/" },
                    { id: "w15-t2", type: "code", label: "Build & Deploy React + Python REST API with Docker" }
                ]
            }
        ]
    },
    {
        phaseId: 4,
        title: "Phase 4: Interview Readiness & Timed Speed Runs",
        weeks: [
            {
                weekNum: 16,
                title: "Timed LeetCode Speed Runs",
                tasks: [
                    { id: "w16-t1", type: "code", label: "Mock Run 1: 3 Mediums in 60 minutes" },
                    { id: "w16-t2", type: "code", label: "Mock Run 2: 3 Mediums in 60 minutes" }
                ]
            },
            {
                weekNum: 17,
                title: "Mock System Design Whiteboarding",
                tasks: [
                    { id: "w17-t1", type: "hld", label: "Execute 45-min whiteboarding simulation for Rate Limiter" },
                    { id: "w17-t2", type: "hld", label: "Execute 45-min whiteboarding simulation for News Feed" }
                ]
            },
            {
                weekNum: 18,
                title: "Final LLD & Behavioral Polish",
                tasks: [
                    { id: "w18-t1", type: "lld", label: "Code Tic-Tac-Toe LLD from scratch in under 45 mins" },
                    { id: "w18-t2", type: "lld", label: "Code Snake & Ladders LLD from scratch in under 45 mins" }
                ]
            }
        ]
    }
];