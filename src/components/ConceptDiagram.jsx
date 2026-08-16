import React from 'react';

export default function ConceptDiagram({ conceptKey, className = "" }) {
    if (!conceptKey) return null;

    const normalized = conceptKey.toLowerCase().replace(/[^a-z0-9-]/g, '');

    switch (true) {
        // 1. Scalability / Vertical vs Horizontal
        case normalized.includes('scalab') || normalized.includes('vertical') || normalized.includes('horizontal'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="grid grid-cols-2 gap-3 text-center text-xs">
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-amber-500/20 flex flex-col items-center justify-between shadow-inner">
                            <span className="font-bold text-amber-400 mb-1">Vertical (Scale Up)</span>
                            <div className="w-16 h-16 rounded-xl bg-amber-500/10 border-2 border-amber-500/50 flex flex-col items-center justify-center my-2 shadow-lg shadow-amber-500/10">
                                <span className="text-2xl">🏢</span>
                                <span className="text-[9px] font-mono text-amber-300 font-bold">1 Monster CPU</span>
                            </div>
                            <span className="text-[10px] text-amber-400/80 font-medium">Hits hardware limit & single point of failure ⚠️</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/20 flex flex-col items-center justify-between shadow-inner">
                            <span className="font-bold text-emerald-400 mb-1">Horizontal (Scale Out)</span>
                            <div className="grid grid-cols-2 gap-2 my-2">
                                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-xs shadow-sm">🖥️</div>
                                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-xs shadow-sm">🖥️</div>
                                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-xs shadow-sm">🖥️</div>
                                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-xs shadow-sm">🖥️</div>
                            </div>
                            <span className="text-[10px] text-emerald-400 font-medium">Add N commodity servers smoothly ✨</span>
                        </div>
                    </div>
                </div>
            );

        // 2. Load Balancer
        case normalized.includes('load-balancer') || normalized.includes('balancer') || normalized.includes('round-robin'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="flex items-center justify-between text-xs gap-2">
                        <div className="flex flex-col items-center p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                            <span className="text-lg">👥</span>
                            <span className="font-mono text-[10px] text-slate-400">100k Users</span>
                        </div>
                        <div className="text-emerald-400 font-bold animate-pulse">➔</div>
                        <div className="flex flex-col items-center p-2.5 bg-emerald-950/40 rounded-xl border border-emerald-500/40 shadow-lg shadow-emerald-500/10">
                            <span className="text-lg">⚖️</span>
                            <span className="font-bold text-[11px] text-emerald-300">Load Balancer</span>
                            <span className="text-[9px] text-emerald-400/80 font-mono">Round-Robin / Least Conn</span>
                        </div>
                        <div className="text-emerald-400 font-bold animate-pulse">➔</div>
                        <div className="flex flex-col gap-1.5">
                            <div className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-slate-300 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Server A
                            </div>
                            <div className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-slate-300 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Server B
                            </div>
                            <div className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-slate-300 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Server C
                            </div>
                        </div>
                    </div>
                </div>
            );

        // 3. CAP Theorem
        case normalized.includes('cap') || normalized.includes('partition-tolerance'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="flex flex-col items-center text-center text-xs space-y-2">
                        <span className="font-mono font-bold text-amber-300 bg-amber-950/30 px-3 py-0.5 rounded-full border border-amber-500/30">
                            ⚡ When Network Partition Occurs (P is Non-Negotiable)
                        </span>
                        <div className="grid grid-cols-2 gap-3 w-full pt-1">
                            <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/40 text-indigo-200 shadow-md">
                                <span className="font-bold text-indigo-300 block text-xs">CP (Consistency + Partition)</span>
                                <span className="text-[10px] text-slate-300 block mt-1 font-mono">Banking / Payments / Ledger</span>
                                <span className="text-[10px] text-indigo-400 mt-1 block">Locks writes/reads until replicas sync. Prefers error over stale balance.</span>
                            </div>
                            <div className="p-3 rounded-xl bg-teal-950/30 border border-teal-500/40 text-teal-200 shadow-md">
                                <span className="font-bold text-teal-300 block text-xs">AP (Availability + Partition)</span>
                                <span className="text-[10px] text-slate-300 block mt-1 font-mono">Social Feeds / Likes / DNS</span>
                                <span className="text-[10px] text-teal-400 mt-1 block">Always returns response immediately. Replicas catch up asynchronously.</span>
                            </div>
                        </div>
                    </div>
                </div>
            );

        // 4. Rate Limiting (Token Bucket / Leaky Bucket)
        case normalized.includes('rate-limit') || normalized.includes('token-bucket') || normalized.includes('leaky-bucket') || normalized.includes('throttle'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between bg-slate-900/80 p-2 rounded-xl border border-slate-800 font-mono text-[10px]">
                            <span className="text-slate-400">Token Refill: +10 tokens / sec</span>
                            <span className="text-emerald-400 font-bold">Bucket Capacity: Max 50</span>
                        </div>
                        <div className="flex items-center justify-between gap-2 pt-1">
                            <div className="flex flex-col items-center p-2 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-center flex-1">
                                <span className="text-lg">🪙🪙🪙</span>
                                <span className="font-bold text-indigo-300 text-[10px] mt-1">Tokens Available</span>
                                <span className="text-[9px] text-slate-400">Take 1 token ➔ Allow Request 🟢</span>
                            </div>
                            <span className="text-slate-600 font-bold">VS</span>
                            <div className="flex flex-col items-center p-2 rounded-xl bg-rose-950/30 border border-rose-500/30 text-center flex-1">
                                <span className="text-lg">🚫</span>
                                <span className="font-bold text-rose-300 text-[10px] mt-1">Bucket Empty</span>
                                <span className="text-[9px] text-rose-400">HTTP 429 Too Many Requests 🔴</span>
                            </div>
                        </div>
                    </div>
                </div>
            );

        // 5. Caching Patterns (Cache Aside / Redis)
        case normalized.includes('cach') || normalized.includes('redis') || normalized.includes('memcached'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="flex items-center justify-between text-xs gap-1.5">
                        <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-center font-bold">
                            <span className="text-base">📱</span>
                            <span className="block text-[10px] text-slate-300 mt-0.5">App Server</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[9px] text-emerald-400 font-bold">1. Check RAM (~2ms)</span>
                            <span className="text-emerald-400">➔</span>
                        </div>
                        <div className="p-2.5 bg-rose-950/30 rounded-xl border border-rose-500/40 text-center font-bold text-rose-300 shadow-md">
                            <span className="text-base">⚡</span>
                            <span className="block text-[10px]">Redis (RAM)</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[9px] text-amber-400 font-bold">2. Miss? Hit Disk (~50ms)</span>
                            <span className="text-amber-400">➔</span>
                        </div>
                        <div className="p-2.5 bg-indigo-950/30 rounded-xl border border-indigo-500/40 text-center font-bold text-indigo-300 shadow-md">
                            <span className="text-base">🗄️</span>
                            <span className="block text-[10px]">SQL / Disk</span>
                        </div>
                    </div>
                    <p className="text-[10px] text-center text-slate-400 mt-2 font-mono">Cache-Aside: Reads check cache first; writes invalidate or update cache asynchronously.</p>
                </div>
            );

        // 6. Database Replication (Leader-Follower / Master-Slave)
        case normalized.includes('replicat') || normalized.includes('master-slave') || normalized.includes('leader-follower'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between gap-3">
                            <div className="p-3 bg-amber-950/30 rounded-xl border border-amber-500/40 text-center flex-1">
                                <span className="text-lg">👑</span>
                                <span className="font-bold text-amber-300 block text-[11px]">Leader (Primary DB)</span>
                                <span className="text-[9px] text-amber-400 font-mono mt-0.5">Handles All WRITES</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-[9px] text-slate-400 font-mono">WAL Sync / Async</span>
                                <span className="text-emerald-400 font-bold">➔ ➔</span>
                            </div>
                            <div className="flex flex-col gap-1.5 flex-1">
                                <div className="p-2 bg-slate-900 rounded-xl border border-slate-800 text-center text-[10px] text-emerald-300">
                                    📖 Follower 1 (Read Replica)
                                </div>
                                <div className="p-2 bg-slate-900 rounded-xl border border-slate-800 text-center text-[10px] text-emerald-300">
                                    📖 Follower 2 (Read Replica)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        // 7. Database Sharding
        case normalized.includes('shard'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between bg-slate-900 p-2 rounded-xl border border-slate-800 font-mono text-[10px]">
                            <span className="text-slate-400">Incoming Write: User ID #4812</span>
                            <span className="text-emerald-400 font-bold">Hash(ID) % 3 ➔ Shard 2</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                                <span className="block font-bold text-teal-400 text-[10px]">Shard 1</span>
                                <span className="text-[9px] text-slate-400">Users 1 - 3,333</span>
                            </div>
                            <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/40 shadow-sm">
                                <span className="block font-bold text-emerald-300 text-[10px]">Shard 2 ✨</span>
                                <span className="text-[9px] text-emerald-400 font-bold">Targeted Node</span>
                            </div>
                            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                                <span className="block font-bold text-teal-400 text-[10px]">Shard 3</span>
                                <span className="text-[9px] text-slate-400">Users 6,667 - 10k</span>
                            </div>
                        </div>
                    </div>
                </div>
            );

        // 8. Consistent Hashing
        case normalized.includes('consistent-hash') || normalized.includes('hashing'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="flex items-center justify-center space-x-4 text-xs">
                        <div className="relative w-24 h-24 rounded-full border-2 border-dashed border-emerald-500/50 flex items-center justify-center bg-emerald-950/10">
                            <span className="text-[9px] font-mono text-emerald-300 font-bold">Hash Ring</span>
                            <span className="absolute -top-2.5 px-1.5 py-0.5 rounded bg-slate-900 border border-emerald-400 text-[8px] text-emerald-300 font-bold">Node A</span>
                            <span className="absolute -right-2 px-1.5 py-0.5 rounded bg-slate-900 border border-teal-400 text-[8px] text-teal-300 font-bold">Node B</span>
                            <span className="absolute -bottom-2.5 px-1.5 py-0.5 rounded bg-slate-900 border border-indigo-400 text-[8px] text-indigo-300 font-bold">Node C</span>
                        </div>
                        <div className="space-y-1 text-slate-300 max-w-[200px]">
                            <p className="font-bold text-emerald-300 text-xs">Clockwise Key Routing 🔄</p>
                            <p className="text-[10px] text-slate-400 leading-relaxed">
                                Adding or removing a node only migrates <strong>1/N</strong> keys to its immediate neighbor instead of rehashing the entire database!
                            </p>
                        </div>
                    </div>
                </div>
            );

        // 9. Message Queue / Async Worker
        case normalized.includes('queue') || normalized.includes('kafka') || normalized.includes('rabbitmq') || normalized.includes('message'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="flex items-center justify-between text-xs gap-1.5">
                        <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-center font-bold">
                            <span className="text-base">📨</span>
                            <span className="block text-[10px] text-slate-300 mt-0.5">Producers</span>
                        </div>
                        <span className="text-emerald-400 font-bold">➔</span>
                        <div className="p-2.5 bg-amber-950/30 rounded-xl border border-amber-500/40 text-center flex-1">
                            <span className="font-bold text-amber-300 block text-[10px]">📥 Message Queue (Kafka/SQS)</span>
                            <div className="flex gap-1.5 justify-center mt-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                            </div>
                        </div>
                        <span className="text-emerald-400 font-bold">➔</span>
                        <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-center font-bold">
                            <span className="text-base">⚙️</span>
                            <span className="block text-[10px] text-slate-300 mt-0.5">Workers (Steady)</span>
                        </div>
                    </div>
                </div>
            );

        // 10. Circuit Breaker
        case normalized.includes('circuit') || normalized.includes('breaker'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="flex items-center justify-between text-[10px] text-center gap-1.5 font-mono">
                        <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 flex-1">
                            <span className="font-bold block text-xs">CLOSED</span>
                            <span className="text-[9px] text-emerald-400">Normal Traffic Pass</span>
                        </div>
                        <span className="text-slate-500 font-bold">➔ Errors ➔</span>
                        <div className="p-2 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 flex-1">
                            <span className="font-bold block text-xs">OPEN</span>
                            <span className="text-[9px] text-rose-400">Fail Fast (No calls)</span>
                        </div>
                        <span className="text-slate-500 font-bold">➔ Cooldown ➔</span>
                        <div className="p-2 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-300 flex-1">
                            <span className="font-bold block text-xs">HALF-OPEN</span>
                            <span className="text-[9px] text-amber-400">Trial Canary Probe</span>
                        </div>
                    </div>
                </div>
            );

        // 11. Bloom Filter
        case normalized.includes('bloom') || normalized.includes('filter'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="space-y-2 text-xs">
                        <div className="flex justify-center gap-1.5 font-mono">
                            {['0','1','0','1','1','0','1','0'].map((bit, i) => (
                                <span key={i} className={`w-6 h-6 flex items-center justify-center rounded-lg border text-xs ${bit === '1' ? 'bg-emerald-500/25 border-emerald-400 text-emerald-300 font-bold shadow-sm' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                                    {bit}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between text-[10px] pt-1">
                            <span className="text-rose-400">If bit is 0: <strong>100% DOES NOT exist</strong> (Skip disk!)</span>
                            <span className="text-emerald-400">If bit is 1: <strong>Probably exists</strong> (Check DB)</span>
                        </div>
                    </div>
                </div>
            );

        // 12. Idempotency
        case normalized.includes('idempot') || normalized.includes('uuid'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between bg-slate-900 p-2 rounded-xl border border-slate-800 font-mono text-[10px]">
                            <span className="text-slate-400">POST /charge (Key: idempotency_key_9921)</span>
                            <span className="text-amber-400 font-bold">Redis SETNX Check</span>
                        </div>
                        <div className="flex justify-between text-[10px] gap-2">
                            <div className="p-2 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 flex-1">
                                <strong>1st Click:</strong> Key doesn't exist ➔ Process $50 charge ➔ Cache receipt
                            </div>
                            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex-1">
                                <strong>2nd Click:</strong> Key exists ➔ Return cached receipt (No duplicate charge!)
                            </div>
                        </div>
                    </div>
                </div>
            );

        // 13. CDN / Edge Caching
        case normalized.includes('cdn') || normalized.includes('edge'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="flex items-center justify-between text-xs gap-2">
                        <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-center">
                            <span className="text-lg">🗽</span>
                            <span className="block text-[10px] text-slate-300">User (NYC)</span>
                        </div>
                        <div className="text-emerald-400 font-bold animate-pulse">➔ 10ms ➔</div>
                        <div className="p-2.5 bg-cyan-950/40 rounded-xl border border-cyan-500/40 text-center shadow-md">
                            <span className="text-lg">⚡</span>
                            <span className="block text-[10px] text-cyan-300 font-bold">NYC Edge POP</span>
                            <span className="text-[8px] text-cyan-400 font-mono">Cached Assets</span>
                        </div>
                        <div className="text-slate-500 text-[10px]">➔ Miss? (150ms) ➔</div>
                        <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-center">
                            <span className="text-lg">🏢</span>
                            <span className="block text-[10px] text-slate-400">Origin (Frankfurt)</span>
                        </div>
                    </div>
                </div>
            );

        // 14. Two Pointers (DSA Pattern)
        case normalized.includes('two-pointer') || normalized.includes('twopointer'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="space-y-2 text-xs">
                        <div className="flex justify-center gap-1.5 font-mono">
                            {['1', '3', '7', '11', '15'].map((val, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <span className={`w-8 h-8 flex items-center justify-center rounded-lg border text-xs font-bold ${
                                        idx === 0 ? 'bg-emerald-500/25 border-emerald-400 text-emerald-300 shadow-md' :
                                        idx === 4 ? 'bg-indigo-500/25 border-indigo-400 text-indigo-300 shadow-md' :
                                        'bg-slate-900 border-slate-800 text-slate-400'
                                    }`}>
                                        {val}
                                    </span>
                                    <span className="text-[9px] font-bold mt-1">
                                        {idx === 0 ? 'L ➔' : idx === 4 ? '⬅ R' : ''}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] text-center text-slate-400 font-mono">
                            If Sum &lt; Target: <span className="text-emerald-400 font-bold">L++</span> | If Sum &gt; Target: <span className="text-indigo-400 font-bold">R--</span>
                        </p>
                    </div>
                </div>
            );

        // 15. Sliding Window (DSA Pattern)
        case normalized.includes('sliding-window') || normalized.includes('slidingwindow'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="space-y-2 text-xs">
                        <div className="flex justify-center gap-1.5 font-mono">
                            {['2', '1', '5', '1', '3', '2'].map((val, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <span className={`w-8 h-8 flex items-center justify-center rounded-lg border text-xs font-bold ${
                                        idx >= 1 && idx <= 3 ? 'bg-cyan-500/25 border-cyan-400 text-cyan-300 shadow-md' :
                                        'bg-slate-900 border-slate-800 text-slate-500 opacity-60'
                                    }`}>
                                        {val}
                                    </span>
                                    <span className="text-[9px] text-cyan-400 font-bold mt-1">
                                        {idx === 1 ? 'Start' : idx === 3 ? 'End (k=3)' : ''}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] text-center text-slate-400 font-mono">
                            Slide Window: <span className="text-cyan-400 font-bold">+ New Item</span> right, <span className="text-rose-400 font-bold">- Old Item</span> left in O(1)
                        </p>
                    </div>
                </div>
            );

        // 16. Fast & Slow Pointer (Floyd's Tortoise & Hare)
        case normalized.includes('fast-slow') || normalized.includes('floyd') || normalized.includes('cycle'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="flex items-center justify-between text-xs gap-3">
                        <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center flex-1">
                            <span className="text-lg">🐢 Slow</span>
                            <span className="block font-mono text-[10px] text-emerald-300 font-bold mt-1">1 Step / tick</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-center flex-1">
                            <span className="text-lg">🐇 Fast</span>
                            <span className="block font-mono text-[10px] text-amber-300 font-bold mt-1">2 Steps / tick</span>
                        </div>
                    </div>
                    <p className="text-[10px] text-center text-slate-400 font-mono mt-2">
                        If a cycle exists, Fast will inevitably catch Slow from behind inside the loop.
                    </p>
                </div>
            );

        // 17. Binary Search
        case normalized.includes('binary-search') || normalized.includes('binarysearch'):
            return (
                <div className={`p-4 rounded-xl bg-slate-950/95 dark:bg-slate-950/90 border border-slate-800/90 text-slate-200 shadow-lg ${className}`}>
                    <div className="space-y-2 text-xs">
                        <div className="flex justify-center gap-1.5 font-mono">
                            {['2', '4', '6', '8', '10', '12', '14'].map((val, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <span className={`w-7 h-7 flex items-center justify-center rounded-lg border text-xs font-bold ${
                                        idx === 3 ? 'bg-emerald-500/30 border-emerald-400 text-emerald-300 shadow-md' :
                                        idx < 3 ? 'bg-slate-900/40 border-slate-800/40 text-slate-600 line-through' :
                                        'bg-indigo-500/20 border-indigo-400 text-indigo-200'
                                    }`}>
                                        {val}
                                    </span>
                                    <span className="text-[8px] font-bold mt-1 text-slate-400">
                                        {idx === 0 ? 'L' : idx === 3 ? 'MID' : idx === 6 ? 'R' : ''}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] text-center text-slate-400 font-mono">
                            Target = 12 &gt; Mid(8) ➔ Discard left half! <span className="text-emerald-400 font-bold">L = mid + 1</span> in O(log N)
                        </p>
                    </div>
                </div>
            );

        // Default fallback (clean, non-intrusive)
        default:
            return null;
    }
}
