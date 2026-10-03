import Image from "next/image";
import { SITE, services, works, flow, faqs, type Work } from "@/lib/content";

// フォームURLが未設定の間は、ページ下部の問い合わせセクションへ移動させる
const contactHref = SITE.contactUrl || "#contact";
const contactExternal = SITE.contactUrl !== "";

function ContactButton({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      href={contactHref}
      {...(contactExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 ${className}`}
    >
      {children}
    </a>
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

export default function Home() {
  return (
    <>
      {/* ヘッダー */}
      <header className="sticky top-0 z-20 border-b border-line/70 bg-paper/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">
          <a href="#top" className="text-base font-bold tracking-tight">
            KAITOO <span className="text-accent">Works</span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted md:flex">
            <a href="#services" className="hover:text-ink">サービス</a>
            <a href="#works" className="hover:text-ink">制作事例</a>
            <a href="#price" className="hover:text-ink">料金</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
          </nav>
          <ContactButton className="px-4 py-2 text-xs">無料で相談</ContactButton>
        </div>
      </header>

      <main id="top">
        {/* ファーストビュー */}
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-14 md:px-6 md:pb-24 md:pt-24">
          <p className="text-sm font-semibold text-accent">{SITE.tagline}</p>
          <h1 className="mt-4 text-[2rem] font-bold leading-[1.35] tracking-tight md:text-5xl md:leading-[1.3]">
            AIで、速く。
            <br />
            仕上げは、
            <br className="sm:hidden" />
            人の手で丁寧に。
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
            Instagram投稿、スマホ対応のLP、毎月の手作業の自動化。
            小さなお店や個人事業主の「手が回らない」を、短納期で形にします。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ContactButton className="py-4 text-base">無料で相談する</ContactButton>
            <a
              href="#price"
              className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-4 text-base font-bold transition hover:border-ink/30"
            >
              料金を見る
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-white text-center">
            <div className="px-2 py-4">
              <dt className="text-[11px] text-muted md:text-xs">LP初稿</dt>
              <dd className="mt-1 text-lg font-bold md:text-2xl">最短48h</dd>
            </div>
            <div className="px-2 py-4">
              <dt className="text-[11px] text-muted md:text-xs">SNS制作</dt>
              <dd className="mt-1 text-lg font-bold md:text-2xl">9,800円〜</dd>
            </div>
            <div className="px-2 py-4">
              <dt className="text-[11px] text-muted md:text-xs">ご相談</dt>
              <dd className="mt-1 text-lg font-bold md:text-2xl">無料</dd>
            </div>
          </dl>
        </section>

        {/* サービス */}
        <section id="services" className="border-t border-line bg-white py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <SectionTitle en="SERVICES" ja="できること" />
            <div className="grid gap-5 md:grid-cols-3">
              {services.map((s) => (
                <article key={s.id} className="flex flex-col rounded-2xl border border-line bg-paper p-6">
                  <span className="w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">{s.label}</span>
                  <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted">{s.lead}</p>
                  <ul className="mb-6 mt-5 space-y-2 text-sm">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-end justify-between border-t border-line pt-5">
                    <p>
                      <span className="text-2xl font-bold">{s.from}</span>
                      <span className="text-sm font-bold">円〜</span>
                    </p>
                    <p className="text-xs text-muted">納期 {s.lt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 制作事例 */}
        <section id="works" className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <SectionTitle en="WORKS" ja="制作事例" />
            <p className="-mt-4 mb-10 text-sm text-muted">
              自分で企画・制作・運用しているプロジェクトです。「課題 → 制作 → 結果」の順にまとめています。
            </p>
            <div className="space-y-12 md:space-y-16">
              {works.map((w, i) => (
                <article key={w.name} className="grid gap-6 md:grid-cols-2 md:items-center md:gap-10">
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <WorkVisual work={w} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted">{w.kind}</p>
                    <h3 className="mt-1 text-xl font-bold md:text-2xl">{w.name}</h3>
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
                        <li key={t} className="rounded-md border border-line bg-white px-2 py-1 text-xs text-muted">
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 制作フロー */}
        <section className="border-t border-line bg-white py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <SectionTitle en="FLOW" ja="ご依頼の流れ" />
            <ol className="grid gap-4 md:grid-cols-5">
              {flow.map((f, i) => (
                <li key={f.title} className="flex gap-4 rounded-2xl border border-line bg-paper p-5 md:flex-col md:gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
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

        {/* 料金 */}
        <section id="price" className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <SectionTitle en="PRICE" ja="料金" />
            <div className="space-y-8">
              {services.map((s) => (
                <div key={s.id}>
                  <h3 className="mb-3 text-lg font-bold">{s.title}</h3>
                  <div className="grid gap-3 md:grid-cols-3">
                    {s.plans.map((p, i) => (
                      <div
                        key={p.name}
                        className={`rounded-2xl border bg-white p-5 ${i === 1 ? "border-accent ring-1 ring-accent" : "border-line"}`}
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-bold">{p.name}</p>
                          {i === 1 && <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-white">人気</span>}
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
            <p className="mt-6 text-xs text-muted">
              ※ 表示はすべて税込です。内容に合わせてお見積もりします。LPの「48時間」は、文章・画像などの素材がそろってから初稿を出すまでの時間です。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-line bg-white py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
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
              気軽にご相談ください。</h2>
            <p className="mt-4 text-sm text-white/70">
              「こんなことできる？」だけでも大丈夫です。
              <br className="hidden sm:inline" />
              24時間以内にお返事します。相談は無料です。
            </p>
            {contactExternal ? (
              <ContactButton className="mt-8 w-full py-4 text-base sm:w-auto sm:px-10">お問い合わせフォームへ</ContactButton>
            ) : (
              <p className="mt-8 text-sm text-white/50">お問い合わせフォームは準備中です。</p>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-ink pb-10 text-center text-xs text-white/40">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
      </footer>
    </>
  );
}
