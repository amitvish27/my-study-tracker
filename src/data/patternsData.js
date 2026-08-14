// 50 Coding Patterns & Pattern Recognition Dataset

export const PATTERN_CATEGORIES = [
    { id: 'all', label: 'All 50 Patterns' },
    { id: 'two-pointers', label: 'Two Pointers & Sliding Window' },
    { id: 'arrays-intervals', label: 'Arrays, Prefix & Intervals' },
    { id: 'binary-search', label: 'Binary Search' },
    { id: 'linked-list', label: 'Linked Lists' },
    { id: 'stacks-queues', label: 'Stacks & Monotonic' },
    { id: 'trees-tries', label: 'Trees, BST & Trie' },
    { id: 'heaps', label: 'Heaps & Top-K' },
    { id: 'backtracking', label: 'Backtracking' },
    { id: 'graphs', label: 'Graphs & DSU' },
    { id: 'dp', label: 'Dynamic Programming' },
    { id: 'bit-matrix', label: 'Bit Manipulation & Matrix' },
    { id: 'design', label: 'Design & Data Structures' },
];

export const CONSTRAINT_GUIDE = [
    {
        constraint: "n <= 20",
        acceptableComplexity: "O(2^n), O(n!)",
        viableApproaches: "Brute force, Backtracking, Recursion, Bitmask DP",
        tip: "Try all possible combinations, subsets, or permutations."
    },
    {
        constraint: "n <= 100",
        acceptableComplexity: "O(n^4), O(n^3)",
        viableApproaches: "Floyd-Warshall, 3D/4D DP, Nested loops",
        tip: "Multi-dimensional DP or cubic graph algorithms are viable."
    },
    {
        constraint: "n <= 1,000 to 5,000",
        acceptableComplexity: "O(n^2)",
        viableApproaches: "2D DP, Nested loops, Selection sort, Matrix traversal",
        tip: "Two nested loops are totally safe. Avoid cubic algorithms."
    },
    {
        constraint: "n <= 10^5 to 10^6",
        acceptableComplexity: "O(n) or O(n log n)",
        viableApproaches: "Sorting, Two Pointers, Sliding Window, Heap, Monotonic Stack, Greedy, DSU, Dijkstra, 1D DP",
        tip: "NO brute force or O(n^2). Must be linear or linearithmic."
    },
    {
        constraint: "n >= 10^7 to 10^9",
        acceptableComplexity: "O(log n) or O(1)",
        viableApproaches: "Binary Search, Math formulas, Bit Manipulation, Fast exponentiation",
        tip: "No linear scan over full range. Logarithmic or constant time only."
    }
];

export const KEYWORD_DICTIONARY = [
    { keyword: "Number of ways / Max or min sum, profit, cost / Can you reach / Longest subsequence", pattern: "Dynamic Programming", category: "dp" },
    { keyword: "Palindrome / Sorted array / Target sum / In-place remove duplicates", pattern: "Two Pointers", category: "two-pointers" },
    { keyword: "Continuous substring or subarray with condition / At most K distinct / Window size", pattern: "Sliding Window", category: "two-pointers" },
    { keyword: "Next greater element / Next smaller element / Daily temperatures / Largest histogram", pattern: "Monotonic Stack", category: "stacks-queues" },
    { keyword: "K largest / K smallest / Top K elements / Running median / Stream extremes", pattern: "Heaps & Priority Queue", category: "heaps" },
    { keyword: "Parentheses validation / Nested structures / Undo operations / Call stack", pattern: "Stack", category: "stacks-queues" },
    { keyword: "Count frequency / Find duplicates / Anagram / Pair sum lookup in O(1)", pattern: "HashMap / HashSet", category: "arrays-intervals" },
    { keyword: "Word search / Prefix matching / Autocomplete / Dictionary search", pattern: "Trie (Prefix Tree)", category: "trees-tries" },
    { keyword: "Connected components / Number of islands or groups / Redundant connection / Cycle", pattern: "Union-Find (DSU) / DFS", category: "graphs" },
    { keyword: "Search in sorted / Minimize the maximum / First or last occurrence / Kth element in sorted space", pattern: "Binary Search on Answer", category: "binary-search" },
    { keyword: "Course schedule / Task dependencies / Valid build order", pattern: "Topological Sort", category: "graphs" },
    { keyword: "Generate all combinations / Subsets / Permutations / N-Queens / Sudoku", pattern: "Backtracking", category: "backtracking" },
    { keyword: "XOR operations / Single number / Power of 2 / Bitmask state", pattern: "Bit Manipulation", category: "bit-matrix" },
    { keyword: "O(1) get and put with LRU eviction / Doubly linked list + Map", pattern: "LRU Cache Design", category: "design" },
];

export const PATTERNS_LIST = [
    {
        id: 1,
        name: "Two Pointers (Opposite Ends)",
        category: "two-pointers",
        summary: "Pointers start at opposite ends (left=0, right=n-1) and move inward based on conditions.",
        whenToUse: [
            "Input is sorted array or palindrome check",
            "Looking for pairs that meet a target condition (sum, area)",
            "Shrinking search space from boundaries inward"
        ],
        template: `def two_pointers_opposite(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        curr_sum = nums[left] + nums[right]
        if curr_sum == target:
            return [left, right]
        elif curr_sum < target:
            left += 1  # need larger sum
        else:
            right -= 1 # need smaller sum
    return []`,
        pitfalls: [
            "Infinite loops if you forget to increment/decrement pointers",
            "Off-by-one errors with left <= right vs left < right",
            "Array must be sorted before applying this pattern for sum targets"
        ],
        classics: [
            { name: "Two Sum II - Input Array Is Sorted", id: "167", difficulty: "Medium", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
            { name: "Container With Most Water", id: "11", difficulty: "Medium", link: "https://leetcode.com/problems/container-with-most-water/" },
            { name: "Valid Palindrome", id: "125", difficulty: "Easy", link: "https://leetcode.com/problems/valid-palindrome/" },
            { name: "3Sum", id: "15", difficulty: "Medium", link: "https://leetcode.com/problems/3sum/" }
        ]
    },
    {
        id: 2,
        name: "Two Pointers Same Direction (Read/Write)",
        category: "two-pointers",
        summary: "One pointer reads through the array while a slower pointer writes valid elements in-place.",
        whenToUse: [
            "In-place array modifications (removing elements, deduplication)",
            "Partitioning array around pivot",
            "Compact array without allocating extra memory O(1) space"
        ],
        template: `def remove_duplicates(nums):
    if not nums: return 0
    w = 0 # write pointer
    for r in range(len(nums)): # read pointer
        if nums[r] != nums[w]:
            w += 1
            nums[w] = nums[r]
    return w + 1 # new length`,
        pitfalls: [
            "Overwriting elements before reading them",
            "Returning wrong final length (w vs w + 1)",
            "Failing to advance write pointer conditionally"
        ],
        classics: [
            { name: "Remove Duplicates from Sorted Array", id: "26", difficulty: "Easy", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
            { name: "Move Zeroes", id: "283", difficulty: "Easy", link: "https://leetcode.com/problems/move-zeroes/" },
            { name: "Remove Element", id: "27", difficulty: "Easy", link: "https://leetcode.com/problems/remove-element/" }
        ]
    },
    {
        id: 3,
        name: "Fast & Slow Pointers (Tortoise-Hare)",
        category: "two-pointers",
        summary: "Two pointers move at different speeds (1 step vs 2 steps) to detect cycles or find midpoints.",
        whenToUse: [
            "Cycle detection in Linked List or cyclic arrays",
            "Finding midpoint of Linked List in a single pass",
            "Happy Number problem (detecting loops in sum of squares)"
        ],
        template: `def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True # cycle detected
    return False`,
        pitfalls: [
            "Missing \`fast and fast.next\` null check resulting in NullPointerException",
            "Wrong update order (advancing after checking equality vs before)",
            "Even length list: choosing left vs right middle node"
        ],
        classics: [
            { name: "Linked List Cycle", id: "141", difficulty: "Easy", link: "https://leetcode.com/problems/linked-list-cycle/" },
            { name: "Linked List Cycle II", id: "142", difficulty: "Medium", link: "https://leetcode.com/problems/linked-list-cycle-ii/" },
            { name: "Middle of the Linked List", id: "876", difficulty: "Easy", link: "https://leetcode.com/problems/middle-of-the-linked-list/" },
            { name: "Happy Number", id: "202", difficulty: "Easy", link: "https://leetcode.com/problems/happy-number/" }
        ]
    },
    {
        id: 4,
        name: "Fixed Sliding Window",
        category: "two-pointers",
        summary: "Maintain a window of fixed size K. Slide by 1 at each step, adding new right element and dropping leftmost.",
        whenToUse: [
            "Finding max/min sum of subarray of exact size K",
            "Checking anagrams of pattern length K in string",
            "Running averages across fixed periods"
        ],
        template: `def max_sub_array_of_size_k(k, nums):
    max_sum, window_sum = 0, 0
    for i in range(len(nums)):
        window_sum += nums[i] # add incoming
        if i >= k - 1:
            max_sum = max(max_sum, window_sum)
            window_sum -= nums[i - (k - 1)] # subtract outgoing
    return max_sum`,
        pitfalls: [
            "Window initialization off-by-one (slide starts at index k-1)",
            "Not subtracting the outgoing element properly",
            "Handling cases where array length < k"
        ],
        classics: [
            { name: "Maximum Average Subarray I", id: "643", difficulty: "Easy", link: "https://leetcode.com/problems/maximum-average-subarray-i/" },
            { name: "Find All Anagrams in a String", id: "438", difficulty: "Medium", link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
            { name: "Permutation in String", id: "567", difficulty: "Medium", link: "https://leetcode.com/problems/permutation-in-string/" }
        ]
    },
    {
        id: 5,
        name: "Variable Sliding Window",
        category: "two-pointers",
        summary: "Expand right pointer to grow window until constraint is met or violated, then shrink from left to restore validity.",
        whenToUse: [
            "Longest substring without repeating characters",
            "Minimum size subarray sum >= S",
            "Subarrays meeting dynamic constraints"
        ],
        template: `def min_sub_array_len(target, nums):
    left = 0
    curr_sum = 0
    min_len = float('inf')
    for right in range(len(nums)):
        curr_sum += nums[right]
        while curr_sum >= target:
            min_len = min(min_len, right - left + 1)
            curr_sum -= nums[left]
            left += 1
    return min_len if min_len != float('inf') else 0`,
        pitfalls: [
            "Using \`if\` instead of \`while\` when shrinking the left window boundary",
            "Updating answer inside the wrong block (longest vs shortest window)",
            "Returning infinity when no valid subarray exists"
        ],
        classics: [
            { name: "Minimum Size Subarray Sum", id: "209", difficulty: "Medium", link: "https://leetcode.com/problems/minimum-size-subarray-sum/" },
            { name: "Longest Substring Without Repeating Characters", id: "3", difficulty: "Medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
            { name: "Max Consecutive Ones III", id: "1004", difficulty: "Medium", link: "https://leetcode.com/problems/max-consecutive-ones-iii/" }
        ]
    },
    {
        id: 6,
        name: "Sliding Window + HashMap",
        category: "two-pointers",
        summary: "Combine a sliding window with a frequency hash map to track character counts and distinct character constraints.",
        whenToUse: [
            "At most K distinct characters",
            "Minimum Window Substring containing all characters of T",
            "Longest repeating character replacement"
        ],
        template: `def length_of_longest_k_distinct(s, k):
    counts = {}
    left = max_len = 0
    for right, ch in enumerate(s):
        counts[ch] = counts.get(ch, 0) + 1
        while len(counts) > k:
            left_ch = s[left]
            counts[left_ch] -= 1
            if counts[left_ch] == 0:
                del counts[left_ch]
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len`,
        pitfalls: [
            "Forgetting to delete keys when count hits 0 (len(map) will remain incorrect)",
            "Comparing match counts incorrectly in Minimum Window Substring",
            "Inefficient map copy operations inside window loops"
        ],
        classics: [
            { name: "Minimum Window Substring", id: "76", difficulty: "Hard", link: "https://leetcode.com/problems/minimum-window-substring/" },
            { name: "Longest Substring with At Most K Distinct Characters", id: "340", difficulty: "Medium", link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/" },
            { name: "Longest Repeating Character Replacement", id: "424", difficulty: "Medium", link: "https://leetcode.com/problems/longest-repeating-character-replacement/" }
        ]
    },
    {
        id: 7,
        name: "Prefix Sum",
        category: "arrays-intervals",
        summary: "Precompute running cumulative sums so any range sum [L, R] can be queried in O(1) time: P[R+1] - P[L].",
        whenToUse: [
            "Repeated range sum queries on static array",
            "Subarray sum equals K (using prefix sum + hash map count)",
            "Continuous subarray divisible by K"
        ],
        template: `def subarray_sum_equals_k(nums, k):
    count = 0
    curr_sum = 0
    prefix_map = {0: 1} # sum -> frequency
    for num in nums:
        curr_sum += num
        count += prefix_map.get(curr_sum - k, 0)
        prefix_map[curr_sum] = prefix_map.get(curr_sum, 0) + 1
    return count`,
        pitfalls: [
            "Forgetting base case {0: 1} in map for prefix sums matching K exactly",
            "Off-by-one errors with 0-indexed vs 1-indexed prefix arrays",
            "Updating map before querying curr_sum - k"
        ],
        classics: [
            { name: "Subarray Sum Equals K", id: "560", difficulty: "Medium", link: "https://leetcode.com/problems/subarray-sum-equals-k/" },
            { name: "Range Sum Query - Immutable", id: "303", difficulty: "Easy", link: "https://leetcode.com/problems/range-sum-query-immutable/" },
            { name: "Contiguous Array", id: "525", difficulty: "Medium", link: "https://leetcode.com/problems/contiguous-array/" }
        ]
    },
    {
        id: 8,
        name: "Difference Array",
        category: "arrays-intervals",
        summary: "Apply range updates [L, R] with value V in O(1) time by setting diff[L] += V and diff[R+1] -= V, then prefix sum.",
        whenToUse: [
            "Multiple range additions/modifications followed by query of final state",
            "Corporate flight bookings, car pooling capacity over time",
            "Range increment operations"
        ],
        template: `def corp_flight_bookings(bookings, n):
    diff = [0] * (n + 2)
    for l, r, seats in bookings:
        diff[l] += seats
        diff[r + 1] -= seats
    res = []
    curr = 0
    for i in range(1, n + 1):
        curr += diff[i]
        res.append(curr)
    return res`,
        pitfalls: [
            "Creating diff array of size n instead of n+2 causing index out of range on r+1",
            "Mixing 1-based indexing of input with 0-based result array"
        ],
        classics: [
            { name: "Corporate Flight Bookings", id: "1109", difficulty: "Medium", link: "https://leetcode.com/problems/corporate-flight-bookings/" },
            { name: "Car Pooling", id: "1094", difficulty: "Medium", link: "https://leetcode.com/problems/car-pooling/" },
            { name: "Range Addition", id: "370", difficulty: "Medium", link: "https://leetcode.com/problems/range-addition/" }
        ]
    },
    {
        id: 9,
        name: "Kadane's Algorithm (Max Subarray)",
        category: "arrays-intervals",
        summary: "Compute maximum contiguous subarray sum in O(n) time by resetting running sum when it drops below zero.",
        whenToUse: [
            "Maximum sum contiguous subarray",
            "Maximum product subarray (track both max and min)",
            "Circular subarray maximum sum"
        ],
        template: `def max_sub_array(nums):
    max_so_far = nums[0]
    curr_max = nums[0]
    for num in nums[1:]:
        curr_max = max(num, curr_max + num)
        max_so_far = max(max_so_far, curr_max)
    return max_so_far`,
        pitfalls: [
            "Initializing max_so_far to 0 instead of nums[0] (fails when all numbers are negative)",
            "Forgetting empty subarray rules if problem allows length 0"
        ],
        classics: [
            { name: "Maximum Subarray", id: "53", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-subarray/" },
            { name: "Maximum Product Subarray", id: "152", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-product-subarray/" },
            { name: "Maximum Sum Circular Subarray", id: "918", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-sum-circular-subarray/" }
        ]
    },
    {
        id: 10,
        name: "Classic Binary Search on Sorted Array",
        category: "binary-search",
        summary: "Divide and conquer search on sorted array in O(log n) time by halving search space at each step.",
        whenToUse: [
            "Find target index in sorted array",
            "Rotated sorted array search",
            "Search in 2D sorted matrix"
        ],
        template: `def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
        pitfalls: [
            "Integer overflow from (left + right) // 2 in typed languages",
            "Infinite loop when left <= right with mid not moving",
            "Off-by-one in loop condition or bounds update"
        ],
        classics: [
            { name: "Binary Search", id: "704", difficulty: "Easy", link: "https://leetcode.com/problems/binary-search/" },
            { name: "Search in Rotated Sorted Array", id: "33", difficulty: "Medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
            { name: "Find Minimum in Rotated Sorted Array", id: "153", difficulty: "Medium", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" }
        ]
    },
    {
        id: 11,
        name: "Binary Search on Answer (Monotonic Predicate)",
        category: "binary-search",
        summary: "Binary search over numeric range [low, high] of possible answers when problem exhibits monotonicity.",
        whenToUse: [
            "Keywords: 'Minimize the maximum' or 'Maximize the minimum'",
            "Koko Eating Bananas, Capacity to Ship Packages, Split Array Largest Sum",
            "Testing if candidate X is valid is easy O(n), but finding optimal directly is hard"
        ],
        template: `import math
def min_eating_speed(piles, h):
    def can_finish(speed):
        return sum(math.ceil(p / speed) for p in piles) <= h
    
    low, high = 1, max(piles)
    ans = high
    while low <= high:
        mid = low + (high - low) // 2
        if can_finish(mid):
            ans = mid
            high = mid - 1
        else:
            low = mid + 1
    return ans`,
        pitfalls: [
            "Wrong search boundaries [low, high] (e.g. low = 0 causing division by zero)",
            "Incorrect monotonicity logic (flipping left and right updates)"
        ],
        classics: [
            { name: "Koko Eating Bananas", id: "875", difficulty: "Medium", link: "https://leetcode.com/problems/koko-eating-bananas/" },
            { name: "Capacity To Ship Packages Within D Days", id: "1011", difficulty: "Medium", link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
            { name: "Split Array Largest Sum", id: "410", difficulty: "Hard", link: "https://leetcode.com/problems/split-array-largest-sum/" }
        ]
    },
    {
        id: 12,
        name: "Lower Bound / Upper Bound Tricks",
        category: "binary-search",
        summary: "Find first index where val >= target (Lower Bound) or first index where val > target (Upper Bound).",
        whenToUse: [
            "Search insert position in sorted array",
            "First and last position of element in sorted array",
            "Count occurrences of target in sorted array"
        ],
        template: `def lower_bound(nums, target):
    l, r = 0, len(nums)
    while l < r:
        mid = l + (r - l) // 2
        if nums[mid] >= target:
            r = mid
        else:
            l = mid + 1
    return l`,
        pitfalls: [
            "Mixing up < vs <= in while loop or condition",
            "Setting r = len(nums) - 1 instead of len(nums) for insert boundary"
        ],
        classics: [
            { name: "Find First and Last Position of Element in Sorted Array", id: "34", difficulty: "Medium", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
            { name: "Search Insert Position", id: "35", difficulty: "Easy", link: "https://leetcode.com/problems/search-insert-position/" }
        ]
    },
    {
        id: 13,
        name: "Dutch National Flag (3-Way Partition)",
        category: "arrays-intervals",
        summary: "Partition an array containing 3 distinct values (0s, 1s, 2s) into 3 groups in-place in a single pass O(n).",
        whenToUse: [
            "Sort colors (0, 1, 2)",
            "Partition around pivot value into < pivot, == pivot, > pivot",
            "In-place three-way grouping"
        ],
        template: `def sort_colors(nums):
    low, mid, high = 0, 0, len(nums) - 1
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1; mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1 # DO NOT advance mid here!`,
        pitfalls: [
            "Advancing mid when swapping with high (uninspected swapped value!)",
            "Loop condition mid < high instead of mid <= high"
        ],
        classics: [
            { name: "Sort Colors", id: "75", difficulty: "Medium", link: "https://leetcode.com/problems/sort-colors/" },
            { name: "Wiggle Sort II", id: "324", difficulty: "Medium", link: "https://leetcode.com/problems/wiggle-sort-ii/" }
        ]
    },
    {
        id: 14,
        name: "Cyclic Sort",
        category: "arrays-intervals",
        summary: "Place each number in range 1..n at its correct index (val-1) by swapping repeatedly in O(n) time and O(1) space.",
        whenToUse: [
            "Numbers are in range 1 to n or 0 to n",
            "Find missing number or duplicate number in array",
            "Find all numbers disappeared in array"
        ],
        template: `def find_disappeared_numbers(nums):
    i = 0
    while i < len(nums):
        correct_idx = nums[i] - 1
        if 0 <= correct_idx < len(nums) and nums[i] != nums[correct_idx]:
            nums[i], nums[correct_idx] = nums[correct_idx], nums[i]
        else:
            i += 1
    return [i + 1 for i, num in enumerate(nums) if num != i + 1]`,
        pitfalls: [
            "Not checking nums[i] != nums[correct_idx] before swapping (infinite loop on duplicates)",
            "Incrementing i unconditionally after swap"
        ],
        classics: [
            { name: "Missing Number", id: "268", difficulty: "Easy", link: "https://leetcode.com/problems/missing-number/" },
            { name: "Find All Numbers Disappeared in an Array", id: "448", difficulty: "Easy", link: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/" },
            { name: "Find the Duplicate Number", id: "287", difficulty: "Medium", link: "https://leetcode.com/problems/find-the-duplicate-number/" }
        ]
    },
    {
        id: 15,
        name: "Merge Intervals",
        category: "arrays-intervals",
        summary: "Sort intervals by start time, then iterate and merge overlapping intervals when curr.start <= prev.end.",
        whenToUse: [
            "Overlapping time intervals (meetings, bookings, ranges)",
            "Finding non-overlapping coverage",
            "Compressing overlapping segment queries"
        ],
        template: `def merge_intervals(intervals):
    if not intervals: return []
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for start, end in intervals[1:]:
        prev_start, prev_end = merged[-1]
        if start <= prev_end:
            merged[-1][1] = max(prev_end, end)
        else:
            merged.append([start, end])
    return merged`,
        pitfalls: [
            "Forgetting max(prev_end, end) when an interval engulfs the next",
            "Forgetting to sort by start time first"
        ],
        classics: [
            { name: "Merge Intervals", id: "56", difficulty: "Medium", link: "https://leetcode.com/problems/merge-intervals/" },
            { name: "Non-overlapping Intervals", id: "435", difficulty: "Medium", link: "https://leetcode.com/problems/non-overlapping-intervals/" }
        ]
    },
    {
        id: 16,
        name: "Insert Interval",
        category: "arrays-intervals",
        summary: "Insert a new interval into a sorted non-overlapping list in 3 phases: left disjoint, merge overlaps, right disjoint.",
        whenToUse: [
            "Inserting new schedule into existing sorted non-overlapping bookings",
            "Continuous disjoint interval stream updates"
        ],
        template: `def insert_interval(intervals, new_interval):
    res = []
    i = 0
    n = len(intervals)
    while i < n and intervals[i][1] < new_interval[0]:
        res.append(intervals[i])
        i += 1
    while i < n and intervals[i][0] <= new_interval[1]:
        new_interval[0] = min(new_interval[0], intervals[i][0])
        new_interval[1] = max(new_interval[1], intervals[i][1])
        i += 1
    res.append(new_interval)
    while i < n:
        res.append(intervals[i])
        i += 1
    return res`,
        pitfalls: [
            "Modifying input list in-place",
            "Edge cases when new interval is placed at the very start or end"
        ],
        classics: [
            { name: "Insert Interval", id: "57", difficulty: "Medium", link: "https://leetcode.com/problems/insert-interval/" }
        ]
    },
    {
        id: 17,
        name: "Sweep Line",
        category: "arrays-intervals",
        summary: "Convert intervals into discrete events (time, +1) and (time, -1). Sort by time and track active overlaps.",
        whenToUse: [
            "Find maximum number of concurrent meetings / peak room usage",
            "The Skyline Problem / Range overlap counts"
        ],
        template: `def min_meeting_rooms(intervals):
    events = []
    for start, end in intervals:
        events.append((start, 1))
        events.append((end, -1))
    events.sort(key=lambda x: (x[0], x[1]))
    max_rooms = curr_rooms = 0
    for time, count in events:
        curr_rooms += count
        max_rooms = max(max_rooms, curr_rooms)
    return max_rooms`,
        pitfalls: [
            "Tie-breaking: process end (-1) before start (+1) if meeting can end and start at same instant",
            "Large coordinate ranges requiring 64-bit timestamps"
        ],
        classics: [
            { name: "Meeting Rooms II", id: "253", difficulty: "Medium", link: "https://leetcode.com/problems/meeting-rooms-ii/" },
            { name: "The Skyline Problem", id: "218", difficulty: "Hard", link: "https://leetcode.com/problems/the-skyline-problem/" }
        ]
    },
    {
        id: 18,
        name: "In-Place Linked List Reversal",
        category: "linked-list",
        summary: "Iteratively reverse pointers using prev, curr, and next pointers in O(n) time and O(1) space.",
        whenToUse: [
            "Reverse entire linked list",
            "Reverse linked list between positions left and right",
            "Reverse nodes in k-Group"
        ],
        template: `def reverse_list(head):
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev`,
        pitfalls: [
            "Losing reference to curr.next before overwriting it",
            "Not reconnecting reversed subsegments to surrounding list"
        ],
        classics: [
            { name: "Reverse Linked List", id: "206", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-linked-list/" },
            { name: "Reverse Linked List II", id: "92", difficulty: "Medium", link: "https://leetcode.com/problems/reverse-linked-list-ii/" },
            { name: "Reverse Nodes in k-Group", id: "25", difficulty: "Hard", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/" }
        ]
    },
    {
        id: 19,
        name: "Dummy Head Linked List",
        category: "linked-list",
        summary: "Create a pseudo-head node dummy = ListNode(0, head) to eliminate edge cases when inserting/deleting the head.",
        whenToUse: [
            "Removing Nth node from end of list",
            "Merging two sorted lists or partition list",
            "Removing all duplicate values from sorted list"
        ],
        template: `def remove_nth_from_end(head, n):
    dummy = ListNode(0, head)
    fast = slow = dummy
    for _ in range(n + 1):
        fast = fast.next
    while fast:
        slow = slow.next
        fast = fast.next
    slow.next = slow.next.next
    return dummy.next`,
        pitfalls: [
            "Returning head instead of dummy.next when original head was removed"
        ],
        classics: [
            { name: "Remove Nth Node From End of List", id: "19", difficulty: "Medium", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
            { name: "Merge Two Sorted Lists", id: "21", difficulty: "Easy", link: "https://leetcode.com/problems/merge-two-sorted-lists/" }
        ]
    },
    {
        id: 20,
        name: "LL Cycle & Midpoint (Floyd's Algorithm)",
        category: "linked-list",
        summary: "Find cycle start node by advancing one pointer from head and one from intersection at equal speeds.",
        whenToUse: [
            "Detect cycle and return node where cycle begins",
            "Palindrome linked list check",
            "Reorder list / Sort list with merge sort"
        ],
        template: `def detect_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            p1, p2 = head, slow
            while p1 != p2:
                p1 = p1.next
                p2 = p2.next
            return p1
    return None`,
        pitfalls: [
            "List with fewer than 2 nodes",
            "Failing to reset one pointer back to head"
        ],
        classics: [
            { name: "Linked List Cycle II", id: "142", difficulty: "Medium", link: "https://leetcode.com/problems/linked-list-cycle-ii/" },
            { name: "Palindrome Linked List", id: "234", difficulty: "Easy", link: "https://leetcode.com/problems/palindrome-linked-list/" }
        ]
    },
    {
        id: 21,
        name: "Monotonic Stack",
        category: "stacks-queues",
        summary: "Maintain a stack of elements in strictly increasing or decreasing order. Elements are popped when monotonicity breaks.",
        whenToUse: [
            "Next Greater Element (NGE) / Next Smaller Element (NSE)",
            "Daily temperatures / Stock span",
            "Sum of subarray minimums / Trapping rain water"
        ],
        template: `def next_greater_elements(nums):
    n = len(nums)
    res = [-1] * n
    stack = [] # stores indices
    for i in range(n):
        while stack and nums[i] > nums[stack[-1]]:
            prev_idx = stack.pop()
            res[prev_idx] = nums[i]
        stack.append(i)
    return res`,
        pitfalls: [
            "Storing values instead of indices in stack",
            "Strict inequality (>) vs non-strict (>=) depending on duplicate handling"
        ],
        classics: [
            { name: "Next Greater Element I", id: "496", difficulty: "Easy", link: "https://leetcode.com/problems/next-greater-element-i/" },
            { name: "Daily Temperatures", id: "739", difficulty: "Medium", link: "https://leetcode.com/problems/daily-temperatures/" },
            { name: "Trapping Rain Water", id: "42", difficulty: "Hard", link: "https://leetcode.com/problems/trapping-rain-water/" }
        ]
    },
    {
        id: 22,
        name: "Monotonic Queue",
        category: "stacks-queues",
        summary: "Double-ended queue (deque) maintaining monotonic indices to query running max/min over a sliding window in O(n) total.",
        whenToUse: [
            "Sliding Window Maximum / Minimum",
            "Constrained Subsequence Sum",
            "Jump Game VI"
        ],
        template: `from collections import deque
def max_sliding_window(nums, k):
    dq = deque()
    res = []
    for i in range(len(nums)):
        if dq and dq[0] < i - k + 1:
            dq.popleft()
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            res.append(nums[dq[0]])
    return res`,
        pitfalls: [
            "Storing values instead of indices",
            "Popping from wrong end of deque"
        ],
        classics: [
            { name: "Sliding Window Maximum", id: "239", difficulty: "Hard", link: "https://leetcode.com/problems/sliding-window-maximum/" }
        ]
    },
    {
        id: 23,
        name: "Parentheses & Stack Validation",
        category: "stacks-queues",
        summary: "Use stack to match opening and closing delimiters or evaluate nested expressions.",
        whenToUse: [
            "Valid parentheses matching",
            "Score of parentheses / Remove invalid parentheses",
            "Evaluate Reverse Polish Notation (RPN)"
        ],
        template: `def is_valid(s):
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return not stack`,
        pitfalls: [
            "Popping from empty stack when encountering closing bracket first",
            "Returning True while stack still contains unmatched opening brackets"
        ],
        classics: [
            { name: "Valid Parentheses", id: "20", difficulty: "Easy", link: "https://leetcode.com/problems/valid-parentheses/" },
            { name: "Evaluate Reverse Polish Notation", id: "150", difficulty: "Medium", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" }
        ]
    },
    {
        id: 24,
        name: "Next Greater Element & Largest Rectangle",
        category: "stacks-queues",
        summary: "Stack of indices to calculate area boundaries in histogram or circular array NGEs.",
        whenToUse: [
            "Largest Rectangle in Histogram",
            "Maximal Rectangle in 2D binary matrix",
            "Sum of Subarray Minimums"
        ],
        template: `def largest_rectangle_area(heights):
    heights.append(0)
    stack = [-1]
    max_area = 0
    for i in range(len(heights)):
        while stack[-1] != -1 and heights[stack[-1]] >= heights[i]:
            h = heights[stack.pop()]
            w = i - stack[-1] - 1
            max_area = max(max_area, h * w)
        stack.append(i)
    heights.pop()
    return max_area`,
        pitfalls: [
            "Width calculation: w = i - stack[-1] - 1 (must use new stack top after popping h)",
            "Forgetting sentinel value at end to flush remaining bars"
        ],
        classics: [
            { name: "Largest Rectangle in Histogram", id: "84", difficulty: "Hard", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
            { name: "Maximal Rectangle", id: "85", difficulty: "Hard", link: "https://leetcode.com/problems/maximal-rectangle/" }
        ]
    },
    {
        id: 25,
        name: "Tree BFS (Level Order Traversal)",
        category: "trees-tries",
        summary: "Traverse binary tree level-by-level using a queue and level-size loop.",
        whenToUse: [
            "Level order traversal, Zigzag level order",
            "Right/Left side view of binary tree",
            "Shortest path in unweighted tree"
        ],
        template: `from collections import deque
def level_order(root):
    if not root: return []
    res = []
    q = deque([root])
    while q:
        level_size = len(q)
        level = []
        for _ in range(level_size):
            node = q.popleft()
            level.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        res.append(level)
    return res`,
        pitfalls: [
            "Evaluating len(q) dynamically inside loop instead of snapshotting level_size",
            "Missing root is None check"
        ],
        classics: [
            { name: "Binary Tree Level Order Traversal", id: "102", difficulty: "Medium", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
            { name: "Binary Tree Right Side View", id: "199", difficulty: "Medium", link: "https://leetcode.com/problems/binary-tree-right-side-view/" }
        ]
    },
    {
        id: 26,
        name: "Tree DFS (Pre / In / Postorder)",
        category: "trees-tries",
        summary: "Recursive and stack-based tree traversals. Inorder yields sorted values in BST; Postorder aggregates child subtree results.",
        whenToUse: [
            "Inorder: BST validation, Kth smallest element in BST",
            "Postorder: Diameter, Maximum Path Sum, Subtree calculations",
            "Preorder: Serialization, Clone binary tree"
        ],
        template: `def inorder_traversal(root):
    res, stack = [], []
    curr = root
    while curr or stack:
        while curr:
            stack.append(curr)
            curr = curr.left
        curr = stack.pop()
        res.append(curr.val)
        curr = curr.right
    return res`,
        pitfalls: [
            "Stack overflow on heavily skewed trees when using pure recursion"
        ],
        classics: [
            { name: "Binary Tree Inorder Traversal", id: "94", difficulty: "Easy", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
            { name: "Binary Tree Maximum Path Sum", id: "124", difficulty: "Hard", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
            { name: "Diameter of Binary Tree", id: "543", difficulty: "Easy", link: "https://leetcode.com/problems/diameter-of-binary-tree/" }
        ]
    },
    {
        id: 27,
        name: "Binary Tree Paths & Postorder Aggregate",
        category: "trees-tries",
        summary: "Backtrack root-to-leaf paths or compute height/diameter by aggregating bottom-up.",
        whenToUse: [
            "Path Sum I, II, III",
            "Lowest Common Ancestor / Tree Diameter",
            "All root-to-leaf paths"
        ],
        template: `def path_sum(root, target_sum):
    res = []
    def dfs(node, remaining, path):
        if not node: return
        path.append(node.val)
        if not node.left and not node.right and remaining == node.val:
            res.append(list(path))
        dfs(node.left, remaining - node.val, path)
        dfs(node.right, remaining - node.val, path)
        path.pop()
    dfs(root, target_sum, [])
    return res`,
        pitfalls: [
            "Mutating path without backtracking (path.pop())",
            "Appending path reference directly without list(path) copy"
        ],
        classics: [
            { name: "Path Sum II", id: "113", difficulty: "Medium", link: "https://leetcode.com/problems/path-sum-ii/" }
        ]
    },
    {
        id: 28,
        name: "BST Properties, Validation & Kth Smallest",
        category: "trees-tries",
        summary: "In a BST, all left nodes < node < all right nodes. Validate using (low, high) bounds.",
        whenToUse: [
            "Validate Binary Search Tree",
            "Kth Smallest Element in a BST",
            "Convert Sorted Array to Binary Search Tree"
        ],
        template: `def is_valid_bst(root):
    def validate(node, low=float('-inf'), high=float('inf')):
        if not node: return True
        if not (low < node.val < high):
            return False
        return validate(node.left, low, node.val) and validate(node.right, node.val, high)
    return validate(root)`,
        pitfalls: [
            "Only comparing node with immediate children instead of entire subtree bounds"
        ],
        classics: [
            { name: "Validate Binary Search Tree", id: "98", difficulty: "Medium", link: "https://leetcode.com/problems/validate-binary-search-tree/" },
            { name: "Kth Smallest Element in a BST", id: "230", difficulty: "Medium", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" }
        ]
    },
    {
        id: 29,
        name: "LCA (Lowest Common Ancestor)",
        category: "trees-tries",
        summary: "In BST, walk down using value comparisons. In binary tree, use postorder recursion.",
        whenToUse: [
            "Lowest common ancestor in Binary Tree or BST",
            "Shortest distance between two nodes in tree"
        ],
        template: `def lowest_common_ancestor(root, p, q):
    if not root or root == p or root == q:
        return root
    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)
    if left and right:
        return root
    return left if left else right`,
        pitfalls: [
            "In BST: failing to use value comparisons for O(h) iterative search"
        ],
        classics: [
            { name: "Lowest Common Ancestor of a Binary Tree", id: "236", difficulty: "Medium", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
            { name: "Lowest Common Ancestor of a BST", id: "235", difficulty: "Medium", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" }
        ]
    },
    {
        id: 30,
        name: "Trie (Prefix Tree)",
        category: "trees-tries",
        summary: "Tree structure where each node represents a character to support fast O(L) prefix search and word lookups.",
        whenToUse: [
            "Implement Trie (Prefix Tree)",
            "Design Add and Search Words Data Structure",
            "Word Search II (Grid DFS + Trie pruning)"
        ],
        template: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        curr = self.root
        for ch in word:
            if ch not in curr.children:
                curr.children[ch] = TrieNode()
            curr = curr.children[ch]
        curr.is_end = True

    def search(self, word: str) -> bool:
        curr = self.root
        for ch in word:
            if ch not in curr.children: return False
            curr = curr.children[ch]
        return curr.is_end

    def startsWith(self, prefix: str) -> bool:
        curr = self.root
        for ch in prefix:
            if ch not in curr.children: return False
            curr = curr.children[ch]
        return True`,
        pitfalls: [
            "Confusing search (is_end == True) with startsWith (reachability)",
            "Word Search II: forgetting to prune leaf nodes"
        ],
        classics: [
            { name: "Implement Trie (Prefix Tree)", id: "208", difficulty: "Medium", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
            { name: "Word Search II", id: "212", difficulty: "Hard", link: "https://leetcode.com/problems/word-search-ii/" }
        ]
    },
    {
        id: 31,
        name: "Top K with Heap",
        category: "heaps",
        summary: "Maintain a min-heap of size K to find K largest elements in O(n log k) time and O(k) space.",
        whenToUse: [
            "Kth largest element in array / stream",
            "Top K frequent elements / words",
            "Partial sorting on huge streaming data"
        ],
        template: `import heapq
from collections import Counter

def top_k_frequent(nums, k):
    count = Counter(nums)
    return heapq.nlargest(k, count.keys(), key=count.get)`,
        pitfalls: [
            "Using max-heap of size N (O(n log n)) instead of min-heap of size K (O(n log k))"
        ],
        classics: [
            { name: "Kth Largest Element in an Array", id: "215", difficulty: "Medium", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
            { name: "Top K Frequent Elements", id: "347", difficulty: "Medium", link: "https://leetcode.com/problems/top-k-frequent-elements/" }
        ]
    },
    {
        id: 32,
        name: "Two Heaps (Running Median)",
        category: "heaps",
        summary: "Balance a max-heap (lower half) and a min-heap (upper half) so median is accessible in O(1) time.",
        whenToUse: [
            "Find Median from Data Stream",
            "Sliding Window Median"
        ],
        template: `import heapq

class MedianFinder:
    def __init__(self):
        self.small = [] # max-heap (negate values)
        self.large = [] # min-heap

    def addNum(self, num: int) -> None:
        heapq.heappush(self.small, -num)
        if self.small and self.large and (-self.small[0] > self.large[0]):
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
            
        if len(self.small) > len(self.large) + 1:
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        elif len(self.large) > len(self.small):
            val = heapq.heappop(self.large)
            heapq.heappush(self.small, -val)

    def findMedian(self) -> float:
        if len(self.small) > len(self.large):
            return float(-self.small[0])
        return (-self.small[0] + self.large[0]) / 2.0`,
        pitfalls: [
            "Forgetting that python heapq is min-heap by default",
            "Forgetting to rebalance sizes after every push"
        ],
        classics: [
            { name: "Find Median from Data Stream", id: "295", difficulty: "Hard", link: "https://leetcode.com/problems/find-median-from-data-stream/" }
        ]
    },
    {
        id: 33,
        name: "Subsets Backtracking",
        category: "backtracking",
        summary: "Generate all 2^n subsets using choice/no-choice or cascade loop with start index.",
        whenToUse: [
            "Generate power set of array",
            "Subsets with duplicates (sort first, skip duplicate adjacent)"
        ],
        template: `def subsets(nums):
    res = []
    def backtrack(start, path):
        res.append(list(path))
        for i in range(start, len(nums)):
            path.append(nums[i])
            backtrack(i + 1, path)
            path.pop()
    backtrack(0, [])
    return res`,
        pitfalls: [
            "Modifying path without popping after recursive call",
            "Subsets II: not sorting first and skipping duplicates"
        ],
        classics: [
            { name: "Subsets", id: "78", difficulty: "Medium", link: "https://leetcode.com/problems/subsets/" },
            { name: "Subsets II", id: "90", difficulty: "Medium", link: "https://leetcode.com/problems/subsets-ii/" }
        ]
    },
    {
        id: 34,
        name: "Permutations Backtracking",
        category: "backtracking",
        summary: "Generate all n! orderings using a boolean used array or in-place swapping.",
        whenToUse: [
            "Generate all orderings of array",
            "Permutations with duplicates (Permutations II)"
        ],
        template: `def permute(nums):
    res = []
    used = [False] * len(nums)
    def backtrack(path):
        if len(path) == len(nums):
            res.append(list(path))
            return
        for i in range(len(nums)):
            if used[i]: continue
            used[i] = True
            path.append(nums[i])
            backtrack(path)
            path.pop()
            used[i] = False
    backtrack([])
    return res`,
        pitfalls: [
            "Forgetting to reset used[i] = False during backtrack step"
        ],
        classics: [
            { name: "Permutations", id: "46", difficulty: "Medium", link: "https://leetcode.com/problems/permutations/" }
        ]
    },
    {
        id: 35,
        name: "Combination Sum",
        category: "backtracking",
        summary: "Find combinations that sum to target. Reuse allowed: pass i. No reuse: pass i+1.",
        whenToUse: [
            "Combination Sum I (unlimited element reuse)",
            "Combination Sum II (each number used once, skip duplicate branches)"
        ],
        template: `def combination_sum(candidates, target):
    res = []
    def backtrack(start, target_rem, path):
        if target_rem == 0:
            res.append(list(path))
            return
        if target_rem < 0:
            return
        for i in range(start, len(candidates)):
            path.append(candidates[i])
            backtrack(i, target_rem - candidates[i], path)
            path.pop()
    backtrack(0, target, [])
    return res`,
        pitfalls: [
            "Passing i + 1 when reuse is allowed, or passing i when reuse is prohibited"
        ],
        classics: [
            { name: "Combination Sum", id: "39", difficulty: "Medium", link: "https://leetcode.com/problems/combination-sum/" },
            { name: "Combination Sum II", id: "40", difficulty: "Medium", link: "https://leetcode.com/problems/combination-sum-ii/" }
        ]
    },
    {
        id: 36,
        name: "N-Queens & Constraint Backtracking",
        category: "backtracking",
        summary: "Place elements row by row, tracking occupied columns and diagonals using sets for O(1) constraint checks.",
        whenToUse: [
            "N-Queens I & II",
            "Sudoku Solver"
        ],
        template: `def solve_n_queens(n):
    res = []
    cols = set()
    pos_diag = set() # (r + c)
    neg_diag = set() # (r - c)
    board = [["."] * n for _ in range(n)]
    
    def backtrack(r):
        if r == n:
            res.append(["".join(row) for row in board])
            return
        for c in range(n):
            if c in cols or (r + c) in pos_diag or (r - c) in neg_diag:
                continue
            cols.add(c); pos_diag.add(r + c); neg_diag.add(r - c)
            board[r][c] = "Q"
            backtrack(r + 1)
            cols.remove(c); pos_diag.remove(r + c); neg_diag.remove(r - c)
            board[r][c] = "."
    backtrack(0)
    return res`,
        pitfalls: [
            "Positive diagonal is r + c, negative diagonal is r - c"
        ],
        classics: [
            { name: "N-Queens", id: "51", difficulty: "Hard", link: "https://leetcode.com/problems/n-queens/" },
            { name: "Sudoku Solver", id: "37", difficulty: "Hard", link: "https://leetcode.com/problems/sudoku-solver/" }
        ]
    },
    {
        id: 37,
        name: "Graph DFS & Cycle Detection",
        category: "graphs",
        summary: "Traverse graph deeply. Detect cycles in directed graph with 3 colors or recursion stack.",
        whenToUse: [
            "Connected components in graph",
            "Cycle detection in directed / undirected graphs",
            "Clone graph"
        ],
        template: `def has_cycle_directed(num_courses, prerequisites):
    adj = {i: [] for i in range(num_courses)}
    for dest, src in prerequisites:
        adj[src].append(dest)
    visited = [0] * num_courses # 0: unvisited, 1: visiting, 2: visited
    
    def dfs(u):
        if visited[u] == 1: return True
        if visited[u] == 2: return False
        visited[u] = 1
        for v in adj[u]:
            if dfs(v): return True
        visited[u] = 2
        return False
        
    for i in range(num_courses):
        if dfs(i): return True
    return False`,
        pitfalls: [
            "In directed graph, simple boolean visited is not enough (need 3 colors / recursion stack)"
        ],
        classics: [
            { name: "Course Schedule", id: "207", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule/" },
            { name: "Clone Graph", id: "133", difficulty: "Medium", link: "https://leetcode.com/problems/clone-graph/" }
        ]
    },
    {
        id: 38,
        name: "Graph BFS (Shortest Path & 0-1 BFS)",
        category: "graphs",
        summary: "Find shortest path in unweighted graph with standard BFS; or in 0/1 weighted graphs with deque.",
        whenToUse: [
            "Shortest path in unweighted maze / grid",
            "Word Ladder I & II",
            "Rotten Oranges"
        ],
        template: `from collections import deque
def oranges_rotting(grid):
    rows, cols = len(grid), len(grid[0])
    q = deque()
    fresh = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 2: q.append((r, c))
            elif grid[r][c] == 1: fresh += 1
            
    time = 0
    directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
    while q and fresh > 0:
        time += 1
        for _ in range(len(q)):
            r, c = q.popleft()
            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                    grid[nr][nc] = 2
                    fresh -= 1
                    q.append((nr, nc))
    return time if fresh == 0 else -1`,
        pitfalls: [
            "Marking node visited when popped from queue instead of when pushed"
        ],
        classics: [
            { name: "Rotting Oranges", id: "994", difficulty: "Medium", link: "https://leetcode.com/problems/rotting-oranges/" },
            { name: "Word Ladder", id: "127", difficulty: "Hard", link: "https://leetcode.com/problems/word-ladder/" }
        ]
    },
    {
        id: 39,
        name: "Topological Sort (Kahn's & DFS)",
        category: "graphs",
        summary: "Order nodes in Directed Acyclic Graph (DAG) such that for every directed edge u -> v, u comes before v.",
        whenToUse: [
            "Task / build scheduling with dependencies",
            "Course Schedule II",
            "Alien Dictionary"
        ],
        template: `from collections import deque
def find_order(num_courses, prerequisites):
    adj = {i: [] for i in range(num_courses)}
    indegree = [0] * num_courses
    for dest, src in prerequisites:
        adj[src].append(dest)
        indegree[dest] += 1
        
    q = deque([i for i in range(num_courses) if indegree[i] == 0])
    order = []
    while q:
        u = q.popleft()
        order.append(u)
        for v in adj[u]:
            indegree[v] -= 1
            if indegree[v] == 0:
                q.append(v)
    return order if len(order) == num_courses else []`,
        pitfalls: [
            "Applying topological sort to graphs with cycles (len(order) != num_courses indicates cycle)"
        ],
        classics: [
            { name: "Course Schedule II", id: "210", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule-ii/" }
        ]
    },
    {
        id: 40,
        name: "Union-Find (DSU with Path Compression + Rank)",
        category: "graphs",
        summary: "Maintain disjoint sets to efficiently test connectivity and merge groups in nearly O(1) time.",
        whenToUse: [
            "Number of connected components / islands",
            "Redundant connection (cycle detection in undirected graph)",
            "Accounts Merge"
        ],
        template: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [1] * n
        self.components = n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x]) # Path compression
        return self.parent[x]

    def union(self, x, y):
        root_x, root_y = self.find(x), self.find(y)
        if root_x == root_y:
            return False
        if self.rank[root_x] < self.rank[root_y]:
            root_x, root_y = root_y, root_x
        self.parent[root_y] = root_x
        if self.rank[root_x] == self.rank[root_y]:
            self.rank[root_x] += 1
        self.components -= 1
        return True`,
        pitfalls: [
            "Forgetting path compression in find() which degrades complexity to O(n)"
        ],
        classics: [
            { name: "Number of Provinces", id: "547", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-provinces/" },
            { name: "Redundant Connection", id: "684", difficulty: "Medium", link: "https://leetcode.com/problems/redundant-connection/" }
        ]
    },
    {
        id: 41,
        name: "Dijkstra's Shortest Path",
        category: "graphs",
        summary: "Find shortest path from source in non-negative weighted graph using min-heap in O((V + E) log V).",
        whenToUse: [
            "Network delay time",
            "Path with Minimum Effort",
            "Swim in Rising Water"
        ],
        template: `import heapq

def network_delay_time(times, n, k):
    adj = {i: [] for i in range(1, n + 1)}
    for u, v, w in times:
        adj[u].append((v, w))
        
    dist = {i: float('inf') for i in range(1, n + 1)}
    dist[k] = 0
    pq = [(0, k)]
    
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]: continue
        for v, w in adj[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))
                
    max_time = max(dist.values())
    return max_time if max_time != float('inf') else -1`,
        pitfalls: [
            "Dijkstra FAILS with negative edge weights",
            "Forgetting if d > dist[u]: continue"
        ],
        classics: [
            { name: "Network Delay Time", id: "743", difficulty: "Medium", link: "https://leetcode.com/problems/network-delay-time/" },
            { name: "Path with Minimum Effort", id: "1631", difficulty: "Medium", link: "https://leetcode.com/problems/path-with-minimum-effort/" }
        ]
    },
    {
        id: 42,
        name: "0/1 Knapsack DP",
        category: "dp",
        summary: "Items can only be chosen 0 or 1 time. Optimize value under capacity W. In 1D DP, iterate capacity backwards from W to w_i.",
        whenToUse: [
            "Partition Equal Subset Sum",
            "Target Sum",
            "Last Stone Weight II"
        ],
        template: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0: return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    
    for num in nums:
        # iterate BACKWARDS
        for w in range(target, num - 1, -1):
            dp[w] = dp[w] or dp[w - num]
    return dp[target]`,
        pitfalls: [
            "Iterating capacity forward in 1D array turns it into Unbounded Knapsack"
        ],
        classics: [
            { name: "Partition Equal Subset Sum", id: "416", difficulty: "Medium", link: "https://leetcode.com/problems/partition-equal-subset-sum/" },
            { name: "Target Sum", id: "494", difficulty: "Medium", link: "https://leetcode.com/problems/target-sum/" }
        ]
    },
    {
        id: 43,
        name: "Unbounded Knapsack & Coin Change",
        category: "dp",
        summary: "Items can be reused infinitely. In 1D DP, iterate capacity forward from coin value up to W.",
        whenToUse: [
            "Coin Change (minimum coins)",
            "Coin Change II (number of combinations)",
            "Rod Cutting problem"
        ],
        template: `def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for coin in coins:
        for w in range(coin, amount + 1):
            dp[w] = min(dp[w], dp[w - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1`,
        pitfalls: [
            "Loop order: coins outer loop = combinations; amount outer loop = permutations"
        ],
        classics: [
            { name: "Coin Change", id: "322", difficulty: "Medium", link: "https://leetcode.com/problems/coin-change/" },
            { name: "Coin Change II", id: "518", difficulty: "Medium", link: "https://leetcode.com/problems/coin-change-ii/" }
        ]
    },
    {
        id: 44,
        name: "Fibonacci-Style / Linear DP",
        category: "dp",
        summary: "State depends on 1 or 2 previous states: dp[i] = dp[i-1] + dp[i-2]. Optimize space to O(1) using variables.",
        whenToUse: [
            "Climbing Stairs",
            "House Robber I & II",
            "Decode Ways"
        ],
        template: `def rob(nums):
    rob1 = rob2 = 0
    for n in nums:
        temp = max(n + rob1, rob2)
        rob1 = rob2
        rob2 = temp
    return rob2`,
        pitfalls: [
            "House Robber II: circular houses require running DP twice",
            "Decode Ways: invalid leading zeros ('0')"
        ],
        classics: [
            { name: "Climbing Stairs", id: "70", difficulty: "Easy", link: "https://leetcode.com/problems/climbing-stairs/" },
            { name: "House Robber", id: "198", difficulty: "Medium", link: "https://leetcode.com/problems/house-robber/" }
        ]
    },
    {
        id: 45,
        name: "LCS & Edit Distance (2D String DP)",
        category: "dp",
        summary: "Compare two strings using 2D grid DP: dp[i][j] represents the answer for prefixes s1[0..i-1] and s2[0..j-1].",
        whenToUse: [
            "Longest Common Subsequence",
            "Edit Distance (Levenshtein)",
            "Distinct Subsequences"
        ],
        template: `def longest_common_subsequence(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = 1 + dp[i - 1][j - 1]
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]`,
        pitfalls: [
            "Off-by-one with 1-based DP table indexing vs 0-based string characters (text1[i-1])"
        ],
        classics: [
            { name: "Longest Common Subsequence", id: "1143", difficulty: "Medium", link: "https://leetcode.com/problems/longest-common-subsequence/" },
            { name: "Edit Distance", id: "72", difficulty: "Medium", link: "https://leetcode.com/problems/edit-distance/" }
        ]
    },
    {
        id: 46,
        name: "LIS (Longest Increasing Subsequence)",
        category: "dp",
        summary: "Solve in O(n^2) DP or in O(n log n) using patience sorting / binary search on tails array.",
        whenToUse: [
            "Longest Increasing Subsequence",
            "Russian Doll Envelopes"
        ],
        template: `import bisect

def length_of_lis(nums):
    tails = []
    for x in nums:
        idx = bisect.bisect_left(tails, x)
        if idx == len(tails):
            tails.append(x)
        else:
            tails[idx] = x
    return len(tails)`,
        pitfalls: [
            "tails array is NOT the actual LIS subsequence itself"
        ],
        classics: [
            { name: "Longest Increasing Subsequence", id: "300", difficulty: "Medium", link: "https://leetcode.com/problems/longest-increasing-subsequence/" }
        ]
    },
    {
        id: 47,
        name: "Grid DP (Unique Paths & Minimum Path Sum)",
        category: "dp",
        summary: "Find paths moving Right and Down in a grid: dp[r][c] = cost + min(dp[r-1][c], dp[r][c-1]).",
        whenToUse: [
            "Unique Paths I & II",
            "Minimum Path Sum",
            "Dungeon Game"
        ],
        template: `def unique_paths_with_obstacles(grid):
    m, n = len(grid), len(grid[0])
    dp = [0] * n
    dp[0] = 1 if grid[0][0] == 0 else 0
    for r in range(m):
        for c in range(n):
            if grid[r][c] == 1:
                dp[c] = 0
            elif c > 0:
                dp[c] += dp[c - 1]
    return dp[-1]`,
        pitfalls: [
            "Starting cell (0, 0) or target cell having an obstacle"
        ],
        classics: [
            { name: "Unique Paths", id: "62", difficulty: "Medium", link: "https://leetcode.com/problems/unique-paths/" },
            { name: "Minimum Path Sum", id: "64", difficulty: "Medium", link: "https://leetcode.com/problems/minimum-path-sum/" }
        ]
    },
    {
        id: 48,
        name: "Bit Manipulation & Bitmask",
        category: "bit-matrix",
        summary: "Bit operations (AND, OR, XOR, NOT, shifts) for state representation, parity, and subset generation.",
        whenToUse: [
            "Single Number (XOR cancel out pairs)",
            "Number of 1 Bits / Counting Bits (Brian Kernighan n & (n - 1))",
            "Subsets via bitmask 0..(2^n - 1) when n <= 20"
        ],
        template: `def count_set_bits(n):
    count = 0
    while n:
        n &= (n - 1)
        count += 1
    return count`,
        pitfalls: [
            "Operator precedence: == has higher precedence than & in Python/C++! Use (x & 1) == 0"
        ],
        classics: [
            { name: "Single Number", id: "136", difficulty: "Easy", link: "https://leetcode.com/problems/single-number/" },
            { name: "Counting Bits", id: "338", difficulty: "Easy", link: "https://leetcode.com/problems/counting-bits/" }
        ]
    },
    {
        id: 49,
        name: "Matrix Islands / DFS-BFS Flood Fill",
        category: "bit-matrix",
        summary: "Explore connected components in 2D grid using DFS/BFS. Mutate grid or use a visited matrix.",
        whenToUse: [
            "Number of Islands / Max Area of Island",
            "Surrounded Regions",
            "Pacific Atlantic Water Flow"
        ],
        template: `def num_islands(grid):
    if not grid: return 0
    rows, cols = len(grid), len(grid[0])
    count = 0
    
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '0'
        dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1)
        
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                dfs(r, c)
                count += 1
    return count`,
        pitfalls: [
            "Boundary check ordering leading to IndexError",
            "Deep grids causing recursion stack overflow"
        ],
        classics: [
            { name: "Number of Islands", id: "200", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-islands/" },
            { name: "Max Area of Island", id: "695", difficulty: "Medium", link: "https://leetcode.com/problems/max-area-of-island/" }
        ]
    },
    {
        id: 50,
        name: "LRU Cache & Ordered Design",
        category: "design",
        summary: "Combine a HashMap for O(1) key lookup with a Doubly Linked List for O(1) node removal and move-to-front.",
        whenToUse: [
            "LRU Cache (Least Recently Used)",
            "LFU Cache",
            "Design Min Stack / RandomizedSet"
        ],
        template: `class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head, self.tail = Node(), Node()
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def _add_to_head(self, node):
        node.next = self.head.next
        node.prev = self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add_to_head(node)
            return node.val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self._remove(self.cache[key])
        node = Node(key, value)
        self.cache[key] = node
        self._add_to_head(node)
        if len(self.cache) > self.cap:
            lru = self.tail.prev
            self._remove(lru)
            del self.cache[lru.key]`,
        pitfalls: [
            "Forgetting to delete from HashMap when evicting LRU tail",
            "Dangling pointers in DLL operations"
        ],
        classics: [
            { name: "LRU Cache", id: "146", difficulty: "Medium", link: "https://leetcode.com/problems/lru-cache/" },
            { name: "Insert Delete GetRandom O(1)", id: "380", difficulty: "Medium", link: "https://leetcode.com/problems/insert-delete-getrandom-o1/" }
        ]
    }
];

export const PATTERN_DECISION_TREE = [
    { question: "Is the input sorted array?", yes: "Binary Search (#10) or Two Pointers Opposite (#1)", no: "Next check..." },
    { question: "Contiguous subarray or substring with a condition?", yes: "Sliding Window (#4, #5) or Prefix Sum (#7) or Kadane's (#9)", no: "Next check..." },
    { question: "Are you working with intervals or meeting times?", yes: "Merge Intervals (#15) or Sweep Line (#17)", no: "Next check..." },
    { question: "Linked list structure?", yes: "Fast & Slow Pointers (#3, #20), In-place Reversal (#18), Dummy Head (#19)", no: "Next check..." },
    { question: "Looking for next greater/smaller element or histogram area?", yes: "Monotonic Stack (#21, #24)", no: "Next check..." },
    { question: "Tree level-by-level traversal?", yes: "Tree BFS (#25)", no: "Next check..." },
    { question: "Tree paths, subtree validation, or BST?", yes: "Tree DFS (#26, #27) or BST bounds (#28)", no: "Next check..." },
    { question: "Prefix dictionary search or word autocomplete?", yes: "Trie (#30)", no: "Next check..." },
    { question: "Top K elements or streaming median?", yes: "Heaps (#31) or Two Heaps (#32)", no: "Next check..." },
    { question: "Generate all combinations, subsets, or solve a puzzle?", yes: "Backtracking (#33, #34, #35, #36)", no: "Next check..." },
    { question: "Graph dependencies or valid course ordering?", yes: "Topological Sort (#39)", no: "Next check..." },
    { question: "Graph connected components or cycle detection?", yes: "Union-Find DSU (#40) or Graph DFS (#37)", no: "Next check..." },
    { question: "Shortest path in weighted graph with non-negative edges?", yes: "Dijkstra's Algorithm (#41)", no: "Next check..." },
    { question: "Optimization / Counting ways with overlapping subproblems?", yes: "Dynamic Programming (Knapsack #42, Linear #44, 2D LCS #45, LIS #46, Grid #47)", no: "Next check..." },
    { question: "2D grid regions, islands, or flood fill?", yes: "Matrix Islands DFS/BFS (#49)", no: "Next check..." },
    { question: "O(1) cache access and eviction?", yes: "LRU Cache Design (#50)", no: "Re-read constraints and check keyword triggers!" }
];
