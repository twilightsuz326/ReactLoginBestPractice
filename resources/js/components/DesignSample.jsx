import { useState } from "react";

// ── tiny helpers ──────────────────────────────────────────────
const Tag = ({ children, color = "indigo" }) => {
    const map = {
        indigo: "bg-indigo-100 text-indigo-700",
        emerald: "bg-emerald-100 text-emerald-700",
        rose: "bg-rose-100 text-rose-700",
        amber: "bg-amber-100 text-amber-700",
        sky: "bg-sky-100 text-sky-700",
    };
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide ${map[color]}`}>
            {children}
        </span>
    );
};

const Badge = ({ children, variant = "default" }) => {
    const map = {
        default: "bg-gray-100 text-gray-700 border border-gray-200",
        success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
        warning: "bg-amber-50 text-amber-700 border border-amber-200",
        danger: "bg-rose-50 text-rose-700 border border-rose-200",
        info: "bg-sky-50 text-sky-700 border border-sky-200",
    };
    return (
        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium ${map[variant]}`}>
            {variant === "success" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />}
            {variant === "warning" && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />}
            {variant === "danger" && <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block" />}
            {variant === "info" && <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block" />}
            {children}
        </span>
    );
};

const Section = ({ id, title, children }) => (
    <section id={id} className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 rounded-full bg-indigo-500" />
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">{title}</h2>
        </div>
        {children}
    </section>
);

const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-6 ${className}`}>
        {children}
    </div>
);

// ── nav ───────────────────────────────────────────────────────
const navItems = [
    { label: "タイポグラフィ", href: "#typography" },
    { label: "ボタン", href: "#buttons" },
    { label: "フォーム", href: "#forms" },
    { label: "テーブル", href: "#tables" },
    { label: "カード", href: "#cards" },
    { label: "バッジ", href: "#badges" },
    { label: "アラート", href: "#alerts" },
];

// ── main ──────────────────────────────────────────────────────
export default function DesignSample() {
    const [toggle, setToggle] = useState(false);
    const [radio, setRadio] = useState("option1");
    const [check, setCheck] = useState({ a: true, b: false, c: false });
    const [range, setRange] = useState(60);
    const [menuOpen, setMenuOpen] = useState(false);

    const users = [
        { name: "山田 花子", email: "hanako@example.com", role: "管理者", status: "active", joined: "2023-04-01" },
        { name: "鈴木 一郎", email: "ichiro@example.com", role: "編集者", status: "active", joined: "2023-07-15" },
        { name: "田中 美咲", email: "misaki@example.com", role: "閲覧者", status: "inactive", joined: "2024-01-22" },
        { name: "佐藤 健", email: "ken@example.com", role: "編集者", status: "active", joined: "2024-03-10" },
        { name: "伊藤 さくら", email: "sakura@example.com", role: "閲覧者", status: "pending", joined: "2024-06-05" },
    ];

    const statusMap = {
        active: <Badge variant="success">アクティブ</Badge>,
        inactive: <Badge variant="danger">無効</Badge>,
        pending: <Badge variant="warning">保留中</Badge>,
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* ─── Top nav ─── */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
                    <span className="font-bold text-gray-900 text-lg tracking-tight">UI Kit</span>

                    {/* desktop links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((n) => (
                            <a key={n.href} href={n.href}
                                className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-indigo-50 rounded-lg transition-colors">
                                {n.label}
                            </a>
                        ))}
                    </div>

                    {/* hamburger */}
                    <button onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                        {menuOpen
                            ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        }
                    </button>
                </div>

                {/* mobile menu */}
                {menuOpen && (
                    <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
                        {navItems.map((n) => (
                            <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}
                                className="px-3 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                                {n.label}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

            {/* ─── Hero ─── */}
            <div className="bg-linear-to-br from-indigo-600 via-indigo-500 to-violet-600 text-white">
                <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
                    <Tag color="indigo">
                        <span className="rounded-full bg-white/70 px-1.5 py-0.5 text-slate-900">Design System</span>
                    </Tag>
                    <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tighter leading-none">
                        UI コンポーネント<br />
                        <span className="text-indigo-200">サンプル集</span>
                    </h1>
                    <p className="mt-4 text-indigo-100 text-base md:text-lg max-w-xl">
                        Tailwind CSS + React で構築した、モバイルフレンドリーなデザインパターンのショーケースです。
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href="#forms"
                            className="px-5 py-2.5 bg-white text-indigo-600 font-bold rounded-xl text-sm shadow hover:shadow-md transition-all hover:-translate-y-0.5">
                            フォームを見る
                        </a>
                        <a href="#tables"
                            className="px-5 py-2.5 bg-white/20 text-white font-bold rounded-xl text-sm border border-white/30 hover:bg-white/30 transition-all">
                            テーブルを見る
                        </a>
                    </div>
                </div>
            </div>

            {/* ─── Content ─── */}
            <main className="max-w-5xl mx-auto px-4 py-12">

                {/* ── Typography ── */}
                <Section id="typography" title="タイポグラフィ">
                    <Card>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-gray-400 mb-1">h1 — Display</p>
                                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight">大見出し H1</h1>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-1">h2</p>
                                <h2 className="text-3xl font-bold text-gray-800 tracking-tight">中見出し H2</h2>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-1">h3</p>
                                <h3 className="text-2xl font-semibold text-gray-700">小見出し H3</h3>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-1">h4</p>
                                <h4 className="text-xl font-semibold text-gray-700">サブ見出し H4</h4>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-1">h5</p>
                                <h5 className="text-base font-semibold text-gray-600 uppercase tracking-widest">Label H5</h5>
                            </div>
                            <hr className="border-gray-100" />
                            <div>
                                <p className="text-xs text-gray-400 mb-1">Body large</p>
                                <p className="text-lg text-gray-700 leading-relaxed">本文テキスト大。読みやすいライン間隔と適切なフォントサイズで、長い文章も快適に読めます。</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-1">Body</p>
                                <p className="text-base text-gray-600 leading-relaxed">通常の本文テキスト。グレースケールの濃淡を使い分けることで、情報の重みを視覚的に伝えます。</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-1">Caption</p>
                                <p className="text-sm text-gray-400">補足テキスト・キャプション。補助的な情報やラベルに使用します。</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-1">Mono</p>
                                <code className="font-mono text-sm bg-gray-100 px-2 py-1 rounded text-indigo-700">const value = "Hello, world!";</code>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-2">リスト</p>
                                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                                    <li>リストアイテム その一</li>
                                    <li>リストアイテム その二</li>
                                    <li>リストアイテム その三</li>
                                </ul>
                            </div>
                            <blockquote className="border-l-4 border-indigo-400 pl-4 py-1 text-gray-600 italic">
                                "デザインとは、見た目だけでなく、どう機能するかについてのことだ。" — Steve Jobs
                            </blockquote>
                        </div>
                    </Card>
                </Section>

                {/* ── Buttons ── */}
                <Section id="buttons" title="ボタン">
                    <Card>
                        <div className="space-y-6">
                            <div>
                                <p className="text-xs text-gray-400 mb-3">Variants</p>
                                <div className="flex flex-wrap gap-3">
                                    <button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-slate-200 hover:shadow-md">
                                        Primary
                                    </button>
                                    <button className="px-5 py-2.5 bg-white border border-gray-200 hover:border-indigo-400 text-gray-700 hover:text-indigo-600 font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5">
                                        Secondary
                                    </button>
                                    <button className="px-5 py-2.5 bg-gray-900 hover:bg-black text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5">
                                        Dark
                                    </button>
                                    <button className="px-5 py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5">
                                        Danger
                                    </button>
                                    <button className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5">
                                        Success
                                    </button>
                                    <button className="px-5 py-2.5 text-indigo-600 hover:bg-indigo-50 font-semibold rounded-xl text-sm transition-all">
                                        Ghost
                                    </button>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 mb-3">Sizes</p>
                                <div className="flex flex-wrap items-center gap-3">
                                    <button className="px-3 py-1.5 bg-slate-900 text-white font-semibold rounded-lg text-xs">XS</button>
                                    <button className="px-4 py-2 bg-slate-900 text-white font-semibold rounded-lg text-sm">SM</button>
                                    <button className="px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-xl text-base">MD</button>
                                    <button className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl text-lg">LG</button>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 mb-3">With Icon</p>
                                <div className="flex flex-wrap gap-3">
                                    <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-xl text-sm hover:bg-slate-800 transition-all">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                        新規作成
                                    </button>
                                    <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl text-sm hover:border-indigo-300 transition-all">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                        ダウンロード
                                    </button>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 mb-3">Disabled / Loading</p>
                                <div className="flex flex-wrap gap-3">
                                    <button disabled className="px-5 py-2.5 bg-indigo-200 text-indigo-400 font-semibold rounded-xl text-sm cursor-not-allowed">
                                        Disabled
                                    </button>
                                    <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-xl text-sm opacity-80 cursor-wait">
                                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                        </svg>
                                        処理中…
                                    </button>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 mb-3">Full Width</p>
                                <button className="w-full px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all">
                                    フルワイドボタン
                                </button>
                            </div>
                        </div>
                    </Card>
                </Section>

                {/* ── Forms ── */}
                <Section id="forms" title="フォーム">
                    <Card>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">氏名 <span className="text-rose-500">*</span></label>
                                    <input type="text" placeholder="山田 花子" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">メールアドレス <span className="text-rose-500">*</span></label>
                                    <input type="email" placeholder="hanako@example.com" className="w-full px-4 py-2.5 rounded-xl border border-rose-300 ring-1 ring-rose-300 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all" />
                                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                        有効なメールアドレスを入力してください
                                    </p>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">カテゴリー</label>
                                <div className="relative">
                                    <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none transition-all">
                                        <option>選択してください</option>
                                        <option>一般お問い合わせ</option>
                                        <option>技術的なサポート</option>
                                        <option>請求・支払い</option>
                                        <option>その他</option>
                                    </select>
                                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">本文 <span className="text-rose-500">*</span></label>
                                <textarea rows={4} placeholder="お問い合わせ内容を入力してください..." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none transition-all" />
                                <p className="mt-1 text-xs text-gray-400 text-right">0 / 500文字</p>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">添付ファイル</label>
                                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-indigo-300 hover:bg-indigo-50/30 transition-all cursor-pointer">
                                    <svg className="w-8 h-8 mx-auto text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                    <p className="text-sm text-gray-500">ファイルをドラッグ＆ドロップ</p>
                                    <p className="text-xs text-gray-400 mt-1">PNG, JPG, PDF (最大 10MB)</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-gray-700 mb-3">通知設定</p>
                                <div className="space-y-2.5">
                                    {[
                                        { key: "a", label: "返信があったときにメールで通知する" },
                                        { key: "b", label: "週次ニュースレターを受け取る" },
                                        { key: "c", label: "システムメンテナンス通知を受け取る" },
                                    ].map(({ key, label }) => (
                                        <label key={key} className="flex items-center gap-3 cursor-pointer group">
                                            <div
                                                onClick={() => setCheck((c) => ({ ...c, [key]: !c[key] }))}
                                                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all shrink-0
                          ${check[key] ? "bg-indigo-600 border-indigo-600" : "border-gray-300 group-hover:border-indigo-400"}`}>
                                                {check[key] && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                            </div>
                                            <span className="text-sm text-gray-700">{label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-gray-700 mb-3">優先度</p>
                                <div className="flex flex-wrap gap-3">
                                    {["option1", "option2", "option3"].map((opt, i) => (
                                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                            <div
                                                onClick={() => setRadio(opt)}
                                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all shrink-0
                          ${radio === opt ? "border-indigo-600" : "border-gray-300 hover:border-indigo-400"}`}>
                                                {radio === opt && <div className="w-2 h-2 rounded-full bg-indigo-600" />}
                                            </div>
                                            <span className="text-sm text-gray-700">{["低", "中", "高"][i]}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <p className="text-sm font-semibold text-gray-700">緊急度</p>
                                    <span className="text-sm text-indigo-600 font-bold">{range}%</span>
                                </div>
                                <input type="range" min={0} max={100} value={range} onChange={(e) => setRange(+e.target.value)}
                                    className="w-full accent-indigo-600" />
                                <div className="flex justify-between text-xs text-gray-400 mt-1">
                                    <span>低</span><span>高</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div>
                                    <p className="text-sm font-semibold text-gray-700">公開設定</p>
                                    <p className="text-xs text-gray-400 mt-0.5">オンにすると全員に公開されます</p>
                                </div>
                                <button type="button" onClick={() => setToggle(!toggle)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none shrink-0
                    ${toggle ? "bg-indigo-600" : "bg-gray-200"}`}>
                                    <span className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 ${toggle ? "translate-x-6" : "translate-x-1"}`} />
                                </button>
                            </div>

                            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                                <button type="reset" className="flex-1 px-5 py-3 border border-gray-200 text-gray-600 font-semibold rounded-xl text-sm hover:bg-gray-50 transition-all">
                                    キャンセル
                                </button>
                                <button type="submit" className="flex-1 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-slate-200">
                                    送信する
                                </button>
                            </div>
                        </form>
                    </Card>
                </Section>

                {/* ── Tables ── */}
                <Section id="tables" title="テーブル">
                    <div className="space-y-6">
                        {/* Responsive scrollable table */}
                        <Card className="p-0! overflow-hidden">
                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                                <div>
                                    <h3 className="text-base font-bold text-gray-900">ユーザー一覧</h3>
                                    <p className="text-xs text-gray-400 mt-0.5">{users.length}件のレコード</p>
                                </div>
                                <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-all">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                    追加
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-150">
                                    <thead>
                                        <tr className="bg-gray-50 text-left">
                                            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">名前</th>
                                            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">ロール</th>
                                            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">ステータス</th>
                                            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">登録日</th>
                                            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" />
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {users.map((u) => (
                                            <tr key={u.email} className="hover:bg-indigo-50/40 transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                                                            {u.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-semibold text-gray-900">{u.name}</p>
                                                            <p className="text-xs text-gray-400">{u.email}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm text-gray-600">{u.role}</span>
                                                </td>
                                                <td className="px-6 py-4">{statusMap[u.status]}</td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{u.joined}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-100 rounded-lg transition-colors">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                                        </button>
                                                        <button className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-100 rounded-lg transition-colors">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex items-center justify-between px-6 py-3 border-t border-gray-100">
                                <p className="text-xs text-gray-400">1–5 / 5件</p>
                                <div className="flex gap-1">
                                    <button className="px-3 py-1.5 text-xs text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50">前へ</button>
                                    <button className="px-3 py-1.5 text-xs bg-slate-900 text-white rounded-lg">1</button>
                                    <button className="px-3 py-1.5 text-xs text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50">次へ</button>
                                </div>
                            </div>
                        </Card>

                        {/* Simple pricing table */}
                        <Card className="p-0! overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100">
                                <h3 className="text-base font-bold text-gray-900">料金比較</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-120">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">機能</th>
                                            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Free</th>
                                            <th className="px-6 py-3 text-center text-xs font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50">Pro</th>
                                            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Enterprise</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {[
                                            ["プロジェクト数", "3", "無制限", "無制限"],
                                            ["ストレージ", "1 GB", "50 GB", "1 TB"],
                                            ["メンバー", "1名", "最大10名", "無制限"],
                                            ["APIアクセス", "✗", "✓", "✓"],
                                            ["優先サポート", "✗", "✓", "✓"],
                                        ].map(([feature, free, pro, ent]) => (
                                            <tr key={feature} className="hover:bg-gray-50/50">
                                                <td className="px-6 py-3 text-sm text-gray-700 font-medium">{feature}</td>
                                                <td className="px-6 py-3 text-sm text-center text-gray-500">{free}</td>
                                                <td className="px-6 py-3 text-sm text-center font-semibold text-indigo-600 bg-indigo-50/50">{pro}</td>
                                                <td className="px-6 py-3 text-sm text-center text-gray-500">{ent}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </div>
                </Section>

                {/* ── Cards ── */}
                <Section id="cards" title="カード">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* stat card */}
                        {[
                            { label: "総ユーザー数", value: "12,847", delta: "+8.2%", color: "indigo", icon: "👤" },
                            { label: "月次収益", value: "¥2,340,000", delta: "+12.5%", color: "emerald", icon: "💰" },
                            { label: "解約率", value: "2.4%", delta: "-0.3%", color: "rose", icon: "📉" },
                        ].map((s) => (
                            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-sm text-gray-500 font-medium">{s.label}</p>
                                    <span className="text-2xl">{s.icon}</span>
                                </div>
                                <p className="text-2xl font-black text-gray-900">{s.value}</p>
                                <div className="mt-2 flex items-center gap-1.5">
                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.color === "rose" ? "bg-rose-100 text-rose-600" : "bg-emerald-100 text-emerald-600"}`}>
                                        {s.delta}
                                    </span>
                                    <span className="text-xs text-gray-400">先月比</span>
                                </div>
                            </div>
                        ))}

                        {/* article card */}
                        <div className="sm:col-span-2 lg:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                            <div className="h-36 bg-linear-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-5xl">🎨</div>
                            <div className="p-5">
                                <div className="flex gap-2 mb-2">
                                    <Tag color="indigo">デザイン</Tag>
                                    <Tag color="emerald">チュートリアル</Tag>
                                </div>
                                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">Tailwind CSS でつくる美しいUIのコツ</h3>
                                <p className="text-sm text-gray-500 line-clamp-2">実践的なデザインパターンを使って、プロダクション品質のUIを効率よく構築する方法を紹介します。</p>
                                <button className="mt-4 text-sm text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
                                    続きを読む →
                                </button>
                            </div>
                        </div>

                        {/* profile card */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-linear-to-br from-pink-400 to-indigo-500 flex items-center justify-center text-white text-2xl font-black mx-auto mb-3">花</div>
                            <h3 className="font-bold text-gray-900">山田 花子</h3>
                            <p className="text-sm text-gray-400 mt-0.5">プロダクトデザイナー</p>
                            <div className="mt-4 flex justify-center gap-4 text-center">
                                <div><p className="text-base font-black text-gray-900">128</p><p className="text-xs text-gray-400">投稿</p></div>
                                <div className="w-px bg-gray-100" />
                                <div><p className="text-base font-black text-gray-900">4.2k</p><p className="text-xs text-gray-400">フォロワー</p></div>
                                <div className="w-px bg-gray-100" />
                                <div><p className="text-base font-black text-gray-900">342</p><p className="text-xs text-gray-400">いいね</p></div>
                            </div>
                            <button className="mt-4 w-full py-2 border border-indigo-200 text-indigo-600 font-semibold text-sm rounded-xl hover:bg-indigo-50 transition-colors">
                                フォローする
                            </button>
                        </div>
                    </div>
                </Section>

                {/* ── Badges ── */}
                <Section id="badges" title="バッジ・タグ">
                    <Card>
                        <div className="space-y-5">
                            <div>
                                <p className="text-xs text-gray-400 mb-3">ステータスバッジ</p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="success">アクティブ</Badge>
                                    <Badge variant="warning">保留中</Badge>
                                    <Badge variant="danger">エラー</Badge>
                                    <Badge variant="info">情報</Badge>
                                    <Badge variant="default">デフォルト</Badge>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-3">カラータグ</p>
                                <div className="flex flex-wrap gap-2">
                                    {["indigo", "emerald", "rose", "amber", "sky"].map((c) => (
                                        <Tag key={c} color={c}>{c}</Tag>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-3">数値バッジ付きアイコン</p>
                                <div className="flex gap-4">
                                    {[
                                        { icon: "🔔", count: 3 },
                                        { icon: "✉️", count: 12 },
                                        { icon: "🛒", count: 1 },
                                    ].map(({ icon, count }) => (
                                        <div key={icon} className="relative inline-flex">
                                            <span className="text-2xl">{icon}</span>
                                            <span className="absolute -top-1.5 -right-1.5 min-w-4.5 h-4.5 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                                                {count}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>
                </Section>

                {/* ── Alerts ── */}
                <Section id="alerts" title="アラート">
                    <div className="space-y-3">
                        {[
                            {
                                type: "success", bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", icon: "✓",
                                iconBg: "bg-emerald-500", title: "保存しました", body: "変更が正常に保存されました。"
                            },
                            {
                                type: "warning", bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", icon: "!",
                                iconBg: "bg-amber-500", title: "ご注意ください", body: "この操作は元に戻せません。続行する前に確認してください。"
                            },
                            {
                                type: "danger", bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-700", icon: "✕",
                                iconBg: "bg-rose-500", title: "エラーが発生しました", body: "サーバーに接続できませんでした。しばらくしてからお試しください。"
                            },
                            {
                                type: "info", bg: "bg-sky-50", border: "border-sky-200", text: "text-sky-700", icon: "i",
                                iconBg: "bg-sky-500", title: "お知らせ", body: "新しいバージョンが利用可能です。アップデートすることをお勧めします。"
                            },
                        ].map((a) => (
                            <div key={a.type} className={`flex gap-3 p-4 rounded-xl border ${a.bg} ${a.border}`}>
                                <div className={`w-6 h-6 rounded-full ${a.iconBg} text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5`}>
                                    {a.icon}
                                </div>
                                <div className="flex-1">
                                    <p className={`text-sm font-bold ${a.text}`}>{a.title}</p>
                                    <p className={`text-sm ${a.text} opacity-80 mt-0.5`}>{a.body}</p>
                                </div>
                                <button className={`${a.text} opacity-60 hover:opacity-100 shrink-0 self-start`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* ── Footer ── */}
                <footer className="mt-8 pt-8 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-400">UI Kit — React + Tailwind CSS サンプルページ</p>
                </footer>
            </main>
        </div>
    );
}
