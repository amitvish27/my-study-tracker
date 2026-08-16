// Top 50 System Design Questions, Architecture Blueprints, ELI5 Analogies, and Interview Playbook

export const SD_SECTIONS = [
    { id: 'all', label: 'All 50 Questions' },
    { id: 'fundamentals', label: '1. Fundamentals (Q1-Q7)' },
    { id: 'scaling-lb', label: '2. Scaling & Load Balancing (Q8-Q14)' },
    { id: 'databases', label: '3. Databases & Storage (Q15-Q21)' },
    { id: 'caching', label: '4. Caching (Q22-Q27)' },
    { id: 'messaging', label: '5. Messaging & Async (Q28-Q33)' },
    { id: 'distributed', label: '6. Distributed Systems (Q34-Q40)' },
    { id: 'case-studies', label: '7. Classic Design Case Studies (Q41-Q46)' },
    { id: 'reliability', label: '8. Reliability & Ops (Q47-Q50)' },
];

export const SD_GLOSSARY = {
    "scalability": {
        term: "Scalability",
        eli5: "How easily your system can handle 10x or 1,000x more users without slowing down or crashing.",
        analogy: "Like adding more cashiers at a grocery store during rush hour so lines stay short."
    },
    "vertical-scaling": {
        term: "Vertical Scaling (Scale Up)",
        eli5: "Upgrading one computer by giving it a faster CPU, more RAM, or a bigger hard drive.",
        analogy: "Buying a giant monster truck instead of a small car. It has a physical limit and costs a lot."
    },
    "horizontal-scaling": {
        term: "Horizontal Scaling (Scale Out)",
        eli5: "Adding more regular computers side-by-side to share the workload.",
        analogy: "Hiring a fleet of 10 delivery vans instead of buying one giant truck. If one breaks, 9 keep working."
    },
    "latency": {
        term: "Latency",
        eli5: "The delay time it takes for a single request to travel to the server and come back with an answer.",
        analogy: "How long you wait after ordering your coffee before the barista hands you the cup (e.g. 50 milliseconds)."
    },
    "throughput": {
        term: "Throughput (QPS)",
        eli5: "The total number of tasks, requests, or queries the system can process in one second.",
        analogy: "How many total cups of coffee the café sells per hour to all customers."
    },
    "p99-latency": {
        term: "p99 Latency (Tail Latency)",
        eli5: "The slowest 1% of all user requests. It represents the worst-case experience under heavy load.",
        analogy: "If 99 customers get their coffee in 1 minute, but 1 unlucky customer waits 15 minutes because the espresso machine clogged."
    },
    "cap-theorem": {
        term: "CAP Theorem",
        eli5: "When computer networks glitch or disconnect, you have to choose between 100% accurate data (Consistency) OR always answering immediately (Availability).",
        analogy: "If your phone signal drops mid-call, do you hang up to avoid mishearing (Consistency), or keep guessing what the other person said (Availability)?"
    },
    "consistency": {
        term: "Consistency",
        eli5: "Every reader sees the most recent write at the exact same instant, no matter which server they talk to.",
        analogy: "All branch banks showing the exact same bank balance the second after you deposit cash."
    },
    "availability": {
        term: "Availability",
        eli5: "Every non-failing node returns a non-error response for every request, even if the data is a few seconds old.",
        analogy: "A 24/7 drive-thru that never closes its window, even if it's running low on napkins."
    },
    "partition-tolerance": {
        term: "Partition Tolerance",
        eli5: "The system continues to function even when network cables get cut or servers lose connection with each other.",
        analogy: "Two offices operating normally even when their phone connection between cities drops."
    },
    "cp-systems": {
        term: "CP Systems",
        eli5: "Systems that choose data accuracy over uptime during network failures. They lock or throw errors rather than serve wrong data.",
        analogy: "An ATM locking its screen and refusing withdrawal when its connection to head office is severed."
    },
    "ap-systems": {
        term: "AP Systems",
        eli5: "Systems that remain available and keep serving requests during network disconnects, accepting that data might temporarily be slightly out of date.",
        analogy: "A Twitter/X feed showing slightly stale tweets rather than showing an ugly error screen."
    },
    "trade-offs": {
        term: "Architectural Trade-offs",
        eli5: "Engineering decisions where gaining one benefit (like speed) requires sacrificing another (like strict consistency or cost).",
        analogy: "Choosing a sports car for speed vs a minivan for cargo capacity—you can't have maximum both for free."
    },
    "strong-consistency": {
        term: "Strong Consistency",
        eli5: "All database nodes immediately agree on the new data before confirming the write to the user.",
        analogy: "A team of judges who must unanimously agree on a score before posting it on the public scoreboard."
    },
    "eventual-consistency": {
        term: "Eventual Consistency",
        eli5: "Data updates spread gradually across background replicas; all nodes will agree after a brief delay.",
        analogy: "Telling your friends gossip one-by-one—eventually everyone in the circle knows the news."
    },
    "replication-lag": {
        term: "Replication Lag",
        eli5: "The small time delay between when data is written to the primary master database and when it arrives at read replicas.",
        analogy: "The 3-second audio delay on a live satellite TV broadcast."
    },
    "stateless": {
        term: "Stateless Service",
        eli5: "The server does not remember who you are from past clicks; each request contains all info needed to fulfill it.",
        analogy: "Ordering at a McDonald's drive-thru with a receipt in hand—any worker at the window can hand you your food."
    },
    "stateful": {
        term: "Stateful Service",
        eli5: "The server stores your session history in its local memory, so your next request must go back to the exact same machine.",
        analogy: "Playing a game of chess with a specific friend in a coffee shop; you can't swap opponents mid-game."
    },
    "sticky-sessions": {
        term: "Sticky Sessions (Session Affinity)",
        eli5: "A load balancer setting that pins a user to one specific backend server using a cookie or IP address.",
        analogy: "Always asking for the same doctor at the clinic because only they have your paper medical folder."
    },
    "monolith": {
        term: "Monolith Architecture",
        eli5: "Building the entire application (auth, payments, search, profile) inside one single codebase and server process.",
        analogy: "A Swiss Army Knife with knife, scissors, and bottle opener all attached to one single handle."
    },
    "microservices": {
        term: "Microservices Architecture",
        eli5: "Splitting an app into independent, specialized services that communicate over network APIs.",
        analogy: "A restaurant staff: separate chef, bartender, busser, and host, each doing their specialized job independently."
    },
    "grpc-rest": {
        term: "gRPC vs REST",
        eli5: "REST uses human-readable JSON over HTTP/1.1; gRPC uses compressed binary Protocol Buffers over HTTP/2 for ultra-fast server-to-server calls.",
        analogy: "REST is sending full English letters by postal mail; gRPC is high-speed military radio code."
    },
    "load-balancer": {
        term: "Load Balancer",
        eli5: "A traffic director that evenly distributes incoming web visitors across a group of backend servers.",
        analogy: "A restaurant host standing at the front door seating guests at whichever table and waiter is free."
    },
    "health-checks": {
        term: "Health Checks",
        eli5: "Periodic automated pings sent to servers to ensure they are healthy before routing traffic to them.",
        analogy: "A nurse taking vitals before clearing a pilot to fly."
    },
    "ssl-termination": {
        term: "SSL/TLS Termination",
        eli5: "Decrypting HTTPS traffic at the load balancer so backend internal servers don't waste CPU decrypting packets.",
        analogy: "Security guards opening and inspecting packages at the loading dock so workers inside get clean boxes."
    },
    "round-robin": {
        term: "Round Robin Load Balancing",
        eli5: "Distributing requests strictly in sequential order (Server 1, then 2, then 3, repeat).",
        analogy: "Dealing playing cards around the table one-by-one to each player in order."
    },
    "least-connections": {
        term: "Least Connections Algorithm",
        eli5: "Routing new incoming requests to whichever server is currently handling the fewest active tasks.",
        analogy: "Joining the supermarket grocery line that has the shortest queue of shoppers."
    },
    "ip-hashing": {
        term: "IP Hashing",
        eli5: "Using the client's IP address to mathematically assign them consistently to the same server.",
        analogy: "Sending all customers with last names starting with 'A' to Booth 1."
    },
    "layer-4": {
        term: "Layer 4 (Transport / TCP) Load Balancing",
        eli5: "Routing raw network packets purely by IP and Port without looking inside the HTTP message content.",
        analogy: "A postal worker sorting packages by postal ZIP code without opening the box."
    },
    "layer-7": {
        term: "Layer 7 (Application / HTTP) Load Balancing",
        eli5: "Smart routing based on HTTP headers, URL paths (e.g. /video vs /api), or cookies.",
        analogy: "A sommelier reading the dish you ordered to pick the exact right pairing wine."
    },
    "autoscaling": {
        term: "Autoscaling",
        eli5: "Automatically booting up new servers when CPU or traffic spikes, and shutting them down when traffic subsides.",
        analogy: "Calling in backup baristas on Sunday morning and sending them home at 2 PM."
    },
    "cdn": {
        term: "CDN (Content Delivery Network)",
        eli5: "A global network of nearby edge servers that store photos, videos, and static files close to users.",
        analogy: "Instead of mailing pizza from Italy to California, Domino's opens a local pizza shop in your neighborhood."
    },
    "edge-caching": {
        term: "Edge Caching",
        eli5: "Storing content directly at edge points-of-presence (POPs) geographically closest to the end user.",
        analogy: "Keeping popular drinks in the lobby vending machine instead of making customers take the elevator to the cafeteria."
    },
    "origin-offload": {
        term: "Origin Offload",
        eli5: "The percentage of user traffic served directly by the CDN cache without hitting your central origin database.",
        analogy: "95% of customer questions answered by the FAQ billboard before they bother the front-desk clerk."
    },
    "consistent-hashing": {
        term: "Consistent Hashing",
        eli5: "A circular mapping method where adding or removing a server only reshuffles a tiny fraction of user data.",
        analogy: "A circular sushi conveyor belt where each customer grabs the dish closest to their seat without disturbing others."
    },
    "hash-ring": {
        term: "Hash Ring",
        eli5: "A 360-degree mathematical circle where both servers and keys are placed using a hash function.",
        analogy: "A round clock face where tasks belong to the next hour number on the dial."
    },
    "virtual-nodes": {
        term: "Virtual Nodes (V-Nodes)",
        eli5: "Assigning each physical server multiple pseudo-locations on the hash ring to ensure perfectly balanced load distribution.",
        analogy: "A person putting 5 small collection jars around the room rather than 1 giant bucket in the corner."
    },
    "sql-acid": {
        term: "SQL & ACID Guarantees",
        eli5: "Relational databases guaranteeing Atomicity (all-or-nothing), Consistency, Isolation, and Durability.",
        analogy: "A bank wire transfer that never loses money halfway through, even if the power cuts out."
    },
    "nosql-horizontal": {
        term: "NoSQL & Horizontal Scale",
        eli5: "Non-relational databases that trade complex joins and strict schemas for ultra-fast key-value lookups and seamless horizontal scaling.",
        analogy: "A giant warehouse of labeled shipping crates with fast forklift access."
    },
    "polyglot-persistence": {
        term: "Polyglot Persistence",
        eli5: "Using different database engines for different features (e.g. Postgres for billing, Redis for sessions, Neo4j for social graphs).",
        analogy: "Using a hammer for nails, a screwdriver for screws, and a paintbrush for paint."
    },
    "sharding": {
        term: "Database Sharding",
        eli5: "Splitting a massive database table across multiple separate database servers.",
        analogy: "Splitting a 3,000-page telephone directory into Volume 1 (A-H), Volume 2 (I-P), and Volume 3 (Q-Z)."
    },
    "shard-key": {
        term: "Shard Key",
        eli5: "The specific column (e.g. user_id) used to decide which database partition holds a given row of data.",
        analogy: "The first letter of a student's last name that determines which registration desk they go to."
    },
    "hot-partition": {
        term: "Hot Partition / Hotspotting",
        eli5: "When one specific server or database shard gets slammed with way more traffic than all others.",
        analogy: "When Taylor Swift enters a cafeteria and 5,000 people rush to her single line while the other 20 lines are empty."
    },
    "key-salting": {
        term: "Key Salting",
        eli5: "Adding a random suffix (e.g. user_123_#4) to split a celebrity's viral writes across 10 shards instead of 1.",
        analogy: "Opening 10 separate autograph lines for a rockstar instead of 1 bottleneck line."
    },
    "leader-follower": {
        term: "Leader-Follower (Master-Slave) Replication",
        eli5: "One primary node handles all writes and syncs copies to multiple read-only follower nodes.",
        analogy: "A master printing press making copies that are distributed to hundreds of local newsstands."
    },
    "multi-leader": {
        term: "Multi-Leader (Multi-Master) Replication",
        eli5: "Allowing writes at multiple primary data centers, with asynchronous conflict resolution between regions.",
        analogy: "Co-authors editing the same Google Doc from NYC and London simultaneously."
    },
    "read-replicas": {
        term: "Read Replicas",
        eli5: "Copycat database servers dedicated entirely to answering user SELECT read queries, freeing up the primary write DB.",
        analogy: "Display copies of books in a library that anyone can read without checking out the original master archive."
    },
    "b-plus-tree": {
        term: "B+ Tree Index",
        eli5: "A balanced tree structure stored on disk with high fan-out, enabling O(log N) lookups and fast range scans.",
        analogy: "The alphabetized thumb-tabs on the side of a massive paper dictionary."
    },
    "caching": {
        term: "Caching",
        eli5: "Saving copies of frequently requested data in ultra-fast RAM so you don't have to fetch it from slow disk storage.",
        analogy: "Keeping your favorite water bottle right on your desk instead of walking to the kitchen sink every sip."
    },
    "cache-aside": {
        term: "Cache-Aside Pattern",
        eli5: "The application looks for data in cache; on a miss, it fetches from database and writes it to cache for next time.",
        analogy: "Checking your pocket for a pen; if not there, grabbing one from your desk drawer and putting it in your pocket."
    },
    "write-through": {
        term: "Write-Through Cache",
        eli5: "Data is written into the cache and the permanent database simultaneously in the same transaction.",
        analogy: "Writing an entry in your daily planner and instantly emailing a copy to your assistant."
    },
    "write-back": {
        term: "Write-Back (Write-Behind) Cache",
        eli5: "Data is written instantly to RAM cache, and asynchronously saved to the disk database later in batches.",
        analogy: "Tossing receipts into a desk tray and filing them into the metal cabinet once a week."
    },
    "lru": {
        term: "LRU (Least Recently Used) Eviction",
        eli5: "When the cache is full, discards the item that hasn't been accessed for the longest time.",
        analogy: "Throwing away the clothes in your closet you haven't worn in the longest time to make room for new outfits."
    },
    "lfu": {
        term: "LFU (Least Frequently Used) Eviction",
        eli5: "Discards the item with the lowest total access count over time.",
        analogy: "Removing the least popular song from a radio station's playlist."
    },
    "ttl-expiration": {
        term: "TTL (Time-To-Live)",
        eli5: "A timer attached to cached data after which it automatically expires and is discarded.",
        analogy: "The expiration date printed on a carton of milk."
    },
    "cache-stampede": {
        term: "Cache Stampede (Thundering Herd)",
        eli5: "When a popular cached item expires, thousands of users all rush the database at the exact same millisecond to recalculate it.",
        analogy: "A classroom whiteboard with the exam score is erased, causing 500 students to sprint to the teacher's office at once."
    },
    "single-flight-mutex": {
        term: "Single-Flight / Mutex Lock",
        eli5: "Allowing only 1 request to query the database on a cache miss while all other duplicate requests wait for its result.",
        analogy: "One person going to the kitchen to fetch water for the whole table instead of everyone getting up."
    },
    "ttl-jitter": {
        term: "TTL Jitter",
        eli5: "Adding a small random offset (e.g. 5 min ± 30 sec) to cache expiration times so thousands of keys don't expire simultaneously.",
        analogy: "Staggering office departure times by 5 minutes so everyone doesn't hit the elevator at 5:00 PM on the dot."
    },
    "bloom-filter": {
        term: "Bloom Filter",
        eli5: "A super-fast, tiny memory filter that tells you if something definitely DOES NOT exist, saving slow disk lookups.",
        analogy: "A bouncer with a quick checklist who can instantly say 'You are definitely NOT on the VIP guest list' in 1 second."
    },
    "message-queue": {
        term: "Message Queue",
        eli5: "A temporary buffer that holds background jobs in order until worker servers are ready to process them.",
        analogy: "The take-a-number paper ticket dispenser at the deli counter so customers wait in orderly turns."
    },
    "idempotency": {
        term: "Idempotency",
        eli5: "A property where running the same operation multiple times produces the exact same result without double-charging or duplicate entries.",
        analogy: "Pressing the elevator call button 10 times in a row—it still summons the elevator only once."
    },
    "idempotency-key": {
        term: "Idempotency Key",
        eli5: "A unique UUID sent in API requests (e.g. Stripe checkout) so the server can detect and reject duplicate charges.",
        analogy: "A unique invoice receipt number showing your bill was already paid."
    },
    "dead-letter-queue": {
        term: "Dead-Letter Queue (DLQ)",
        eli5: "A special holding pen for corrupted or broken messages that failed multiple processing attempts.",
        analogy: "The 'Return to Sender / Undeliverable Mail' bin at the post office so bad letters don't stop the mail sorting machine."
    },
    "circuit-breaker": {
        term: "Circuit Breaker",
        eli5: "A safety mechanism that temporarily cuts off calls to a broken downstream service to prevent your whole app from freezing.",
        analogy: "The electrical fuse box in your home that flips OFF when a toaster sparks, preventing a house fire."
    },
    "exponential-backoff": {
        term: "Exponential Backoff & Jitter",
        eli5: "Waiting progressively longer (1s, 2s, 4s, 8s) with a little random delay before retrying a failed server request.",
        analogy: "If a public restroom door is locked, waiting 1 min, then 2 mins, then 4 mins instead of constantly rattling the handle."
    },
    "heartbeat": {
        term: "Heartbeat",
        eli5: "A regular ping message sent between servers to prove they are alive and working properly.",
        analogy: "A scuba diver tugging on the safety rope every 10 seconds to let the surface boat know they are okay."
    },
    "saga-pattern": {
        term: "Saga Pattern",
        eli5: "A workflow for multi-step distributed operations where every step has an automatic 'undo' button if a later step fails.",
        analogy: "Booking a vacation: Book Flight -> Reserve Hotel (fails!) -> Automatically cancel flight reservation and refund cash."
    },
    "rate-limiter": {
        term: "Rate Limiter",
        eli5: "A throttle that caps how many requests a user or bot can send within a given time window (e.g. 100 req/minute).",
        analogy: "An arcade token dispenser that gives you a maximum of 5 coins every minute to stop coin hoarders."
    },
    "token-bucket": {
        term: "Token Bucket Algorithm",
        eli5: "Tokens are added to a bucket at a constant rate; requests take 1 token each. If empty, requests are dropped or queued.",
        analogy: "A public water fountain that refills at 1 glass per second; if people drink too fast, they must wait."
    },
    "sliding-window": {
        term: "Sliding Window Rate Limiter",
        eli5: "Counts requests across the exact rolling 60-second window to prevent boundary bursts at the turn of the minute.",
        analogy: "A rolling speedometer tracking your speed over the last 60 seconds continuously."
    },
    "http-429": {
        term: "HTTP 429 (Too Many Requests)",
        eli5: "The standard HTTP status code telling the client they exceeded their rate limit quota and must back off.",
        analogy: "A bouncer holding their hand up at the nightclub door saying 'Please wait 2 minutes for people to leave'."
    },
    "websockets": {
        term: "WebSockets",
        eli5: "A continuous two-way open phone line between the browser and server for instantaneous real-time messaging.",
        analogy: "A live walkie-talkie conversation rather than mailing letters back and forth."
    },
    "snowflake-id": {
        term: "Snowflake ID (Distributed ID)",
        eli5: "A 64-bit globally unique ID generated using timestamp bits + machine ID bits + sequence counter bits without database coordination.",
        analogy: "A passport number containing your birth year + country code + serial number."
    },
    "base62-encoding": {
        term: "Base62 Encoding",
        eli5: "Compressing large numerical IDs into short alphanumeric strings using [0-9, a-z, A-Z] (62 possible characters per digit).",
        analogy: "Turning an 8-digit database ID #12345678 into a sleek 6-letter link like tinyurl.com/aB3x9z."
    },
    "distributed-lock": {
        term: "Distributed Lock (Redlock)",
        eli5: "A mechanism to ensure only one server among thousands can execute a critical section of code at any given time.",
        analogy: "The single key to the gas station bathroom that only one customer can hold at a time."
    },
    "optimistic-locking": {
        term: "Optimistic Locking (Version Check)",
        eli5: "Checking if the row version number has changed before saving a write; if changed by someone else, retry the transaction.",
        analogy: "Checking if a parking spot is still empty right before pulling in; if occupied, circle for another."
    },
    "sli-slo-sla": {
        term: "SLI vs SLO vs SLA",
        eli5: "SLI is what you actually measure, SLO is your internal team goal, and SLA is the legal contract with customers.",
        analogy: "SLI is your actual running speed (6 min mile), SLO is your workout goal (sub-6 min), SLA is your bet with your friend."
    },
    "error-budget": {
        term: "Error Budget",
        eli5: "The amount of allowable downtime (e.g. 0.01% for 99.99% SLO) that engineers can spend shipping fast features before halting deploys.",
        analogy: "A savings allowance you can spend on fun risks until the account hits zero."
    },
    "canary-release": {
        term: "Canary Deployment",
        eli5: "Deploying a new software version to just 1% of live users first to catch bugs before rolling out to 100%.",
        analogy: "Sending a canary into a coal mine to test air safety before workers enter."
    },
    "blue-green-deploy": {
        term: "Blue-Green Deployment",
        eli5: "Maintaining two identical production environments (Blue and Green) and switching the router pointer instantly with zero downtime.",
        analogy: "Building a brand new bridge right beside the old bridge and flipping the road cones over in 1 second."
    },
    "feature-flags": {
        term: "Feature Flags",
        eli5: "Conditional switches in code allowing product teams to turn features on/off instantly without deploying new code.",
        analogy: "The light switches in your home that turn lights on or off without rewiring the electric box."
    },
    "chaos-engineering": {
        term: "Chaos Engineering",
        eli5: "Intentionally killing production servers and cutting network cables in controlled ways to verify system resiliency.",
        analogy: "A fire drill at a school to practice evacuating safely before a real fire ever happens."
    },
    "blast-radius": {
        term: "Blast Radius",
        eli5: "The maximum damage or percentage of users affected if one specific server or microservice crashes.",
        analogy: "Waterproof bulkheads on a submarine that seal off one flooded room so the entire submarine doesn't sink."
    }
};

export const SD_FRAMEWORK_STEPS = [
    { 
        step: 1, 
        title: "Clarify Scope & Assumptions (0-5 min)", 
        desc: "Ask about functional requirements, DAU, read/write ratio, latency targets, and MVP features. Restate the problem in your own words.",
        eli5: "👶 In Plain English: Like asking a customer 'Are we building a bicycle or an airplane?' before touching any tools."
    },
    { 
        step: 2, 
        title: "Back-of-Envelope Estimates & API (5-10 min)", 
        desc: "Calculate write/read QPS, peak QPS (x2-x10), storage growth over 5 years, and bandwidth. Sketch core REST/gRPC endpoints.",
        eli5: "👶 In Plain English: Figure out if you need 5 chairs or 50,000 stadium seats, and name the main front door buttons."
    },
    { 
        step: 3, 
        title: "High-Level Architecture (10-25 min)", 
        desc: "Draw the boxes: Clients -> CDN -> Load Balancer -> Stateless App Servers -> Cache -> Database -> Message Queue / Workers.",
        eli5: "👶 In Plain English: Draw the basic map of the house: Front porch (CDN), Hallway (Load Balancer), Kitchen (Servers), Fridge (Cache), Pantry (DB)."
    },
    { 
        step: 4, 
        title: "Deep Dive Hardest Component (25-35 min)", 
        desc: "Focus on the 1-2 core bottlenecks: sharding strategy, data model, race condition prevention, cache invalidation, or streaming pipeline.",
        eli5: "👶 In Plain English: Zoom into the single hardest problem (e.g. 'What if Taylor Swift posts to 200M followers at once?')."
    },
    { 
        step: 5, 
        title: "Handle Failures & Bottlenecks (35-40 min)", 
        desc: "Address single points of failure (SPOFs), replication lag, circuit breakers, dead letter queues, and rate limiting.",
        eli5: "👶 In Plain English: Ask 'What happens if a power cord gets unplugged or a server catches fire?' and show your safety nets."
    },
    { 
        step: 6, 
        title: "State Trade-offs & Wrap-up (40-45 min)", 
        desc: "Defend your design with trade-offs (e.g., CAP theorem choice, SQL vs NoSQL, fan-out on write vs read). Summarize clean telemetry.",
        eli5: "👶 In Plain English: Explain why you chose a minivan over a sports car, admitting what it's great at and what it sacrifices."
    }
];

export const SD_MATH_CHEAT_SHEET = {
    timeConstants: [
        { label: "Seconds in a day", value: "86,400 ≈ 100,000 (10^5) for quick mental math" },
        { label: "Seconds in a year", value: "31.5 Million ≈ 3.15 × 10^7 seconds" }
    ],
    units: [
        { unit: "1 KB", bytes: "1,000 bytes (A short paragraph of text)" },
        { unit: "1 MB", bytes: "1,000,000 bytes (A medium digital photo)" },
        { unit: "1 GB", bytes: "1 Billion bytes (A 30-minute HD movie)" },
        { unit: "1 TB", bytes: "1 Trillion bytes (1,000 GB, a large external hard drive)" },
        { unit: "1 PB", bytes: "1 Quadrillion bytes (1,000 TB, big tech data center scale)" }
    ],
    formulas: [
        { name: "Average QPS", formula: "(Daily Active Users × Actions per Day) / 86,400", eli5: "Divide total daily clicks by 86,400 (or ~100k) to get clicks per second." },
        { name: "Peak QPS", formula: "Average QPS × 2x to 10x multiplier", eli5: "Rush hour traffic is usually 2x to 5x higher than the daily average." },
        { name: "Daily Storage", formula: "Daily Writes × Average Record Size (KB/MB)", eli5: "How many new things saved today times how heavy each thing is." },
        { name: "5-Year Storage", formula: "Daily Storage × 365 days × 5 years × 1.3 (30% overhead)", eli5: "Multiply 5 years of data plus a 30% safety cushion for search indexes." },
        { name: "Bandwidth", formula: "QPS × Average Payload Size (Bytes/sec)", eli5: "How many megabytes per second are flying across the network cables." }
    ]
};

export const SD_BUILDING_BLOCKS = [
    { 
        name: "Load Balancer", 
        type: "Traffic",
        when: "Distributes incoming traffic across multiple app servers so no single server gets overloaded. Detects and bypasses crashed servers.",
        eli5: "👶 ELI5: A restaurant hostess who seats arriving diners at open tables so one waiter isn't overwhelmed while others sit empty.",
        jargonKey: "load-balancer"
    },
    { 
        name: "Redis / Memcached Cache", 
        type: "Performance",
        when: "Stores frequently accessed database results and session state in lightning-fast RAM memory to cut latency from 50ms to 2ms.",
        eli5: "👶 ELI5: Keeping your favorite jacket by the front door instead of packing it in the attic storage box every night.",
        jargonKey: "caching"
    },
    { 
        name: "CDN (Content Delivery Network)", 
        type: "Edge",
        when: "Caches static assets (images, videos, JS, CSS) on edge servers geographically close to end users worldwide.",
        eli5: "👶 ELI5: Storing popular books in local neighborhood bookstores instead of shipping every copy from a central warehouse in New York.",
        jargonKey: "cdn"
    },
    { 
        name: "Relational DB (Postgres / MySQL)", 
        type: "Storage",
        when: "Best for structured data needing strict ACID transactions, complex joins, and financial accuracy (e.g. User accounts, Payments, Orders).",
        eli5: "👶 ELI5: A super-strict accounting ledger where numbers must always balance perfectly without any discrepancies.",
        jargonKey: "sql"
    },
    { 
        name: "NoSQL DB (DynamoDB / Cassandra / Mongo)", 
        type: "Storage",
        when: "Best for massive write throughput, flexible schemaless data, simple key-value lookups, and horizontal auto-scaling.",
        eli5: "👶 ELI5: A giant filing cabinet of flexible folders where you can toss in documents of any shape at supersonic speed.",
        jargonKey: "nosql"
    },
    { 
        name: "Database Sharding", 
        type: "Storage",
        when: "Splits a database table across multiple database machines by a shard key when one database exceeds disk/write limits.",
        eli5: "👶 ELI5: Splitting a giant 10-million name phonebook into 3 volumes: A-H, I-P, and Q-Z.",
        jargonKey: "sharding"
    },
    { 
        name: "Message Queue (Kafka / RabbitMQ / SQS)", 
        type: "Async",
        when: "Decouples services, absorbs massive traffic spikes, and runs slow background tasks (emails, video transcoding, push notifications).",
        eli5: "👶 ELI5: The take-a-number ticket dispenser at a busy deli counter so customers get served in orderly turns.",
        jargonKey: "message-queue"
    },
    { 
        name: "API Gateway & Rate Limiter", 
        type: "Security",
        when: "The unified front door for authentication, SSL termination, request routing, and throttling bot abuse / spam.",
        eli5: "👶 ELI5: The security guard and bouncer at the building lobby checking badges and limiting how many people enter per minute.",
        jargonKey: "rate-limiter"
    },
    { 
        name: "Consistent Hashing", 
        type: "Distributed",
        when: "Distributes data across a ring of cache/database nodes so adding/removing servers only remaps 1/N keys.",
        eli5: "👶 ELI5: A circular sushi conveyor belt where removing one chef only shifts a few plates to the next chef.",
        jargonKey: "consistent-hashing"
    },
    { 
        name: "Bloom Filter", 
        type: "Performance",
        when: "Space-efficient probabilistic filter that quickly verifies if an item definitely DOES NOT exist before searching slow disks.",
        eli5: "👶 ELI5: A club bouncer who checks a pocket list in 1 second to tell you 'You are 100% NOT on the list', saving a trip to the back office.",
        jargonKey: "bloom-filter"
    }
];

export const SD_QUESTIONS = [
    // Section 1: Fundamentals
    {
        id: 1,
        section: "fundamentals",
        question: "What is scalability?",
        eli5: "Vertical scaling is buying a bigger, more expensive truck with a monster engine. Horizontal scaling is hiring 10 normal delivery vans to share the packages—if one van gets a flat tire, the other 9 keep delivering!",
        answer: "Scalability is a system's ability to handle growing traffic or data volume gracefully without degrading performance.\n- **Vertical Scaling (Scale Up)**: Adding more CPU, RAM, or SSD to a single server. Simple, but hits a hard hardware ceiling and remains a single point of failure.\n- **Horizontal Scaling (Scale Out)**: Adding more commodity servers behind a load balancer. The industry standard for web scale; requires stateless application design.",
        tip: "Always emphasize horizontal scaling and explain why statelessness is a prerequisite.",
        keyTerms: ["Vertical Scaling", "Horizontal Scaling", "Stateless"]
    },
    {
        id: 2,
        section: "fundamentals",
        question: "Latency vs Throughput?",
        eli5: "Latency is how long one car takes to cross a bridge (e.g. 5 seconds). Throughput is how many total cars cross the bridge in one hour (e.g. 10,000 cars/hr). Adding more lanes increases throughput, but each car still takes 5 seconds.",
        answer: "- **Latency**: The time taken to process a single request from client to response (e.g. 50 ms at the 99th percentile).\n- **Throughput**: The total volume of requests or data processed per second (e.g. 10,000 Queries Per Second / QPS).\n- *Trade-off*: Batching operations increases throughput by saving network round-trips, but slightly increases individual request latency.",
        tip: "Mention that optimizing for p99 latency protects user experience during tail bottlenecks.",
        keyTerms: ["Latency", "Throughput", "p99 Latency"]
    },
    {
        id: 3,
        section: "fundamentals",
        question: "What is the CAP Theorem?",
        eli5: "Imagine your phone connection goes down while online shopping. Consistency says: 'Stop taking orders until we reconnect to avoid selling items we don't have.' Availability says: 'Keep accepting orders right now and sync up later, even if stock counts might be slightly outdated.' You can't have both during a network blackout!",
        answer: "In any distributed data store, during an inevitable network partition (P), you must choose between **Consistency (C)** and **Availability (A)**:\n- **Consistency (C)**: Every read receives the most recent write or returns an error.\n- **Availability (A)**: Every non-failing node returns a response, though it may contain stale data.\n- **Partition Tolerance (P)**: The system continues operating despite network packet drops or disconnections.\n- *Real World*: Networks always experience partitions, so systems pick **CP** (e.g. Banking, Stock Exchanges) or **AP** (e.g. Social feeds, Video counters).",
        tip: "Never say 'we choose CA'. In distributed networks, Partition Tolerance (P) is mandatory.",
        keyTerms: ["CAP Theorem", "Consistency", "Availability", "Partition Tolerance"]
    },
    {
        id: 4,
        section: "fundamentals",
        question: "CP vs AP with concrete examples?",
        eli5: "CP is your bank ATM: if it loses connection to central headquarters, it refuses to dispense cash rather than risk giving away money you already withdrew. AP is YouTube's view counter: if it shows 1,004 views instead of 1,010 for a few seconds, nobody gets hurt as long as the video plays smoothly!",
        answer: "- **CP (Consistency + Partition Tolerance)**: Banking, payment transfers, flight seat reservations. The system rejects requests rather than risk double-spending or stale inventory.\n- **AP (Availability + Partition Tolerance)**: Twitter/X feed, YouTube view counts, shopping product reviews. The system serves slightly stale data to ensure 100% uptime and instant page loads.",
        tip: "Never choose CP or AP for an entire company—explain that you choose per microservice (e.g. CP for checkout, AP for product catalog).",
        keyTerms: ["CP Systems", "AP Systems", "Trade-offs"]
    },
    {
        id: 5,
        section: "fundamentals",
        question: "Strong vs Eventual Consistency?",
        eli5: "Strong consistency is a classroom where everyone's digital tablet locks and updates at the exact same millisecond before anyone can speak. Eventual consistency is playground gossip: it takes a few seconds or minutes for everyone to hear the news, but eventually everyone is on the same page.",
        answer: "- **Strong Consistency**: Every read immediately reflects the latest write across all replicas. Requires distributed consensus (Raft/Paxos), which adds latency.\n- **Eventual Consistency**: Replicas asynchronously sync updates over time (e.g. 50-200ms lag). Reads are ultra-fast from local nodes, but might briefly return a value that is slightly behind.\n- **Hybrid Approach**: Use 'Read-your-own-writes' consistency for user profile edits, while other followers receive eventual consistency.",
        tip: "Use 'Read-your-own-writes' consistency for user profile updates with eventual consistency for social followers.",
        keyTerms: ["Strong Consistency", "Eventual Consistency", "Replication Lag"]
    },
    {
        id: 6,
        section: "fundamentals",
        question: "Stateless vs Stateful services?",
        eli5: "Stateless is ordering at a drive-thru with a printed receipt: any worker at any window can hand you your bag because everything is on the receipt. Stateful is a barber who remembers your haircut preferences only in his head—if he goes on break, the next barber has no idea what you want.",
        answer: "- **Stateless Services**: Application servers hold zero client session data in local memory. Any request can be routed to any server. Trivial to auto-scale, restart, and load balance.\n- **Stateful Services**: Application servers store user sessions or connection state locally. Requires sticky routing, which complicates failover and autoscaling.\n- *Best Practice*: Keep compute servers 100% stateless by pushing all session data to Redis or a database.",
        tip: "Always push state out of compute into dedicated distributed stores (Redis, Postgres).",
        keyTerms: ["Stateless", "Stateful", "Sticky Sessions"]
    },
    {
        id: 7,
        section: "fundamentals",
        question: "Monolith vs Microservices?",
        eli5: "A Monolith is a Swiss Army knife: everything is built into one compact tool. If one blade rusts, the whole knife is awkward. Microservices are a toolbox of separate screwdrivers, wrenches, and pliers: different team members can grab different tools, but you need a good organizer to keep track of everything.",
        answer: "- **Monolith**: Single codebase and unified deployment unit. Simpler debugging, zero network overhead between modules, and straightforward ACID database transactions. Harder to scale large engineering teams.\n- **Microservices**: Independently deployable services communicating over the network (REST/gRPC). Enables autonomous team ownership and isolated deployments, but introduces network latency, distributed failures, and eventual consistency challenges.",
        tip: "In interviews, recommend starting with a modular monolith and splitting services when team size or scale bottlenecks demand it.",
        keyTerms: ["Monolith", "Microservices", "gRPC / REST"]
    },

    // Section 2: Scaling & Load Balancing
    {
        id: 8,
        section: "scaling-lb",
        question: "What does a Load Balancer do?",
        eli5: "A Load Balancer is like a restaurant host standing at the front door. When 100 hungry customers arrive, the host escorts each group to whichever waiter or table is free so no single waiter gets buried in orders.",
        answer: "A Load Balancer distributes incoming network traffic across a cluster of backend servers.\n- **Health Checks**: Continuously pings servers; instantly removes dead or failing instances.\n- **Single Entry Point**: Provides a single virtual IP (VIP) to hide internal server topology.\n- **SSL Termination**: Decrypts incoming HTTPS requests to offload heavy cryptographic math from application servers.",
        tip: "Mention Layer 4 vs Layer 7 and active health checks.",
        keyTerms: ["Load Balancer", "Health Checks", "SSL Termination"]
    },
    {
        id: 9,
        section: "scaling-lb",
        question: "Common Load Balancing algorithms?",
        eli5: "Round Robin is dealing playing cards in a circle (one for you, one for you). Weighted is giving 2 cards to the older kid and 1 to the toddler. Least Connections is sending the next shopper to the grocery register with the shortest line.",
        answer: "- **Round Robin**: Sequentially distributes requests to each server in order. Simple, assumes equal server capacity.\n- **Weighted Round Robin**: Routes proportional traffic to more powerful machines.\n- **Least Connections**: Routes to the server with the fewest active open requests; ideal for long-lived connections (WebSockets).\n- **IP Hash / Consistent Hash**: Hashes client IP to ensure requests from the same user land on the same server without storing local session memory.",
        tip: "Mention Least Response Time for latency-sensitive microservices.",
        keyTerms: ["Round Robin", "Least Connections", "IP Hashing"]
    },
    {
        id: 10,
        section: "scaling-lb",
        question: "Layer 4 vs Layer 7 Load Balancing?",
        eli5: "Layer 4 is a postal mail sorter who looks only at the zip code on the outside envelope and routes it super fast. Layer 7 is a secretary who opens the envelope, reads if it's a bill, resume, or complaint, and carries it to the exact right manager's desk.",
        answer: "- **Layer 4 (Transport Layer)**: Routes traffic based on IP address and TCP/UDP port without inspecting the HTTP payload. Ultra-fast, protocol-agnostic, and consumes minimal CPU.\n- **Layer 7 (Application Layer)**: Inspects HTTP headers, cookies, and URL paths (e.g. `/api/v1/users` vs `/images`). Enables intelligent routing, auth filtering, and SSL termination, but requires more CPU power.",
        tip: "Layer 7 is standard for API gateways; Layer 4 is used for ultra-high throughput entry points.",
        keyTerms: ["Layer 4 (Transport)", "Layer 7 (Application)", "Routing"]
    },
    {
        id: 11,
        section: "scaling-lb",
        question: "What is horizontal scaling and what breaks it?",
        eli5: "You can hire 100 chefs in a restaurant kitchen, but if they all have to share one single cutting board or one cash register (the central database), they end up bumping into each other waiting in line!",
        answer: "Horizontal scaling means adding more identical compute machines. It hits bottlenecks when:\n1. **Stateful Servers**: Servers store user sessions in local RAM memory instead of a centralized Redis cache.\n2. **Database Write Bottleneck**: Having a single primary database writer that cannot keep up with write queries.\n3. **Distributed Locks**: All servers waiting on a single shared lock, serializing operations.",
        tip: "Identify database write saturation as the primary bottleneck of horizontal web tiers.",
        keyTerms: ["Horizontal Scaling", "Stateful Bottleneck", "Write Saturation"]
    },
    {
        id: 12,
        section: "scaling-lb",
        question: "How do you handle a sudden traffic spike (e.g. 10x surge)?",
        eli5: "Like Black Friday at a retail store: 1) Open extra doors (autoscale), 2) Form organized waiting lines outside (message queue), 3) Put popular items right at the front door (caching), and 4) If the store is packed full, hold the door and let people enter in batches (rate limiting).",
        answer: "1. **Autoscale Compute**: Scale app servers based on leading metrics like QPS or queue depth (not just lagging CPU).\n2. **Buffer with Message Queues**: Push incoming requests into Kafka/SQS to smooth the traffic burst into an orderly queue.\n3. **Aggressive Multi-Tier Caching**: Serve 95%+ of reads directly from CDN and Redis.\n4. **Rate Limiting & Load Shedding**: Reject non-essential requests with HTTP 429/503 to protect core services.\n5. **Pre-warm Capacity**: Provision extra servers ahead of scheduled events (e.g. Super Bowl, flash sales).",
        tip: "Use message queues to convert a catastrophic outage into a slightly delayed processing queue.",
        keyTerms: ["Autoscaling", "Message Queue Buffering", "Rate Limiting"]
    },
    {
        id: 13,
        section: "scaling-lb",
        question: "What is a CDN and when do you use it?",
        eli5: "Instead of shipping every book from a central warehouse in New York to a reader in Tokyo, Amazon keeps copies in local Tokyo warehouses so deliveries arrive in 10 minutes instead of 10 days.",
        answer: "A **Content Delivery Network (CDN)** is a globally distributed network of edge proxy servers (PoPs).\n- **Edge Caching**: Caches static assets (images, videos, JS/CSS, API responses) close to end users.\n- **Benefits**: Cuts round-trip latency (RTT) from hundreds of ms to single-digit ms, and offloads 80%+ of origin bandwidth.\n- **Invalidation**: Clear CDN cache via API or deploy assets with versioned URLs (`app.v2.js`).",
        tip: "Use Versioned URLs (e.g., `bundle.v2.js`) and cache invalidation APIs on deployment.",
        keyTerms: ["CDN", "Edge Caching", "Origin Offload"]
    },
    {
        id: 14,
        section: "scaling-lb",
        question: "What is Consistent Hashing and why does it matter?",
        eli5: "Imagine a circular sushi carousel where 100 plates and 4 chefs stand in a ring. Each plate goes to the closest chef ahead of it. If 1 chef leaves for lunch, only that chef's plates get taken by their neighbor—you don't have to reshuffle all 100 plates!",
        answer: "Maps both server nodes and cache keys to a circular hash ring (0 to 2^32 - 1).\n- Keys map clockwise to the nearest server node on the ring.\n- **Core Benefit**: Adding or removing a server only remaps `1 / N` keys (neighboring keys) rather than re-hashing all keys (as simple `key mod N` would do).\n- **Virtual Nodes**: Assigning multiple virtual points per physical machine ensures balanced distribution and prevents hot spots.",
        tip: "Crucial for distributed caches (Memcached), DynamoDB, and partitioned databases.",
        keyTerms: ["Consistent Hashing", "Hash Ring", "Virtual Nodes"]
    },

    // Section 3: Databases & Storage
    {
        id: 15,
        section: "databases",
        question: "SQL vs NoSQL — how do you choose?",
        eli5: "SQL is a strict Excel spreadsheet with fixed columns and locked calculations (perfect for bank balances). NoSQL is a folder of flexible sticky notes where each note can have different details (perfect for dumping millions of social media posts or sensor logs at high speed).",
        answer: "- **Choose SQL (Postgres, MySQL)**: Structured relational data, strict ACID guarantees, complex multi-table joins, and zero tolerance for data anomalies (Payments, Billing, Auth, Orders).\n- **Choose NoSQL (MongoDB, Cassandra, DynamoDB)**: Massive write volume (millions of QPS), flexible/unstructured schemas, simple key-value lookups, and built-in horizontal auto-partitioning.\n- *Polyglot Persistence*: Modern architectures use both—Postgres for transactional orders, Redis for caching, Cassandra for logs.",
        tip: "Modern architectures are 'Polyglot'—Postgres for users/orders, Redis for caching, Cassandra for logs.",
        keyTerms: ["SQL (ACID)", "NoSQL (Horizontal)", "Polyglot Persistence"]
    },
    {
        id: 16,
        section: "databases",
        question: "What is Database Sharding?",
        eli5: "If a telephone directory with 10 million names is too heavy for one book, you split it into 3 books: A-H, I-P, and Q-Z. Now three people can look up numbers at the same time!",
        answer: "Horizontally partitioning a large database table across multiple independent database servers (shards).\n- Each shard stores a subset of rows identified by a **Shard Key** (e.g. `user_id`).\n- Multiplies write and storage capacity beyond the limits of a single physical machine.\n- *Trade-off*: Cross-shard joins and distributed transactions become complex and slow.",
        tip: "Shard for storage and write capacity; replicate for read capacity and fault tolerance.",
        keyTerms: ["Database Sharding", "Shard Key", "Horizontal Partitioning"]
    },
    {
        id: 17,
        section: "databases",
        question: "How do you pick a Shard Key?",
        eli5: "If you split your telephone books by country and 90% of your users live in the USA, the USA book is giant and the other books are empty! But if you split by User ID, every book gets an equal stack of pages.",
        answer: "- Pick a key with **High Cardinality** and **Uniform Distribution** matching the primary query pattern (e.g. `user_id` or `uuid`).\n- **Bad Shard Keys**: Auto-incrementing IDs (causes all current writes to slam into the newest single shard) or low cardinality keys like `country` (creates massive uneven shard sizes).",
        tip: "Consistent hashing on `user_id` is the standard choice for user-centric applications.",
        keyTerms: ["Shard Key", "High Cardinality", "Uniform Distribution"]
    },
    {
        id: 18,
        section: "databases",
        question: "Leader-Follower vs Multi-Leader Replication?",
        eli5: "Leader-Follower: The teacher (Leader) writes notes on the blackboard (all writes), and 30 students (Followers) copy them into notebooks so parents can read from the notebooks. Multi-Leader: Two teachers in different rooms write at the same time and must compare notes later to resolve conflicts.",
        answer: "- **Leader-Follower (Primary-Replica)**: Single leader handles all writes; multiple followers asynchronously replicate data and handle read queries. Simple, consistent, but leader failure requires automated failover.\n- **Multi-Leader**: Writes accepted across multiple regions. Delivers lower latency for global users, but requires conflict resolution algorithms (Last-Write-Wins, CRDTs).",
        tip: "Leader-follower is the standard default unless multi-region write latency is unacceptable.",
        keyTerms: ["Leader-Follower", "Multi-Leader", "Replication Lag"]
    },
    {
        id: 19,
        section: "databases",
        question: "How do you scale read-heavy databases?",
        eli5: "Photocopy the restaurant menu 50 times and hand it to every table (read replicas and cache) so everyone can read at once without asking the head chef to recite the menu.",
        answer: "1. Add **Read Replicas** behind a read load balancer.\n2. Introduce **Distributed In-Memory Caching** (Redis) to serve hot queries.\n3. **Denormalize data** and generate precomputed **Materialized Views**.\n4. Route critical 'read-your-own-writes' user updates to the Primary DB, and route general browsing reads to replicas.",
        tip: "Always account for replication lag when reading from replicas.",
        keyTerms: ["Read Replicas", "Redis Cache", "Materialized Views"]
    },
    {
        id: 20,
        section: "databases",
        question: "What is a Database Index and what does it cost?",
        eli5: "The index at the back of a 500-page textbook. Instead of reading every page to find 'photosynthesis', you flip to 'P' in the index and jump straight to page 142. The catch? Adding a new chapter means rewriting the index.",
        answer: "A sorted auxiliary data structure (typically a B+ Tree) that enables logarithmic O(log n) lookups instead of slow O(n) full table scans.\n- **Cost**: Consumes additional disk/RAM storage; slows down writes (`INSERT`, `UPDATE`, `DELETE`) because every index must be synchronously updated on each write.",
        tip: "Only index columns used in `WHERE`, `JOIN`, and `ORDER BY` clauses.",
        keyTerms: ["B+ Tree Index", "O(log n) Lookup", "Write Penalty"]
    },
    {
        id: 21,
        section: "databases",
        question: "What is a Hot Partition and how do you fix it?",
        eli5: "When Taylor Swift posts, everyone rushes to her single account partition while other servers sit idle. You fix it by putting her posts in a high-speed cache and spreading her data across 10 sub-partitions (salting).",
        answer: "When a single shard receives a disproportionately large share of traffic due to celebrity accounts or viral trends.\n- **Fixes**:\n  1. **Salt the Key**: Append a random suffix `user_id + '_' + random(0, 9)` to distribute writes across 10 shards.\n  2. **Aggressive Caching**: Serve celebrity profiles and viral posts directly from Redis/CDN.\n  3. **Isolate dedicated storage** for high-volume VIP accounts.",
        tip: "Salting keys and multi-tier caching are the interview-winning solutions for hot shards.",
        keyTerms: ["Hot Partition", "Key Salting", "Celebrity Problem"]
    },

    // Section 4: Caching
    {
        id: 22,
        section: "caching",
        question: "Where can you cache data in an architecture?",
        eli5: "Keeping a water bottle in your backpack (client cache), at your office desk (edge cache), in the company fridge (app cache), or driving all the way to the grocery store (slow database).",
        answer: "Every layer from the user's screen to the physical disk:\n1. **Client / Browser Cache** (HTTP Cache-Control headers)\n2. **CDN Edge** (static media and public API responses)\n3. **API Gateway / Reverse Proxy** (Nginx/Envoy response cache)\n4. **Application In-Memory** (Guava/local server memory)\n5. **Distributed Cache** (Redis/Memcached cluster)\n6. **Database Buffer Pool** (InnoDB buffer cache)",
        tip: "Each caching tier filters out traffic, protecting lower tiers.",
        keyTerms: ["Multi-Tier Caching", "CDN Cache", "Redis"]
    },
    {
        id: 23,
        section: "caching",
        question: "Cache-Aside vs Write-Through vs Write-Back?",
        eli5: "Cache-Aside: Check desk drawer; if empty, grab from attic and put a copy in the drawer. Write-Through: Write on paper, put one in drawer AND attic right away. Write-Back: Toss paper in drawer fast, write a note to file it in the attic tonight.",
        answer: "- **Cache-Aside (Lazy Loading)**: Application reads cache; on miss, loads from DB and populates cache. Most common and resilient.\n- **Write-Through**: Application writes to cache, and cache synchronously writes to DB. Ensures consistency, but increases write latency.\n- **Write-Back (Write-Behind)**: Application writes to cache; cache asynchronously batches writes to DB. Ultra-fast writes, but risks data loss if cache crashes before flushing.",
        tip: "Cache-aside is the industry standard for general web services.",
        keyTerms: ["Cache-Aside", "Write-Through", "Write-Back"]
    },
    {
        id: 24,
        section: "caching",
        question: "What are the main Cache Eviction policies?",
        eli5: "LRU is tossing the toy at the bottom of your closet that you haven't touched in 6 months. LFU is tossing the toy you only played with once. TTL is a carton of milk with an expiration date of next Tuesday.",
        answer: "- **LRU (Least Recently Used)**: Evicts the item not accessed for the longest time. Best general-purpose default.\n- **LFU (Least Frequently Used)**: Evicts the item with the lowest total access count. Ideal for stable access patterns.\n- **FIFO (First In First Out)**: Evicts the oldest item regardless of usage.\n- **TTL (Time to Live)**: Automatic expiration timestamp attached to every key.",
        tip: "LRU with a TTL on every key prevents stale data buildup.",
        keyTerms: ["LRU", "LFU", "TTL Expiration"]
    },
    {
        id: 25,
        section: "caching",
        question: "What is Cache Stampede (Thundering Herd) and how to prevent it?",
        eli5: "A classroom whiteboard with the daily lunch menu is erased at 11:59 AM. At 12:00 PM, 500 hungry students all sprint to the kitchen asking 'What's for lunch?!' at the same second instead of letting one student ask and write it back on the board.",
        answer: "When a popular cached key expires, thousands of concurrent requests experience a cache miss and simultaneously query the database, crashing it.\n- **Fixes**:\n  1. **Distributed Mutex Lock (Single-Flight)**: First request acquires a lock and queries the DB; all other requests wait for the cache to update.\n  2. **Background Prefetch**: Asynchronously refresh the cache before the TTL expires.\n  3. **Jittered TTLs**: Add random seconds to TTLs (`TTL + random(0, 60)`) so keys don't expire simultaneously.",
        tip: "Mention single-flight mutex locking in Redis via `SET NX` or Probabilistic Early Expiration (XFetch).",
        keyTerms: ["Cache Stampede", "Single-Flight Mutex", "TTL Jitter"]
    },
    {
        id: 26,
        section: "caching",
        question: "Cache Penetration vs Cache Avalanche?",
        eli5: "Penetration is prank callers asking for items you don't even sell, forcing you to search the back warehouse every time. Avalanche is every lightbulb in a stadium burning out at the exact same second.",
        answer: "- **Cache Penetration**: Requests for non-existent keys repeatedly bypass the cache and hit the DB. *Fix*: Cache null results with short TTL or use a **Bloom Filter**.\n- **Cache Avalanche**: Millions of cached keys expire at the exact same moment or the cache cluster crashes. *Fix*: Add random jitter to TTLs and deploy clustered Redis with replication.",
        tip: "Bloom Filter is the classic answer for cache penetration.",
        keyTerms: ["Cache Penetration", "Cache Avalanche", "Bloom Filter"]
    },
    {
        id: 27,
        section: "caching",
        question: "How do you invalidate cache safely?",
        eli5: "When you change your phone number, don't try to manually edit 100 friends' contact books yourself—just tell them 'delete my old number and ask me next time you call'.",
        answer: "- **Explicit Delete on Write**: When writing to the DB, delete the key in Redis (`DEL key`) rather than updating it to avoid race conditions.\n- **Versioned Keys**: Use `user:42:v3`—writes create `v4`, bypassing mutation races.\n- **Short TTLs as Safety Net**: Always attach TTLs so stale data expires even if a delete event is dropped.",
        tip: "'Invalidate (delete), don't update' is the golden rule of cache consistency.",
        keyTerms: ["Cache Invalidation", "Delete on Write", "Versioned Keys"]
    },

    // Section 5: Messaging & Async
    {
        id: 28,
        section: "messaging",
        question: "Why use a Message Queue?",
        eli5: "The ticket dispenser at a bakery. Customers take a paper number and wait comfortably. The bakers slice bread at a steady pace without panic, even if 50 people walk through the door at once.",
        answer: "1. **Decouple Producers & Consumers**: Services can evolve and scale independently.\n2. **Absorb Traffic Bursts**: Converts potential outages into a smooth processing backlog.\n3. **Async Background Processing**: Moves slow operations (emails, push notifications, image resizing) off the critical user request path.\n4. **Fault Isolation & Retries**: Failed worker tasks can be retried without dropping client requests.",
        tip: "Queues protect user-facing latency by making slow work asynchronous.",
        keyTerms: ["Message Queue", "Decoupling", "Async Processing"]
    },
    {
        id: 29,
        section: "messaging",
        question: "Delivery Guarantees: At-most-once vs At-least-once vs Exactly-once?",
        eli5: "At-most-once: Tossing a flyer on a porch (might blow away). At-least-once: Ringing the doorbell until someone opens (might ring twice). Idempotency: Making sure the package has a unique barcode so if delivered twice, the second one is recognized as already received and not double-charged.",
        answer: "- **At-Most-Once**: Message sent without retry. Low latency, but messages can be lost.\n- **At-Least-Once**: Message retried until receipt acknowledged. No data loss, but duplicates can occur.\n- **Exactly-Once**: Practically impossible across distributed networks without extreme locking overhead. **Industry standard: At-least-once delivery + Idempotent consumer processing**.",
        tip: "Always pair at-least-once delivery with idempotent consumer handlers.",
        keyTerms: ["At-Least-Once", "Idempotent Processing", "Delivery Guarantees"]
    },
    {
        id: 30,
        section: "messaging",
        question: "How do you achieve Idempotency in APIs and Workers?",
        eli5: "The elevator button: pressing it 1 time or mashing it 50 times still summons the elevator once without summoning 50 separate elevators.",
        answer: "- Attach a **Unique Idempotency Key** (UUID) to each request/message.\n- Consumer checks an atomic store (Redis / DB Unique Constraint):\n  - If Key exists: Return previous response or skip processing.\n  - If Key is new: Save Key and execute transaction.\n- Use SQL `UPSERT` / `ON CONFLICT DO NOTHING` instead of blind `INSERT`.",
        tip: "Stripe's `Idempotency-Key` HTTP header is the gold standard example.",
        keyTerms: ["Idempotency Key", "UUID Deduplication", "UPSERT"]
    },
    {
        id: 31,
        section: "messaging",
        question: "How do you preserve message ordering in queues?",
        eli5: "In a bank, Bob's transactions must happen in order (deposit before withdraw), but Bob's transactions don't need to wait for Alice's transactions. You give Bob his own dedicated line.",
        answer: "- Total global ordering across an entire system does not scale.\n- **Partition by Key**: Assign a partition key (e.g. `order_id` or `user_id`). Messages with the same key land in the same queue/partition (e.g. Kafka partition), guaranteeing strict FIFO order per entity.",
        tip: "Explain that per-key ordering is scalable, while global ordering creates a severe bottleneck.",
        keyTerms: ["Partition Key", "FIFO Ordering", "Kafka Partitions"]
    },
    {
        id: 32,
        section: "messaging",
        question: "What is a Dead-Letter Queue (DLQ)?",
        eli5: "The 'Undeliverable Mail / Return to Sender' bin at the post office for letters with smeared addresses, so one bad letter doesn't halt the entire sorting conveyor belt.",
        answer: "A dedicated queue for messages that repeatedly fail processing after a maximum retry threshold (e.g. 5 retries with exponential backoff).\n- Prevents malformed 'poison pill' messages from blocking the main worker queue.\n- Allows engineers to inspect, debug, fix, and replay failed messages without data loss.",
        tip: "Always configure alerts on DLQ queue depth to catch bugs immediately.",
        keyTerms: ["Dead-Letter Queue (DLQ)", "Poison Pill", "Retry Threshold"]
    },
    {
        id: 33,
        section: "messaging",
        question: "Kafka vs RabbitMQ (or AWS SQS)?",
        eli5: "Kafka is an endless streaming DVR broadcast where viewers can rewind to 10 minutes ago whenever they want. RabbitMQ is a stack of paper work orders in an inbox where each paper is shredded the moment a worker completes it.",
        answer: "- **Kafka**: Append-only distributed commit log. Massive throughput (millions msg/s), replayable history, consumer tracks offset, partition-based ordering. Best for event streaming, metrics, log pipelines.\n- **RabbitMQ / SQS**: Traditional message broker. Complex message routing, per-message acknowledgement, messages deleted upon consumption. Best for task queues and async worker jobs.",
        tip: "Kafka for high-throughput stream processing; RabbitMQ/SQS for discrete background jobs.",
        keyTerms: ["Kafka (Commit Log)", "RabbitMQ / SQS (Task Queue)"]
    },

    // Section 6: Distributed Systems
    {
        id: 34,
        section: "distributed",
        question: "What is a Distributed Lock and when do you need one?",
        eli5: "The single physical key to a single-occupancy gas station restroom hanging behind the cash register. Only one person can hold the key at a time, and a timer beeps if someone holds it for too long.",
        answer: "A coordination mechanism to ensure only one process across a cluster modifies a shared resource at a time.\n- **Implementation**: Redis with `SET key token NX PX 10000` (atomic check-and-set with TTL expiration) or ZooKeeper/etcd leases.\n- **Rule**: Always attach a TTL to prevent permanent deadlocks if the lock owner crashes.",
        tip: "Whenever you mention distributed lock, immediately mention 'with TTL expiration'.",
        keyTerms: ["Distributed Lock", "Redis SET NX", "TTL Expiration"]
    },
    {
        id: 35,
        section: "distributed",
        question: "How do you prevent double-booking or double-charging?",
        eli5: "Seat 14A on an airplane has one physical sticker. The first person to stick their ticket number on it gets the seat; anyone trying a millisecond later sees the sticker is already taken and gets denied.",
        answer: "1. **Unique Idempotency Key** at API gateway.\n2. **Database Compare-and-Set / Optimistic Locking**:\n   `UPDATE inventory SET status='booked' WHERE id=123 AND status='available';`\n   If rows affected = 0, another concurrent transaction won.\n3. **Database Unique Constraints**: `UNIQUE(user_id, booking_date)`.",
        tip: "Atomic database updates are safer and simpler than heavy distributed locks.",
        keyTerms: ["Optimistic Locking", "Compare-and-Set", "Unique Constraints"]
    },
    {
        id: 36,
        section: "distributed",
        question: "What is a Circuit Breaker pattern?",
        eli5: "The electrical fuse box in your home. If a toaster sparks too much power, the fuse trips and cuts off power instantly to protect the house from catching fire, instead of letting it melt the wires.",
        answer: "Wraps calls to remote services to prevent cascading failures during outages.\n- **Closed (Normal)**: Requests pass through; failures are counted.\n- **Open (Failing)**: Error threshold breached; immediately fail fast without calling remote service (returns fallback/cached data).\n- **Half-Open (Probe)**: After timeout, allows a few trial requests to check if service recovered. If healthy, transitions back to Closed.",
        tip: "Circuit breakers protect your services from thread pool exhaustion during third-party downtime.",
        keyTerms: ["Circuit Breaker", "Fail-Fast", "Fallback State"]
    },
    {
        id: 37,
        section: "distributed",
        question: "What is an optimal Retry Strategy?",
        eli5: "If the bathroom door is locked, don't jiggle the handle every second. Wait 1 second, then 2 seconds, then 4 seconds, and add a few random seconds so you and your roommate don't jiggle the door at the exact same moment.",
        answer: "- **Exponential Backoff**: Wait time doubles after each failure: `base * 2^attempt` (e.g. 100ms, 200ms, 400ms, 800ms).\n- **Jitter**: Add random variance to prevent all retrying clients from hammering the recovering service simultaneously.\n- **Bounded Retries**: Cap max retry attempts (e.g. max 3-5).\n- **Never retry non-idempotent operations** without an idempotency key.",
        tip: "Exponential backoff + full jitter is mathematically proven to eliminate thundering herd retries.",
        keyTerms: ["Exponential Backoff", "Full Jitter", "Bounded Retries"]
    },
    {
        id: 38,
        section: "distributed",
        question: "What are Heartbeats and TTLs used for?",
        eli5: "A scuba diver tugging on the safety rope every 10 seconds. If 30 seconds pass with zero tugs, the surface boat knows something went wrong and pulls the diver up.",
        answer: "- **Heartbeat**: Periodic ping sent by worker nodes to central coordinator to confirm liveness.\n- **TTL (Time to Live)**: Expiration lease on node registrations. If heartbeats stop, the lease expires and coordinator initiates failover and traffic rerouting.",
        tip: "Heartbeats + TTL leases form the foundation of service discovery (Consul, Eureka).",
        keyTerms: ["Heartbeat Ping", "TTL Lease", "Service Discovery"]
    },
    {
        id: 39,
        section: "distributed",
        question: "How do you handle Clock Skew across distributed machines?",
        eli5: "Two wall clocks in different rooms might differ by 3 seconds. If you're timing a race, don't look at two separate wall clocks—use one shared stopwatch or sequential ticket numbers.",
        answer: "- Physical machine clocks drift (NTP synchronization is imperfect).\n- **Never trust wall-clock timestamps** for strict ordering across servers.\n- Use **Logical Clocks (Lamport timestamps, Vector clocks)** or a centralized **Distributed Sequencer** (e.g. Snowflake ID generator, TrueTime in Google Spanner).\n- Always store dates in **UTC**.",
        tip: "Mention Twitter Snowflake ID for globally ordered 64-bit unique IDs.",
        keyTerms: ["Clock Skew", "Logical Clocks", "Snowflake ID"]
    },
    {
        id: 40,
        section: "distributed",
        question: "What is a Saga and when do you use it?",
        eli5: "Planning a vacation: Book Flight -> Book Hotel -> Rent Car. If the Car rental fails, you follow an automatic undo list: Cancel Hotel -> Cancel Flight -> Refund Money.",
        answer: "A pattern for managing distributed transactions across multiple microservices without locking.\n- Breaks a large transaction into local transactions across services.\n- If a step fails, the Saga executes **Compensating Transactions** in reverse order to undo changes.\n- *Example*: Book flight -> Reserve hotel (fails) -> Cancel flight reservation.",
        tip: "Sagas replace expensive Two-Phase Commit (2PC) in distributed microservice architectures.",
        keyTerms: ["Saga Pattern", "Compensating Transactions", "Distributed Transactions"]
    },

    // Section 7: Classic Design Case Studies
    {
        id: 41,
        section: "case-studies",
        question: "Design a URL Shortener (TinyURL)",
        eli5: "Turning a 200-character Amazon web address into a tiny 7-letter luggage tag code (`tiny.ly/abc1234`) that maps back to the long address in a fast dictionary.",
        answer: "**Requirements**: Shorten long URL to 7-character code (`tiny.ly/abc1234`), 301/302 redirect.\n- **Base62 Encoding**: Character set `[0-9, a-z, A-Z]` (62 chars). 62^7 ≈ 3.5 Trillion unique URLs.\n- **Key Generation**: Distributed unique counter (Snowflake ID / Redis INCR) encoded into Base62, or MD5 hash with collision check.\n- **Scale**: Read-heavy (100:1). Cache top 20% URLs in Redis. Return HTTP 302 (for analytics) or 301 (permanent, edge cacheable).",
        tip: "State Base62 calculation and write vs read ratio upfront.",
        keyTerms: ["Base62 Encoding", "Snowflake ID", "Redis Cache"]
    },
    {
        id: 42,
        section: "case-studies",
        question: "Design an API Rate Limiter",
        eli5: "An arcade coin dispenser that gives you 5 tokens every minute. If you try to mash the button 10 times in 2 seconds, it tells you 'wait until your next token drops'.",
        answer: "**Algorithms**: Token Bucket (best general default), Sliding Window Counter.\n- **Storage**: Redis using Lua scripts for atomic `INCR` + `EXPIRE` per user/IP.\n- **Placement**: API Gateway / Reverse Proxy (Envoy/Kong).\n- **Response**: Return `HTTP 429 Too Many Requests` with `Retry-After: <seconds>` header.",
        tip: "Explain why Token Bucket handles bursts gracefully and Lua scripts ensure atomicity in Redis.",
        keyTerms: ["Token Bucket", "Sliding Window", "HTTP 429"]
    },
    {
        id: 43,
        section: "case-studies",
        question: "Design WhatsApp / Real-time Chat",
        eli5: "Instead of sending letters back and forth through the mail, you and your friend keep an open walkie-talkie channel (WebSocket) so speech is instant.",
        answer: "**Architecture**:\n- **Connection**: Persistent bidirectional **WebSockets** between clients and Gateway servers.\n- **Gateway Registry**: Redis maps `user_id -> gateway_server_ip`.\n- **Message Store**: Cassandra / DynamoDB partitioned by `conversation_id` with sequence IDs.\n- **Offline Users**: Push notifications via APNS / FCM; messages delivered on reconnect.",
        tip: "At-least-once delivery with client-side deduplication using message UUID.",
        keyTerms: ["WebSockets", "Gateway Registry", "Cassandra"]
    },
    {
        id: 44,
        section: "case-studies",
        question: "Design YouTube / Video Streaming Platform",
        eli5: "When you upload a video, a robot chops it into 5-second puzzle pieces and makes 1080p, 720p, and 480p versions so your phone automatically switches to 480p if you drive through a tunnel.",
        answer: "**Architecture**:\n- **Upload**: Chunked resumable uploads direct to Object Storage (S3) via signed URLs.\n- **Transcoding Pipeline**: Message Queue (SQS) triggers worker pool to transcode raw video into multiple bitrates/resolutions (1080p, 720p, 480p) using HLS / DASH protocols.\n- **Streaming Delivery**: Master playlist (`.m3u8`) and video chunks served via multi-CDN edge caching.",
        tip: "Highlight chunked uploads, async transcoding queue, and HLS/DASH adaptive bitrate streaming.",
        keyTerms: ["Adaptive Bitrate (HLS)", "Transcoding Pipeline", "CDN Chunks"]
    },
    {
        id: 45,
        section: "case-studies",
        question: "Design Uber / Ride Hailing Service",
        eli5: "Drawing a honeycomb grid of hexagons over the city map. When you tap 'Ride', Uber only looks at the 7 hexagon tiles right around your pin to find available drivers.",
        answer: "**Architecture**:\n- **Driver Location Tracking**: Drivers stream GPS coordinates every 4 seconds via WebSocket.\n- **Spatial Indexing**: In-memory **Geohash** or **Uber H3 (Hexagonal hierarchical spatial index)** in Redis.\n- **Matching**: Query neighboring H3 cells, rank drivers by ETA, and execute atomic lock/booking transaction so only one driver is assigned.",
        tip: "Mention Uber H3 geospatial indexing and atomic driver assignment.",
        keyTerms: ["Uber H3 Hex Index", "Geospatial Query", "Atomic Assignment"]
    },
    {
        id: 46,
        section: "case-studies",
        question: "Design a Social News Feed (Twitter / Instagram)",
        eli5: "When your normal friend posts, they drop a copy into their 20 friends' inboxes. But when Cristiano Ronaldo posts to 500 million people, nobody gets 500 million emails—you just check Ronaldo's board whenever you open the app.",
        answer: "**Architecture**:\n- **Fan-out on Write (Push)**: For normal users, post is injected into all followers' precomputed Redis feed timelines. Ultra-fast reads O(1).\n- **Fan-out on Read (Pull)**: For celebrities (millions of followers), followers fetch celebrity posts on-demand and merge with feed at read time.\n- **Hybrid Model**: Push for normal users + Pull for celebrities solves the celebrity write explosion problem.",
        tip: "Hybrid fan-out model is the benchmark answer for all news feed questions.",
        keyTerms: ["Fan-out on Write", "Fan-out on Read", "Hybrid Feed"]
    },

    // Section 8: Reliability & Ops
    {
        id: 47,
        section: "reliability",
        question: "What do you monitor in a distributed system (4 Golden Signals)?",
        eli5: "A car dashboard: Speedometer (Latency), Odometer/RPM (Traffic), Check Engine Light (Errors), and Fuel/Temp Gauge (Saturation).",
        answer: "1. **Latency**: Time to service a request (track p50, p95, p99).\n2. **Traffic**: Demand placed on system (QPS, concurrent connections).\n3. **Errors**: Rate of failed requests (HTTP 5xx, exception counts).\n4. **Saturation**: How full the subsystem is (CPU, RAM, disk I/O, DB connection pool).\n- *Rule*: Alert on user-visible SLO breaches, not raw CPU spikes.",
        tip: "Google SRE 4 Golden Signals: Latency, Traffic, Errors, Saturation.",
        keyTerms: ["4 Golden Signals", "Latency", "Saturation"]
    },
    {
        id: 48,
        section: "reliability",
        question: "What are SLI, SLO, and SLA?",
        eli5: "SLI is how fast you actually ran the mile today (6 mins). SLO is your personal training goal (under 6 mins). SLA is your promise to your coach that if you take over 7 mins, you owe 50 pushups.",
        answer: "- **SLI (Service Level Indicator)**: The actual measured metric (e.g. 99.92% of requests under 200ms).\n- **SLO (Service Level Objective)**: Internal target agreed upon by engineering team (e.g. 99.9% success rate).\n- **SLA (Service Level Agreement)**: Legal contract with customers with financial penalties if breached.\n- **Error Budget**: `100% - SLO` (used to pace feature releases vs reliability work).",
        tip: "SLI is measured, SLO is internal goal, SLA is customer commitment.",
        keyTerms: ["SLI", "SLO", "SLA", "Error Budget"]
    },
    {
        id: 49,
        section: "reliability",
        question: "How do you deploy safely at scale?",
        eli5: "Canary: Tasting one spoonful of soup before serving the 100-person banquet. Blue-Green: Having two complete kitchens, cooking dinner in Kitchen B, and sliding all guests over to Table B when it's ready.",
        answer: "1. **Canary Releases**: Route 1% of traffic to new version, monitor error rates, then gradually expand.\n2. **Blue-Green Deployments**: Switch traffic between two identical production environments instantaneously.\n3. **Feature Flags**: Decouple deployment from feature release; killswitch on failure.\n4. **Expand-Contract DB Migrations**: Never rename columns; add new column, dual-write, backfill, cutover, drop old column.",
        tip: "Mention expand-contract database migrations for zero-downtime schema changes.",
        keyTerms: ["Canary Release", "Blue-Green Deploy", "Feature Flags"]
    },
    {
        id: 50,
        section: "reliability",
        question: "How do you design for failure in distributed architectures?",
        eli5: "Building a submarine: Assume leaks will happen. Build airtight bulkhead doors between rooms so one small leak doesn't sink the entire vessel.",
        answer: "- Assume every network call, server, and third-party API WILL fail.\n- **Defense Mechanisms**:\n  - Timeouts on all network calls\n  - Bounded retries with exponential backoff & jitter\n  - Circuit breakers to contain blast radius\n  - Fallback degraded modes (e.g. cached recommendations instead of ML engine)\n  - Regular Chaos Engineering tests (Chaos Monkey).",
        tip: "End your interview by naming failure modes for every box in your diagram.",
        keyTerms: ["Chaos Engineering", "Blast Radius", "Degraded Modes"]
    }
];

export const SD_INTERVIEW_TIPS = {
    phrasesThatScorePoints: [
        "\"This system is heavily read-heavy (100:1), so I will optimize the read path and caching layer first.\"",
        "\"I will accept eventual consistency for social feeds, but require strong ACID consistency for wallet payments.\"",
        "\"A single celebrity posting creates a hot partition; here is how I will salt the shard key and use hybrid fan-out.\"",
        "\"I will make this consumer worker idempotent with an idempotency key to safely handle duplicate message retries.\"",
        "\"If this third-party dependency goes down, the circuit breaker will fail fast and serve fallback cached data.\""
    ],
    commonMistakes: [
        "Jumping straight to drawing architecture boxes before clarifying requirements and scale.",
        "Dropping tech buzzwords (Kafka, Redis, K8s) without articulating the specific constraint they solve.",
        "Claiming 'we choose CA in CAP theorem' (network partitions are unavoidable in distributed systems).",
        "Ignoring failure modes, replication lag, and single points of failure.",
        "Over-engineering 20 microservices for a simple MVP interview problem."
    ]
};
