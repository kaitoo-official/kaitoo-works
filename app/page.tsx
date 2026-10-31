import Image from "next/image";
import { SITE, hero, pains, capabilities, reasons, services, works, flow, faqs, type Work } from "@/lib/content";
import StickyCta from "./StickyCta";

// フォームURLが未設定の間は、ページ下部の問い合わせセクションへ移動させる
const contactHref = SITE.contactUrl || "#contact";
const contactExternal = SITE.contactUrl !== "";

function ContactButton({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      href={contactHref}
      {...(contactExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 ${className}`}
    >
      {children}
    </a>
  );
}

// 困りごとカードの細線アイコン（絵文字は使わない）
function Icon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    copy: (
      <>
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </>
    ),
    table: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18M3 15h18M9 4v16" />
      </>
    ),
    spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />,
    code: <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

// ファーストビュー右側：「シート → 自動化 → 結果」の小さな図（画像素材なしで描く）
function AutomationDiagram() {
  const steps = [
    { label: "INPUT", title: "スプレッドシート・CSV", rows: ["受注データ 12件", "フォーム回答 5件", "請求メモ 3件"] },
    { label: "PROCESS", title: "GAS / Python / AI", rows: ["転記・整形", "集計・分類", "要約・下書き"] },
    { label: "OUTPUT", title: "そのまま使える形に", rows: ["月次の集計表", "担当ごとの一覧", "メールの下書き"] },
  ];
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute -right-6 -top-24 hidden w-60 rounded-xl bg-ink p-4 pb-10 font-mono text-[10px] leading-5 text-white/50 shadow-sm lg:block">
        <p><span className="text-[#7aa2ff]">function</span> collectOrders() {"{"}</p>
        <p className="pl-3">const rows = sheet.getValues();</p>
        <p className="pl-3">rows.filter(isNew).forEach(copy);</p>
        <p className="pl-3">createDraft(summary(rows));</p>
        <p>{"}"}</p>
      </div>
      <ol className="relative z-10" aria-label="自動化の流れの例">
        {steps.map((s, i) => (
          <li key={s.label} className="relative">
            <div className={`rounded-2xl border bg-white p-4 shadow-sm ${i === 1 ? "border-accent/40" : "border-ink/10"}`}>
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">{s.label}</p>
                <p className="text-sm font-bold">{s.title}</p>
              </div>
              <ul className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-muted">
                {s.rows.map((r) => (
                  <li key={r} className="rounded-md bg-ink/[.04] px-2 py-1.5 text-center">{r}</li>
                ))}
              </ul>
            </div>
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="mx-auto mt-3 block h-3 w-px bg-accent/40" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function SectionTitle({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="mb-8 md:mb-12">
      <p className="text-xs font-semibold tracking-[0.2em] text-accent">{en}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">{ja}</h2>
    </div>
  );
}

function WorkVisual({ work }: { work: Work }) {
  const base = "relative aspect-[16/10] overflow-hidden rounded-xl";
  if (work.images.length === 0) {
    return (
      <div className={`${base} flex flex-col items-center justify-center text-white`} style={{ background: work.bg }}>
        <p className="text-2xl font-bold tracking-tight">{work.name}</p>
        <p className="mt-1 text-xs tracking-[0.2em] text-white/60">{work.kind}</p>
      </div>
    );
  }
  if (work.imageStyle === "phones") {
    return (
      <div className={`${base} flex items-end justify-center gap-4 px-6 pt-6 sm:gap-6`} style={{ background: work.bg }}>
        {work.images.map((img) => (
          <div
            key={img.src}
            className="h-full w-[38%] max-w-[180px] overflow-hidden rounded-t-[1.4rem] border-[5px] border-b-0 border-white/90 bg-white shadow-lg"
          >
            <Image src={img.src} alt={img.alt} width={img.w} height={img.h} className="h-auto w-full" sizes="180px" />
          </div>
        ))}
      </div>
    );
  }
  if (work.imageStyle === "row") {
    return (
      <div className={`${base} grid grid-cols-3 items-center gap-2 p-4`} style={{ background: work.bg }}>
        {work.images.map((img) => (
          <Image key={img.src} src={img.src} alt={img.alt} width={img.w} height={img.h} className="h-auto w-full" />
        ))}
      </div>
    );
  }
  const img = work.images[0];
  return (
    <div className={base} style={{ background: work.bg }}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(min-width: 768px) 45vw, 100vw"
        className={work.imageStyle === "contain" ? "object-contain" : "object-cover"}
      />
    </div>
  );
}

function WorkText({ work: w }: { work: Work }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-bold text-accent">自主制作</span>
        <p className="text-xs font-semibold text-muted">{w.kind}</p>
      </div>
      <h3 className={`mt-2 font-bold ${w.featured ? "text-2xl md:text-3xl" : "text-xl"}`}>{w.name}</h3>
      <dl className="mt-5 space-y-4 text-sm">
        <div>
          <dt className="text-xs font-bold text-accent">課題</dt>
          <dd className="mt-1">{w.problem}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold text-accent">制作</dt>
          <dd className="mt-1">{w.made}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold text-accent">結果</dt>
          <dd className="mt-1">{w.result}</dd>
        </div>
      </dl>
      <ul className="mt-5 flex flex-wrap gap-2">
        {w.tech.map((t) => (
          <li key={t} className="rounded-full bg-ink/[.04] px-2.5 py-1 text-xs text-ink/70">
            {t}
          </li>
        ))}
      </ul>
      {w.link && (
        <a
          href={w.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block text-sm font-bold text-accent underline-offset-4 hover:underline"
        >
          {w.link.label} →
        </a>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ヘッダー */}
      <header className="sticky top-0 z-20 border-b border-line/70 bg-paper/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="#top" className="text-base font-bold tracking-tight">
            KAITOO <span className="text-accent">Works</span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted md:flex">
            <a href="#services" className="hover:text-ink">できること</a>
            <a href="#works" className="hover:text-ink">事例</a>
            <a href="#price" className="hover:text-ink">料金</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
          </nav>
          <ContactButton className="px-4 py-2 text-xs">相談する</ContactButton>
        </div>
      </header>

      <main id="top">
        {/* ファーストビュー */}
        <section className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-6 md:pb-20 md:pt-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold text-accent">{hero.eyebrow}</p>
              <h1 className="mt-4 text-[2.1rem] font-bold leading-[1.25] tracking-[-0.03em] md:text-[3.4rem] md:leading-[1.18]">
                {hero.title[0]}
                <br />
                {hero.title[1]}
                <br />
                {hero.title[2]}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">{hero.lead}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="使う技術">
                {hero.stack.map((t) => (
                  <li key={t} className="rounded-full bg-ink/[.05] px-2.5 py-1 text-xs font-medium text-ink/70">{t}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ContactButton className="h-12 w-full text-base sm:w-auto">{SITE.contactLabel}</ContactButton>
                <a
                  href="#works"
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-ink/15 bg-white px-6 text-base font-bold transition hover:border-ink/30 sm:w-auto"
                >
                  開発事例を見る
                </a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                {hero.trust.map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <AutomationDiagram />
          </div>
        </section>

        {/* こんな作業、ありませんか？ */}
        <section className="border-t border-ink/5 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <SectionTitle en="PROBLEMS" ja="こんな作業、ありませんか？" />
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
              {pains.map((p) => (
                <div key={p.title} className="flex gap-4 rounded-xl border border-ink/10 bg-paper p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon name={p.icon} />
                  </span>
                  <div>
                    <h3 className="font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <figure className="mt-8 overflow-hidden rounded-2xl border border-ink/10 bg-white">
              <Image
                src="/works/before-after.webp"
                alt="散らばった書類・メール・表を、1つの整った表とチェック済みの作業にまとめるイメージ図"
                width={1200}
                height={675}
                sizes="(min-width: 1152px) 1088px, 100vw"
                className="h-auto w-full"
              />
            </figure>
            <p className="mt-6 text-sm text-muted">1つの作業だけでも大丈夫です。今のやり方を聞いて、どこまで自動にできるかを整理します。</p>
          </div>
        </section>

        {/* できること */}
        <section id="services" className="border-t border-ink/5 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <SectionTitle en="SERVICES" ja="できること" />
            <div className="grid gap-5 md:grid-cols-3">
              {capabilities.map((c) => (
                <article
                  key={c.no}
                  className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${c.main ? "border-accent/30 ring-1 ring-accent/20" : "border-ink/10"}`}
                >
                  <p className="text-xs font-semibold tracking-[0.2em] text-accent">{c.no}</p>
                  <h3 className="mt-2 text-xl font-bold">{c.title}</h3>
                  <p className="mt-4 text-xs font-bold text-muted">こんなとき</p>
                  <p className="mt-1 text-sm">{c.pain}</p>
                  <p className="mt-4 text-xs font-bold text-muted">できること</p>
                  <p className="mt-1 text-sm">{c.can}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                    {c.tech.map((t) => (
                      <li key={t} className="rounded-full bg-ink/[.04] px-2.5 py-1 text-xs text-ink/70">{t}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* できる根拠 */}
        <section className="border-t border-ink/5 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <SectionTitle en="WHY" ja="任せていただける理由" />
            <div className="grid gap-4 md:grid-cols-3">
              {reasons.map((r, i) => (
                <div key={r.title} className="rounded-2xl border border-ink/10 bg-paper p-6">
                  <p className="text-sm font-bold text-accent">0{i + 1}</p>
                  <h3 className="mt-2 text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted">{r.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">AIで、速く。仕上げは、人の手で丁寧に。</p>
          </div>
        </section>

        {/* 制作・開発事例 */}
        <section id="works" className="border-t border-ink/5 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <SectionTitle en="WORKS" ja="制作・開発事例" />
            <p className="-mt-4 mb-10 text-sm text-muted">
              すべて自分で企画・制作・運用している自主制作です。「課題 → 制作 → 結果」の順にまとめています。
            </p>
            {works
              .filter((w) => w.featured)
              .map((w) => (
                <article
                  key={w.name}
                  className="grid gap-6 rounded-2xl border border-ink/10 bg-white p-4 shadow-sm md:p-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-10"
                >
                  <WorkVisual work={w} />
                  <WorkText work={w} />
                </article>
              ))}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {works
                .filter((w) => !w.featured && !w.more)
                .map((w) => (
                  <article key={w.name} className="rounded-2xl border border-ink/10 bg-white p-4 md:p-5">
                    <WorkVisual work={w} />
                    <div className="mt-5">
                      <WorkText work={w} />
                    </div>
                  </article>
                ))}
            </div>
            <details className="group mt-8">
              <summary className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-ink/15 bg-white px-6 py-3 text-sm font-bold transition hover:border-ink/30">
                その他の自主制作を見る
                <span className="faq-mark text-lg leading-none text-accent transition">+</span>
              </summary>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {works
                  .filter((w) => w.more)
                  .map((w) => (
                    <article key={w.name} className="rounded-2xl border border-ink/10 bg-white p-4 md:p-5">
                      <WorkVisual work={w} />
                      <div className="mt-5">
                        <WorkText work={w} />
                      </div>
                    </article>
                  ))}
              </div>
            </details>
          </div>
        </section>

        {/* 料金 */}
        <section id="price" className="border-t border-ink/5 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <SectionTitle en="PRICE" ja="料金" />
            <div className="space-y-8">
              {services.map((s) => (
                <div key={s.id}>
                  <h3 className="mb-3 text-lg font-bold">{s.title}</h3>
                  <div className="grid gap-3 md:grid-cols-3">
                    {s.plans.map((p, i) => (
                      <div
                        key={p.name}
                        className={`rounded-2xl border bg-white p-5 ${i === 1 ? "border-accent ring-1 ring-accent" : "border-ink/10"}`}
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-bold">{p.name}</p>
                          {i === 1 && <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-white">おすすめ</span>}
                        </div>
                        <p className="mt-2">
                          <span className="text-2xl font-bold">{p.price}</span>
                          <span className="text-sm font-bold">円</span>
                        </p>
                        <p className="mt-2 text-sm text-muted">{p.detail}</p>
                        <p className="mt-3 text-xs text-muted">納期：{p.lt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-xl bg-paper p-4 text-sm">
              Web・アプリの修正や個別の開発は、内容を確認してお見積もりします。
            </p>
            <p className="mt-4 text-xs text-muted">
              ※ 表示はすべて税込です。内容に合わせてお見積もりします。LPの「48時間」は、文章・画像などの素材がそろってから初稿を出すまでの時間です。
            </p>
          </div>
        </section>

        {/* 制作フロー（スマホは縦のタイムライン） */}
        <section className="border-t border-ink/5 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <SectionTitle en="FLOW" ja="ご依頼の流れ" />
            <ol className="md:grid md:grid-cols-5 md:gap-4">
              {flow.map((f, i) => (
                <li
                  key={f.title}
                  className="relative flex gap-4 pb-7 last:pb-0 md:flex-col md:gap-3 md:rounded-2xl md:border md:border-ink/10 md:bg-white md:p-5 md:pb-5"
                >
                  {i < flow.length - 1 && (
                    <span aria-hidden="true" className="absolute bottom-0 left-4 top-8 w-px bg-ink/15 md:hidden" />
                  )}
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted">{f.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-ink/5 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <SectionTitle en="FAQ" ja="よくある質問" />
            <div className="divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-bold">
                    <span>Q. {f.q}</span>
                    <span className="faq-mark mt-1 text-xl leading-none text-accent transition">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 問い合わせ */}
        <section id="contact" className="bg-ink py-16 text-white md:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-white/60">CONTACT</p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">まずは、<br className="sm:hidden" />
              今の困りごとを<br className="sm:hidden" />教えてください。</h2>
            <p className="mt-4 text-sm text-white/70">
              何を作るか決まっていなくても大丈夫です。今の作業の手順を教えていただければ、
              <br className="hidden sm:inline" />
              どこまで自動にできるかを整理します。24時間以内にお返事します。相談は無料です。
            </p>
            {contactExternal ? (
              <ContactButton className="mt-8 h-12 w-full text-base sm:w-auto sm:px-10">{SITE.contactLabel}</ContactButton>
            ) : (
              <p className="mt-8 text-sm text-white/50">お問い合わせフォームは準備中です。</p>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-ink pb-24 text-center text-xs text-white/40 md:pb-10">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
      </footer>
      <StickyCta href={contactHref} external={contactExternal} label={SITE.contactLabel} />
    </>
  );
}
