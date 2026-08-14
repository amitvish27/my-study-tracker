// Top 50 System Design Questions, Architecture Blueprints, and Interview Playbook

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

export const SD_FRAMEWORK_STEPS = [
    { step: 1, title: "Clarify Scope & Assumptions (0-5 min)", desc: "Ask about functional requirements, DAU, read/write ratio, latency targets, and MVP features. Restate the problem in your own words." },
    { step: 2, title: "Back-of-Envelope Estimates & API (5-10 min)", desc: "Calculate write/read QPS, peak QPS (x2-x10), storage growth over 5 years, and bandwidth. Sketch core REST/gRPC endpoints." },
    { step: 3, title: "High-Level Architecture (10-25 min)", desc: "Draw the boxes: Clients -> CDN -> Load Balancer -> Stateless App Servers -> Cache -> Database -> Message Queue / Workers." },
    { step: 4, title: "Deep Dive Hardest Component (25-35 min)", desc: "Focus on the 1-2 core bottlenecks: sharding strategy, data model, race condition prevention, cache invalidation, or streaming pipeline." },
    { step: 5, title: "Handle Failures & Bottlenecks (35-40 min)", desc: "Address single points of failure (SPOFs), replication lag, circuit breakers, dead letter queues, and rate limiting." },
    { step: 6, title: "State Trade-offs & Wrap-up (40-45 min)", desc: "Defend your design with trade-offs (e.g., CAP theorem choice, SQL vs NoSQL, fan-out on write vs read). Summarize clean telemetry." }
];

export const SD_MATH_CHEAT_SHEET = {
    timeConstants: [
        { label: "Seconds in a day", value: "86,400 ≈ 10^5 seconds" },
        { label: "Seconds in a year", value: "31.5 Million ≈ 3.15 × 10^7 seconds" }
    ],
    units: [
        { unit: "1 KB", bytes: "10^3 bytes (2^10 = 1,024)" },
        { unit: "1 MB", bytes: "10^6 bytes (2^20 ≈ 1 Million)" },
        { unit: "1 GB", bytes: "10^9 bytes (2^30 ≈ 1 Billion)" },
        { unit: "1 TB", bytes: "10^12 bytes (2^40 ≈ 1 Trillion)" },
        { unit: "1 PB", bytes: "10^15 bytes (2^50 ≈ 1 Quadrillion)" }
    ],
    formulas: [
        { name: "Average QPS", formula: "(DAU × Actions_per_Day) / 86,400" },
        { name: "Peak QPS", formula: "Average QPS × Peak_Multiplier (typically 2x to 10x)" },
        { name: "Daily Storage", formula: "Daily_Writes × Average_Record_Size" },
        { name: "5-Year Storage", formula: "Daily_Storage × 365 × 5 × (1 + Overhead_30%)" },
        { name: "Bandwidth (Bytes/sec)", formula: "QPS × Average_Payload_Size" }
    ]
};

export const SD_BUILDING_BLOCKS = [
    { name: "Load Balancer", when: "Distribute incoming traffic across stateless web/app servers. Health checks remove failed instances.", type: "Traffic" },
    { name: "Cache (Redis/Memcached)", when: "Speed up reads by caching hot/expensive queries or session state. Cache-aside pattern.", type: "Performance" },
    { name: "CDN (Edge Server)", when: "Serve static assets (images, videos, JS/CSS) geographically close to users to cut latency.", type: "Edge" },
    { name: "Relational DB (SQL)", when: "Structured data requiring ACID transactions, complex joins, and strong consistency (e.g. Payments).", type: "Storage" },
    { name: "NoSQL DB (Mongo, Cassandra, Dynamo)", when: "Massive write volume, flexible schemas, simple key-value lookups, horizontal scaling.", type: "Storage" },
    { name: "Database Sharding", when: "Split data across multiple database instances by shard key when single DB exceeds storage/write limits.", type: "Storage" },
    { name: "Message Queue (Kafka, RabbitMQ, SQS)", when: "Decouple services, buffer sudden traffic spikes, perform async background jobs (emails, analytics).", type: "Async" },
    { name: "API Gateway & Rate Limiter", when: "Single entry point for auth, routing, SSL termination, and token-bucket rate limiting to prevent abuse.", type: "Security" },
    { name: "Consistent Hashing", when: "Map keys and cache/database nodes to a hash ring so adding/removing nodes only remaps 1/N keys.", type: "Distributed" },
    { name: "Bloom Filter", when: "Space-efficient probabilistic check to see if key definitely DOES NOT exist before querying slow disk.", type: "Performance" }
];

export const SD_QUESTIONS = [
    // Section 1: Fundamentals
    {
        id: 1,
        section: "fundamentals",
        question: "What is scalability?",
        answer: "The ability of a system to handle increasing load by adding hardware resources.\n- **Vertical Scaling (Scale Up)**: Adding CPU, RAM, or SSD to a single server. Limited by hardware ceiling and single point of failure.\n- **Horizontal Scaling (Scale Out)**: Adding more commodity servers behind a load balancer. Preferred for web scale; requires stateless applications.",
        tip: "Always emphasize horizontal scaling and explain why statelessness is a prerequisite."
    },
    {
        id: 2,
        section: "fundamentals",
        question: "Latency vs Throughput?",
        answer: "- **Latency**: The time taken to process a single request from client to response (e.g. 50 ms p99).\n- **Throughput**: The number of requests or data volume handled per second (e.g. 10,000 QPS).\n- *Trade-off*: Batching increases throughput but usually increases individual request latency.",
        tip: "Mention that optimizing for p99 latency protects user experience during tail bottlenecks."
    },
    {
        id: 3,
        section: "fundamentals",
        question: "What is the CAP Theorem?",
        answer: "In any distributed data store, during a network partition (P), you must choose between **Consistency (C)** (every read gets latest write or fails) and **Availability (A)** (every non-failing node returns a response, possibly stale).\n- Since network partitions are inevitable in real networks, real systems choose **CP** (e.g. Banking, Stock) or **AP** (e.g. Social Feeds, Product Catalogs).",
        tip: "Never say 'we choose CA'. In distributed networks, Partition Tolerance (P) is a given."
    },
    {
        id: 4,
        section: "fundamentals",
        question: "CP vs AP with concrete examples?",
        answer: "- **CP (Consistency + Partition Tolerance)**: Banking, payment transfers, flight ticket booking. System rejects requests rather than risk double-spending or stale inventory.\n- **AP (Availability + Partition Tolerance)**: Twitter/X feed, YouTube view counts, shopping product views. System serves slightly stale data to remain 100% available.",
        tip: "Never choose CP or AP for the entire company—state that you choose per feature/microservice."
    },
    {
        id: 5,
        section: "fundamentals",
        question: "Strong vs Eventual Consistency?",
        answer: "- **Strong Consistency**: Every read immediately returns the latest write. Requires distributed locking/consensus (Paxos, Raft), increasing latency.\n- **Eventual Consistency**: Replicas asynchronously catch up over time (e.g., 200ms lag). Reads are fast and local, but may return briefly outdated values.",
        tip: "Use 'Read-your-own-writes' consistency for user profile updates with eventual consistency for social followers."
    },
    {
        id: 6,
        section: "fundamentals",
        question: "Stateless vs Stateful services?",
        answer: "- **Stateless Services**: Servers do not hold client session data in local memory. Any request can be routed to any server. Trivial to auto-scale, restart, and load balance.\n- **Stateful Services**: Servers hold local session state. Requires sticky sessions, complicating failover and dynamic scaling. State should be pushed to Redis or a shared DB.",
        tip: "Always push state out of compute into dedicated distributed stores (Redis, Postgres)."
    },
    {
        id: 7,
        section: "fundamentals",
        question: "Monolith vs Microservices?",
        answer: "- **Monolith**: Single codebase and deployment unit. Simpler development, zero network overhead between modules, easy ACID transactions. Harder to scale large engineering teams.\n- **Microservices**: Independently deployable services communicating over network (gRPC/HTTP). Scalable team ownership and isolated deployments, but introduces distributed tracing, partial failures, and eventual consistency overhead.",
        tip: "In interviews, recommend starting with a modular monolith and splitting services when pain/scale demands it."
    },

    // Section 2: Scaling & Load Balancing
    {
        id: 8,
        section: "scaling-lb",
        question: "What does a Load Balancer do?",
        answer: "A Load Balancer distributes client traffic across a pool of backend servers.\n- Performs periodic health checks to remove failed instances.\n- Provides a single virtual IP (VIP) to hide internal server topology.\n- Can terminate SSL/TLS encryption to offload compute from application servers.",
        tip: "Mention Layer 4 vs Layer 7 and active health checks."
    },
    {
        id: 9,
        section: "scaling-lb",
        question: "Common Load Balancing algorithms?",
        answer: "- **Round Robin**: Sequentially distributes to each server. Simple, assumes equal server capacity.\n- **Weighted Round Robin**: Routes more traffic to more powerful machines.\n- **Least Connections**: Routes to server with fewest active connections; great for long-lived WebSockets.\n- **IP / Consistent Hash**: Hashes client IP to ensure session stickiness without local state.",
        tip: "Mention Least Response Time for latency-sensitive microservices."
    },
    {
        id: 10,
        section: "scaling-lb",
        question: "Layer 4 vs Layer 7 Load Balancing?",
        answer: "- **Layer 4 (Transport)**: Routes based on IP address and TCP/UDP port without inspecting packet payload. Ultra-fast, protocol agnostic, low CPU overhead.\n- **Layer 7 (Application)**: Inspects HTTP headers, cookies, and URL paths (`/api/v1/users` vs `/images`). Enables intelligent routing, auth filtering, and TLS termination, but uses more CPU.",
        tip: "Layer 7 is standard for API gateways; Layer 4 is used for ultra-high throughput entry points."
    },
    {
        id: 11,
        section: "scaling-lb",
        question: "What is horizontal scaling and what breaks it?",
        answer: "Adding more identical machines. It breaks when:\n1. Servers maintain local in-memory session state.\n2. The database has a single primary writer bottleneck.\n3. Shared distributed locks serialize all concurrent requests.",
        tip: "Identify database write saturation as the primary bottleneck of horizontal web tiers."
    },
    {
        id: 12,
        section: "scaling-lb",
        question: "How do you handle a sudden traffic spike (e.g. 10x surge)?",
        answer: "1. **Autoscale** on leading metrics (QPS or queue depth, not just CPU).\n2. **Buffer with Message Queues** (Kafka/SQS) to smooth bursts.\n3. **Aggressive Caching** at CDN and Redis.\n4. **Load Shedding / Rate Limiting**: Reject non-critical background traffic with HTTP 429/503.\n5. **Pre-warm capacity** before scheduled events (e.g. Super Bowl, Black Friday).",
        tip: "Use message queues to convert an outage into a slightly delayed processing queue."
    },
    {
        id: 13,
        section: "scaling-lb",
        question: "What is a CDN and when do you use it?",
        answer: "A **Content Delivery Network** is a globally distributed network of edge proxy servers (PoPs).\n- Caches static content (images, JS, CSS, video segments) geographically close to end users.\n- Drastically cuts round-trip latency (RTT) and offloads 80%+ of origin bandwidth.",
        tip: "Use Versioned URLs (e.g., `bundle.v2.js`) and cache invalidation APIs on deployment."
    },
    {
        id: 14,
        section: "scaling-lb",
        question: "What is Consistent Hashing and why does it matter?",
        answer: "Maps both server nodes and cache keys to a circular hash ring (0 to 2^32 - 1).\n- Keys map to the first node clockwise on the ring.\n- **Benefit**: Adding or removing a server only remaps `k / N` keys (neighboring keys) rather than re-hashing all keys (as `key mod N` would do).\n- **Virtual Nodes**: Place multiple virtual points per physical machine to ensure uniform distribution and prevent hot spots.",
        tip: "Crucial for distributed caches (Memcached), DynamoDB, and partitioned databases."
    },

    // Section 3: Databases & Storage
    {
        id: 15,
        section: "databases",
        question: "SQL vs NoSQL — how do you choose?",
        answer: "- **Choose SQL (Postgres, MySQL)**: Relational data, strong ACID guarantees, structured schema, complex multi-table joins (Payments, Auth, Orders).\n- **Choose NoSQL (MongoDB, Cassandra, DynamoDB)**: Massive write volume (millions QPS), flexible/unstructured schema, simple key-value or document queries, horizontal auto-partitioning.",
        tip: "Modern architectures are 'Polyglot'—Postgres for users/orders, Redis for caching, Cassandra for logs."
    },
    {
        id: 16,
        section: "databases",
        question: "What is Database Sharding?",
        answer: "Horizontally partitioning a large database table across multiple independent database servers (shards).\n- Each shard holds a subset of rows identified by a **Shard Key** (e.g. `user_id`).\n- Increases write and storage capacity beyond single machine limits.\n- *Trade-off*: Cross-shard joins and distributed transactions become extremely difficult and slow.",
        tip: "Shard for storage and write capacity; replicate for read capacity and fault tolerance."
    },
    {
        id: 17,
        section: "databases",
        question: "How do you pick a Shard Key?",
        answer: "- Pick a key with **High Cardinality** and **Uniform Distribution** matching the primary query pattern (e.g., `user_id` or `uuid`).\n- **Bad Shard Keys**: Monotonically increasing IDs (causes all writes to hit latest shard), low cardinality keys like `country` (causes uneven shard sizes).",
        tip: "Consistent hashing on `user_id` is the standard choice for user-centric applications."
    },
    {
        id: 18,
        section: "databases",
        question: "Leader-Follower vs Multi-Leader Replication?",
        answer: "- **Leader-Follower (Primary-Replica)**: Single leader handles all writes; multiple followers handle reads asynchronously. Simple, consistent, but leader failure requires failover.\n- **Multi-Leader**: Writes accepted in multiple regions. Lower latency for global users, but requires conflict resolution algorithms (Last-Write-Wins, CRDTs).",
        tip: "Leader-follower is the standard default unless multi-region write latency is unacceptable."
    },
    {
        id: 19,
        section: "databases",
        question: "How do you scale read-heavy databases?",
        answer: "1. Add **Read Replicas** behind a read load balancer.\n2. Introduce **Distributed In-Memory Caches** (Redis).\n3. **Denormalize data** and build **Materialized Views**.\n4. Route critical 'read-your-own-writes' queries to Primary DB, and other reads to Replicas.",
        tip: "Always account for replication lag when reading from replicas."
    },
    {
        id: 20,
        section: "databases",
        question: "What is a Database Index and what does it cost?",
        answer: "A sorted auxiliary data structure (typically a B+ Tree) that enables logarithmic O(log n) lookups instead of O(n) full table scans.\n- **Cost**: Consumes additional disk/RAM storage; slows down writes (`INSERT`, `UPDATE`, `DELETE`) because indexes must be updated synchronously.",
        tip: "Only index columns used in `WHERE`, `JOIN`, and `ORDER BY` clauses."
    },
    {
        id: 21,
        section: "databases",
        question: "What is a Hot Partition and how do you fix it?",
        answer: "When a single shard receives a disproportionately large share of traffic (e.g. Celebrity account, Taylor Swift tweet).\n- **Fixes**:\n  1. **Salt the Key**: Append random suffix `user_id + '_' + random(0, 10)` to spread writes across 10 shards.\n  2. **Cache Aggressively**: Serve celebrity profiles directly from Redis/CDN.\n  3. **Isolate dedicated shard** for high-volume entities.",
        tip: "Salting keys and multi-tier caching are the interview-winning solutions for hot shards."
    },

    // Section 4: Caching
    {
        id: 22,
        section: "caching",
        question: "Where can you cache data in an architecture?",
        answer: "Every layer from user to disk:\n1. **Client / Browser Cache** (HTTP Cache-Control headers)\n2. **CDN Edge** (static media and public APIs)\n3. **API Gateway / Reverse Proxy** (Nginx/Envoy response cache)\n4. **Application In-Memory** (Guava/local heap)\n5. **Distributed Cache** (Redis/Memcached cluster)\n6. **Database Buffer Pool** (InnoDB buffer cache)",
        tip: "Each caching tier filters out traffic, protecting lower tiers."
    },
    {
        id: 23,
        section: "caching",
        question: "Cache-Aside vs Write-Through vs Write-Back?",
        answer: "- **Cache-Aside (Lazy Loading)**: Application reads cache; on miss, loads from DB and populates cache. Most common and resilient.\n- **Write-Through**: Application writes to cache, and cache synchronously writes to DB. Ensures consistency, higher write latency.\n- **Write-Back (Write-Behind)**: Application writes to cache; cache asynchronously flushes batch writes to DB. Ultra-fast writes, risk of data loss if cache crashes before flush.",
        tip: "Cache-aside is the industry standard for general web services."
    },
    {
        id: 24,
        section: "caching",
        question: "What are the main Cache Eviction policies?",
        answer: "- **LRU (Least Recently Used)**: Evicts item not accessed for longest time. Best general default.\n- **LFU (Least Frequently Used)**: Evicts item with lowest access count. Ideal for stable access patterns.\n- **FIFO (First In First Out)**: Evicts oldest item regardless of usage.\n- **TTL (Time to Live)**: Automatic expiration timestamp on every key.",
        tip: "LRU with a TTL on every key prevents stale data buildup."
    },
    {
        id: 25,
        section: "caching",
        question: "What is Cache Stampede (Thundering Herd) and how to prevent it?",
        answer: "When a popular cached key expires, thousands of concurrent requests miss cache and simultaneously hit the database, overloading it.\n- **Fixes**:\n  1. **Distributed Mutex Lock (Single-Flight)**: First request acquires lock and queries DB; other requests wait for cache update.\n  2. **Background Prefetch**: Refresh cache asynchronously before TTL expires.\n  3. **Jittered TTLs**: Add random noise (`TTL + random(0, 60)`) so keys don't expire together.",
        tip: "Mention single-flight mutex locking in Redis via `SET NX` or Probabilistic Early Expiration (XFetch)."
    },
    {
        id: 26,
        section: "caching",
        question: "Cache Penetration vs Cache Avalanche?",
        answer: "- **Cache Penetration**: Requests for keys that don't exist in DB repeatedly bypass cache and hit DB. *Fix*: Cache negative/null results with short TTL or use a **Bloom Filter**.\n- **Cache Avalanche**: Hundreds of thousands of keys expire at the exact same moment or cache crashes. *Fix*: Add random jitter to TTLs and deploy clustered Redis with replication.",
        tip: "Bloom Filter is the classic answer for cache penetration."
    },
    {
        id: 27,
        section: "caching",
        question: "How do you invalidate cache safely?",
        answer: "- **Explicit Delete on Write**: When writing to DB, immediately delete key in Redis (`DEL key`) rather than updating it to avoid race conditions.\n- **Versioned Keys**: Use `user:42:v3`—writes create `v4`, avoiding mutation races.\n- **Short TTLs as Safety Net**: Always attach TTL to ensure eventual consistency even if delete event dropped.",
        tip: "'Invalidate (delete), don't update' is the golden rule of cache consistency."
    },

    // Section 5: Messaging & Async
    {
        id: 28,
        section: "messaging",
        question: "Why use a Message Queue?",
        answer: "1. **Decouple Producers & Consumers**: Systems can evolve independently.\n2. **Absorb Traffic Bursts**: Converts potential outages into backlog queues.\n3. **Async Background Execution**: Move slow operations (email, image resize, analytics) off the critical request path.\n4. **Retry & Fault Isolation**: Failed consumer jobs can be retried without losing client requests.",
        tip: "Queues protect user-facing latency by making slow work asynchronous."
    },
    {
        id: 29,
        section: "messaging",
        question: "Delivery Guarantees: At-most-once vs At-least-once vs Exactly-once?",
        answer: "- **At-Most-Once**: Message sent without ack retry. Low latency, messages can be lost.\n- **At-Least-Once**: Message retried until ack received. No messages lost, but duplicates can occur.\n- **Exactly-Once**: Practically impossible end-to-end without distributed locks. **Industry standard: At-least-once delivery + Idempotent consumer processing**.",
        tip: "Always pair at-least-once delivery with idempotent consumer handlers."
    },
    {
        id: 30,
        section: "messaging",
        question: "How do you achieve Idempotency in APIs and Workers?",
        answer: "- Attach a **Unique Idempotency Key** (UUID) to each request/message.\n- Consumer checks an atomic store (Redis / DB Unique Constraint):\n  - If Key exists: Return previous response or skip processing.\n  - If Key is new: Save Key and execute transaction.\n- Use SQL `UPSERT` / `ON CONFLICT DO NOTHING` instead of blind `INSERT`.",
        tip: "Stripe's `Idempotency-Key` HTTP header is the gold standard example."
    },
    {
        id: 31,
        section: "messaging",
        question: "How do you preserve message ordering in queues?",
        answer: "- Total global ordering across an entire system does not scale.\n- **Partition by Key**: Assign a partition key (e.g. `order_id` or `user_id`). Messages with the same key land in the same partition/queue (e.g. Kafka partition), guaranteeing FIFO order per entity.",
        tip: "Explain that per-key ordering is scalable, while global ordering creates a severe bottleneck."
    },
    {
        id: 32,
        section: "messaging",
        question: "What is a Dead-Letter Queue (DLQ)?",
        answer: "A dedicated queue for messages that repeatedly fail processing after a maximum retry threshold (e.g. 5 retries with backoff).\n- Prevents 'poison pill' messages from blocking the main queue.\n- Allows engineers to inspect, debug, fix, and replay failed messages without data loss.",
        tip: "Always configure alerts on DLQ queue depth to catch bugs immediately."
    },
    {
        id: 33,
        section: "messaging",
        question: "Kafka vs RabbitMQ (or AWS SQS)?",
        answer: "- **Kafka**: Append-only distributed commit log. Massive throughput (millions msg/s), replayable history, consumer tracks offset, partition-based ordering. Best for event streaming, metrics, log pipelines.\n- **RabbitMQ / SQS**: Traditional message broker. Complex message routing, per-message acknowledgement, messages deleted upon consumption. Best for task queues and async worker jobs.",
        tip: "Kafka for high-throughput stream processing; RabbitMQ/SQS for discrete background jobs."
    },

    // Section 6: Distributed Systems
    {
        id: 34,
        section: "distributed",
        question: "What is a Distributed Lock and when do you need one?",
        answer: "A coordination mechanism to ensure only one process across a cluster modifies a shared resource at a time.\n- **Implementation**: Redis with `SET key token NX PX 10000` (atomic check-and-set with TTL expiration) or ZooKeeper/etcd leases.\n- **Rule**: Always attach a TTL to prevent permanent deadlocks if the lock owner crashes.",
        tip: "Whenever you mention distributed lock, immediately mention 'with TTL expiration'."
    },
    {
        id: 35,
        section: "distributed",
        question: "How do you prevent double-booking or double-charging?",
        answer: "1. **Unique Idempotency Key** at API gateway.\n2. **Database Compare-and-Set / Optimistic Locking**:\n   `UPDATE inventory SET status='booked' WHERE id=123 AND status='available';`\n   If rows affected = 0, another concurrent transaction won.\n3. **Database Unique Constraints**: `UNIQUE(user_id, booking_date)`.",
        tip: "Atomic database updates are safer and simpler than heavy distributed locks."
    },
    {
        id: 36,
        section: "distributed",
        question: "What is a Circuit Breaker pattern?",
        answer: "Wraps calls to remote services to prevent cascading failures during outages.\n- **Closed (Normal)**: Requests pass through; failures are counted.\n- **Open (Failing)**: Error threshold breached; immediately fail fast without calling remote service (returns fallback/cached data).\n- **Half-Open (Probe)**: After timeout, allows a few trial requests to check if service recovered. If healthy, transitions back to Closed.",
        tip: "Circuit breakers protect your services from thread pool exhaustion during third-party downtime."
    },
    {
        id: 37,
        section: "distributed",
        question: "What is an optimal Retry Strategy?",
        answer: "- **Exponential Backoff**: Wait time doubles after each failure: `base * 2^attempt` (e.g. 100ms, 200ms, 400ms, 800ms).\n- **Jitter**: Add random variance to prevent all retrying clients from hammering the recovering service simultaneously.\n- **Bounded Retries**: Cap max retry attempts (e.g., max 3-5).\n- **Never retry non-idempotent operations** without an idempotency key.",
        tip: "Exponential backoff + full jitter is mathematically proven to eliminate thundering herd retries."
    },
    {
        id: 38,
        section: "distributed",
        question: "What are Heartbeats and TTLs used for?",
        answer: "- **Heartbeat**: Periodic ping sent by worker nodes to central coordinator to confirm liveness.\n- **TTL (Time to Live)**: Expiration lease on node registrations. If heartbeats stop, the lease expires and coordinator initiates failover and traffic rerouting.",
        tip: "Heartbeats + TTL leases form the foundation of service discovery (Consul, Eureka)."
    },
    {
        id: 39,
        section: "distributed",
        question: "How do you handle Clock Skew across distributed machines?",
        answer: "- Physical machine clocks drift (NTP synchronization is imperfect).\n- **Never trust wall-clock timestamps** for strict ordering across servers.\n- Use **Logical Clocks (Lamport timestamps, Vector clocks)** or a centralized **Distributed Sequencer** (e.g., Snowflake ID generator, TrueTime in Google Spanner).\n- Always store dates in **UTC**.",
        tip: "Mention Twitter Snowflake ID for globally ordered 64-bit unique IDs."
    },
    {
        id: 40,
        section: "distributed",
        question: "What is a Saga and when do you use it?",
        answer: "A pattern for managing distributed transactions across multiple microservices without locking.\n- Breaks a large transaction into local transactions across services.\n- If a step fails, the Saga executes **Compensating Transactions** in reverse order to undo changes.\n- *Example*: Book flight -> Reserve hotel (fails) -> Cancel flight reservation.",
        tip: "Sagas replace expensive Two-Phase Commit (2PC) in distributed microservice architectures."
    },

    // Section 7: Classic Design Case Studies
    {
        id: 41,
        section: "case-studies",
        question: "Design a URL Shortener (TinyURL)",
        answer: "**Requirements**: Shorten long URL to 7-character code (`tiny.ly/abc1234`), 301/302 redirect.\n- **Base62 Encoding**: Character set `[0-9, a-z, A-Z]` (62 chars). 62^7 ≈ 3.5 Trillion unique URLs.\n- **Key Generation**: Distributed unique counter (Snowflake ID / Redis INCR) encoded into Base62, or MD5 hash with collision check.\n- **Scale**: Read-heavy (100:1). Cache top 20% URLs in Redis. Return HTTP 302 (for analytics) or 301 (permanent, edge cacheable).",
        tip: "State Base62 calculation and write vs read ratio upfront."
    },
    {
        id: 42,
        section: "case-studies",
        question: "Design an API Rate Limiter",
        answer: "**Algorithms**: Token Bucket (best general default), Sliding Window Counter.\n- **Storage**: Redis using Lua scripts for atomic `INCR` + `EXPIRE` per user/IP.\n- **Placement**: API Gateway / Reverse Proxy (Envoy/Kong).\n- **Response**: Return `HTTP 429 Too Many Requests` with `Retry-After: <seconds>` header.",
        tip: "Explain why Token Bucket handles bursts gracefully and Lua scripts ensure atomicity in Redis."
    },
    {
        id: 43,
        section: "case-studies",
        question: "Design WhatsApp / Real-time Chat",
        answer: "**Architecture**:\n- **Connection**: Persistent bidirectional **WebSockets** between clients and Gateway servers.\n- **Gateway Registry**: Redis maps `user_id -> gateway_server_ip`.\n- **Message Store**: Cassandra / DynamoDB partitioned by `conversation_id` with sequence IDs.\n- **Offline Users**: Push notifications via APNS / FCM; messages delivered on reconnect.",
        tip: "At-least-once delivery with client-side deduplication using message UUID."
    },
    {
        id: 44,
        section: "case-studies",
        question: "Design YouTube / Video Streaming Platform",
        answer: "**Architecture**:\n- **Upload**: Chunked resumable uploads direct to Object Storage (S3) via signed URLs.\n- **Transcoding Pipeline**: Message Queue (SQS) triggers worker pool to transcode raw video into multiple bitrates/resolutions (1080p, 720p, 480p) using HLS / DASH protocols.\n- **Streaming Delivery**: Master playlist (`.m3u8`) and video chunks served via multi-CDN edge caching.",
        tip: "Highlight chunked uploads, async transcoding queue, and HLS/DASH adaptive bitrate streaming."
    },
    {
        id: 45,
        section: "case-studies",
        question: "Design Uber / Ride Hailing Service",
        answer: "**Architecture**:\n- **Driver Location Tracking**: Drivers stream GPS coordinates every 4 seconds via WebSocket.\n- **Spatial Indexing**: In-memory **Geohash** or **Uber H3 (Hexagonal hierarchical spatial index)** in Redis.\n- **Matching**: Query neighboring H3 cells, rank drivers by ETA, and execute atomic lock/booking transaction so only one driver is assigned.",
        tip: "Mention Uber H3 geospatial indexing and atomic driver assignment."
    },
    {
        id: 46,
        section: "case-studies",
        question: "Design a Social News Feed (Twitter / Instagram)",
        answer: "**Architecture**:\n- **Fan-out on Write (Push)**: For normal users, post is injected into all followers' precomputed Redis feed timelines. Ultra-fast reads O(1).\n- **Fan-out on Read (Pull)**: For celebrities (millions of followers), followers fetch celebrity posts on-demand and merge with feed at read time.\n- **Hybrid Model**: Push for normal users + Pull for celebrities solves the celebrity write explosion problem.",
        tip: "Hybrid fan-out model is the benchmark answer for all news feed questions."
    },

    // Section 8: Reliability & Ops
    {
        id: 47,
        section: "reliability",
        question: "What do you monitor in a distributed system (4 Golden Signals)?",
        answer: "1. **Latency**: Time to service a request (track p50, p95, p99).\n2. **Traffic**: Demand placed on system (QPS, concurrent connections).\n3. **Errors**: Rate of failed requests (HTTP 5xx, exception counts).\n4. **Saturation**: How full the subsystem is (CPU, RAM, disk I/O, DB connection pool).\n- *Rule*: Alert on user-visible SLO breaches, not raw CPU spikes.",
        tip: "Google SRE 4 Golden Signals: Latency, Traffic, Errors, Saturation."
    },
    {
        id: 48,
        section: "reliability",
        question: "What are SLI, SLO, and SLA?",
        answer: "- **SLI (Service Level Indicator)**: The actual measured metric (e.g. 99.92% of requests under 200ms).\n- **SLO (Service Level Objective)**: Internal target agreed upon by engineering team (e.g. 99.9% success rate).\n- **SLA (Service Level Agreement)**: Legal contract with customers with financial penalties if breached.\n- **Error Budget**: `100% - SLO` (used to pace feature releases vs reliability work).",
        tip: "SLI is measured, SLO is internal goal, SLA is customer commitment."
    },
    {
        id: 49,
        section: "reliability",
        question: "How do you deploy safely at scale?",
        answer: "1. **Canary Releases**: Route 1% of traffic to new version, monitor error rates, then gradually expand.\n2. **Blue-Green Deployments**: Switch traffic between two identical production environments instantaneously.\n3. **Feature Flags**: Decouple deployment from feature release; killswitch on failure.\n4. **Expand-Contract DB Migrations**: Never rename columns; add new column, dual-write, backfill, cutover, drop old column.",
        tip: "Mention expand-contract database migrations for zero-downtime schema changes."
    },
    {
        id: 50,
        section: "reliability",
        question: "How do you design for failure in distributed architectures?",
        answer: "- Assume every network call, server, and third-party API WILL fail.\n- **Defense Mechanisms**:\n  - Timeouts on all network calls\n  - Bounded retries with exponential backoff & jitter\n  - Circuit breakers to contain blast radius\n  - Fallback degraded modes (e.g. cached recommendations instead of ML engine)\n  - Regular Chaos Engineering tests (Chaos Monkey).",
        tip: "End your interview by naming failure modes for every box in your diagram."
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
