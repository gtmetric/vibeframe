export default function HomePage() {
  return (
    <div class="noise min-h-screen">
      {/* Nav */}
      <nav class="fixed top-0 left-0 right-0 z-50 border-b border-border-1 bg-[#050505]/80 backdrop-blur-xl">
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" class="flex items-center gap-0">
            <svg viewBox="0 0 260 36" fill="none" class="h-6" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4 L14 28 L24 4" stroke="#a3e635" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              <text x="27" y="24" font-family="'JetBrains Mono', 'SF Mono', 'Fira Code', monospace" font-size="22" font-weight="700" fill="#e5e5e5" letter-spacing="-0.5">ibeframe</text>
            </svg>
          </a>
          <div class="flex items-center gap-6">
            <a
              href="https://github.com/gtmetric/vibeframe"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
            <a
              href="/get-started"
              class="text-sm font-medium text-[#050505] bg-lime px-4 py-2 rounded-md hover:bg-lime-dim transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section class="dot-grid relative pt-40 pb-28 px-6 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />
        <div class="relative max-w-4xl mx-auto text-center">
          <div class="fade-up fade-up-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-2 bg-surface-2 mb-8">
            <span class="w-2 h-2 rounded-full bg-lime" />
            <span class="text-xs font-mono text-neutral-400">v0.0.3 — now available</span>
          </div>

          <h1 class="fade-up fade-up-2 font-display font-800 text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6">
            A full-stack framework{' '}
            <span class="gradient-text">built for Claude Code.</span>
          </h1>

          <p class="fade-up fade-up-3 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Colocated routes. One directory per feature. AI reads one folder
            and immediately understands the full picture.
          </p>

          <div class="fade-up fade-up-4 max-w-lg mx-auto">
            <div class="terminal glow-lime">
              <div class="terminal-header">
                <div class="terminal-dot bg-[#ff5f57]" />
                <div class="terminal-dot bg-[#febc2e]" />
                <div class="terminal-dot bg-[#28c840]" />
                <span class="ml-2 text-xs text-neutral-600 font-mono">terminal</span>
              </div>
              <div class="terminal-body">
                <div>
                  <span class="text-lime">$</span>{' '}
                  <span class="text-white">bunx vibeframe create my-app</span>
                </div>
                <div>
                  <span class="text-lime">$</span>{' '}
                  <span class="text-white">cd my-app</span>
                </div>
                <div>
                  <span class="text-lime">$</span>{' '}
                  <span class="text-white">bun run dev</span>
                  <span class="cursor-blink text-lime ml-0.5">▋</span>
                </div>
              </div>
            </div>
          </div>

          <p class="fade-up fade-up-5 text-sm text-neutral-600 mt-6 font-mono">
            Three commands. That's it.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section class="py-28 px-6 border-t border-border-1">
        <div class="reveal max-w-6xl mx-auto">
          <div class="max-w-3xl">
            <div class="accent-line mb-6" />
            <h2 class="font-display font-700 text-3xl md:text-4xl tracking-tight mb-4">
              AI spends more time <span class="text-neutral-500">searching</span> than coding.
            </h2>
            <p class="text-neutral-400 text-lg leading-relaxed mb-12">
              With traditional frameworks, Claude Code searches across pages/, api/, lib/, types/,
              utils/, and components/ just to understand one feature. More files to read = slower, less accurate AI.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            {/* Traditional framework */}
            <div class="rounded-xl border border-border-1 bg-surface p-8">
              <div class="flex items-center gap-2 mb-6">
                <span class="text-red-400 text-sm font-mono font-semibold">✕</span>
                <span class="text-sm font-mono text-neutral-500">Traditional framework</span>
              </div>
              <div class="file-tree text-neutral-500">
                <div class="text-neutral-300">src/</div>
                <div class="pl-4">
                  <div class="text-neutral-300">pages/</div>
                  <div class="pl-4 text-amber-300/70">users.tsx</div>
                </div>
                <div class="pl-4">
                  <div class="text-neutral-300">api/</div>
                  <div class="pl-4 text-amber-300/70">users.ts</div>
                </div>
                <div class="pl-4">
                  <div class="text-neutral-300">lib/</div>
                  <div class="pl-4 text-amber-300/70">db.ts</div>
                  <div class="pl-4 text-amber-300/70">validators.ts</div>
                </div>
                <div class="pl-4">
                  <div class="text-neutral-300">types/</div>
                  <div class="pl-4 text-amber-300/70">user.ts</div>
                </div>
                <div class="pl-4">
                  <div class="text-neutral-300">components/</div>
                  <div class="pl-4 text-amber-300/70">UserList.tsx</div>
                  <div class="pl-4 text-amber-300/70">UserForm.tsx</div>
                </div>
                <div class="pl-4">
                  <div class="text-neutral-300">utils/</div>
                  <div class="pl-4 text-amber-300/70">format-user.ts</div>
                </div>
                <div class="mt-4 text-xs text-red-400/60 font-mono">
                  ↑ 7 files across 6 directories
                </div>
              </div>
            </div>

            {/* Vibeframe */}
            <div class="rounded-xl border border-lime/20 bg-surface p-8 glow-lime">
              <div class="flex items-center gap-2 mb-6">
                <span class="text-lime text-sm font-mono font-semibold">✓</span>
                <span class="text-sm font-mono text-neutral-500">Vibeframe</span>
              </div>
              <div class="file-tree">
                <div class="text-neutral-300">routes/</div>
                <div class="pl-4">
                  <div class="text-lime">users/</div>
                  <div class="pl-4 text-white">page.tsx</div>
                  <div class="pl-4 text-white">loader.ts</div>
                  <div class="pl-4 text-white">action.ts</div>
                  <div class="pl-4 text-white">schema.ts</div>
                </div>
                <div class="mt-4 text-xs text-lime/60 font-mono">
                  ↑ 4 files, 1 directory. Full picture.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Code Flow */}
      <section class="py-28 px-6 border-t border-border-1 bg-surface">
        <div class="reveal max-w-6xl mx-auto">
          <div class="max-w-3xl mb-16">
            <div class="accent-line mb-6" />
            <h2 class="font-display font-700 text-3xl md:text-4xl tracking-tight mb-4">
              Four files. Zero guesswork.
            </h2>
            <p class="text-neutral-400 text-lg leading-relaxed">
              Define your schema. Load your data. Handle submissions. Render the page. Each file has exactly one job.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-6">
            {/* Schema */}
            <div class="code-block">
              <div class="code-block-header">
                <div class="code-dot" /><div class="code-dot" /><div class="code-dot" />
                <span class="ml-3 text-xs text-neutral-500 font-mono">routes/users/schema.ts</span>
              </div>
              <pre>
<span class="syn-kw">import</span> {'{'} sqliteTable, text, integer {'}'} <span class="syn-kw">from</span> <span class="syn-str">"vibeframe"</span>;{'\n'}
{'\n'}
<span class="syn-kw">export const</span> <span class="syn-prop">users</span> <span class="syn-op">=</span> <span class="syn-fn">sqliteTable</span>(<span class="syn-str">"users"</span>, {'{'}{'\n'}
{'  '}<span class="syn-prop">id</span>: <span class="syn-fn">integer</span>(<span class="syn-str">"id"</span>).<span class="syn-fn">primaryKey</span>({'{'} <span class="syn-prop">autoIncrement</span>: <span class="syn-num">true</span> {'}'}),{'\n'}
{'  '}<span class="syn-prop">name</span>: <span class="syn-fn">text</span>(<span class="syn-str">"name"</span>).<span class="syn-fn">notNull</span>(),{'\n'}
{'  '}<span class="syn-prop">email</span>: <span class="syn-fn">text</span>(<span class="syn-str">"email"</span>).<span class="syn-fn">notNull</span>().<span class="syn-fn">unique</span>(),{'\n'}
{'}'});
              </pre>
            </div>

            {/* Loader */}
            <div class="code-block">
              <div class="code-block-header">
                <div class="code-dot" /><div class="code-dot" /><div class="code-dot" />
                <span class="ml-3 text-xs text-neutral-500 font-mono">routes/users/loader.ts</span>
              </div>
              <pre>
<span class="syn-kw">import</span> {'{'} db {'}'} <span class="syn-kw">from</span> <span class="syn-str">"vibeframe"</span>;{'\n'}
<span class="syn-kw">import</span> {'{'} users {'}'} <span class="syn-kw">from</span> <span class="syn-str">"./schema"</span>;{'\n'}
{'\n'}
<span class="syn-kw">export async function</span> <span class="syn-fn">loader</span>() {'{'}{'\n'}
{'  '}<span class="syn-kw">return</span> {'{'}{'\n'}
{'    '}<span class="syn-prop">users</span>: db.<span class="syn-fn">select</span>().<span class="syn-fn">from</span>(users).<span class="syn-fn">all</span>(){'\n'}
{'  '}{'}'};{'\n'}
{'}'}{'\n'}
{'\n'}
<span class="syn-kw">export type</span> <span class="syn-type">Props</span> <span class="syn-op">=</span> Awaited{'<'}ReturnType{'<'}<span class="syn-kw">typeof</span> loader{'>>'};
              </pre>
            </div>

            {/* Action */}
            <div class="code-block">
              <div class="code-block-header">
                <div class="code-dot" /><div class="code-dot" /><div class="code-dot" />
                <span class="ml-3 text-xs text-neutral-500 font-mono">routes/users/action.ts</span>
              </div>
              <pre>
<span class="syn-kw">import</span> {'{'} validate, z, db {'}'} <span class="syn-kw">from</span> <span class="syn-str">"vibeframe"</span>;{'\n'}
<span class="syn-kw">import</span> {'{'} users {'}'} <span class="syn-kw">from</span> <span class="syn-str">"./schema"</span>;{'\n'}
{'\n'}
<span class="syn-kw">export async function</span> <span class="syn-fn">action</span>(<span class="syn-prop">req</span>) {'{'}{'\n'}
{'  '}<span class="syn-kw">const</span> {'{'} <span class="syn-prop">data</span>, <span class="syn-prop">errors</span> {'}'} <span class="syn-op">=</span> <span class="syn-kw">await</span> <span class="syn-fn">validate</span>(req, {'{'}{'\n'}
{'    '}<span class="syn-prop">name</span>: z.<span class="syn-fn">string</span>().<span class="syn-fn">min</span>(<span class="syn-num">1</span>, <span class="syn-str">"Name is required"</span>),{'\n'}
{'    '}<span class="syn-prop">email</span>: z.<span class="syn-fn">string</span>().<span class="syn-fn">email</span>(<span class="syn-str">"Invalid email"</span>),{'\n'}
{'  }'});{'\n'}
{'  '}<span class="syn-kw">if</span> (errors) <span class="syn-kw">return</span> {'{'} errors {'}'};{'\n'}
{'  '}db.<span class="syn-fn">insert</span>(users).<span class="syn-fn">values</span>(data).<span class="syn-fn">run</span>();{'\n'}
{'  '}<span class="syn-kw">return</span> {'{'} <span class="syn-prop">redirect</span>: <span class="syn-str">"/users"</span> {'}'};{'\n'}
{'}'}
              </pre>
            </div>

            {/* Page */}
            <div class="code-block">
              <div class="code-block-header">
                <div class="code-dot" /><div class="code-dot" /><div class="code-dot" />
                <span class="ml-3 text-xs text-neutral-500 font-mono">routes/users/page.tsx</span>
              </div>
              <pre>
<span class="syn-kw">import</span> {'{'} Form, FieldError {'}'} <span class="syn-kw">from</span> <span class="syn-str">"vibeframe"</span>;{'\n'}
<span class="syn-kw">import type</span> {'{'} <span class="syn-type">Props</span> {'}'} <span class="syn-kw">from</span> <span class="syn-str">"./loader"</span>;{'\n'}
{'\n'}
<span class="syn-kw">export default function</span> <span class="syn-fn">UsersPage</span>({'{'} <span class="syn-prop">users</span>, <span class="syn-prop">_actionErrors</span> {'}'}: <span class="syn-type">Props</span>) {'{'}{'\n'}
{'  '}<span class="syn-kw">return</span> ({'\n'}
{'    '}<span class="syn-tag">{'<div>'}</span>{'\n'}
{'      '}<span class="syn-tag">{'<h1>'}</span>Users<span class="syn-tag">{'</h1>'}</span>{'\n'}
{'      '}<span class="syn-tag">{'<Form '}</span><span class="syn-attr">action</span>=<span class="syn-str">"/users"</span><span class="syn-tag">{'>'}</span>{'\n'}
{'        '}<span class="syn-tag">{'<input '}</span><span class="syn-attr">name</span>=<span class="syn-str">"name"</span> <span class="syn-tag">/{'>'}</span>{'\n'}
{'        '}<span class="syn-tag">{'<FieldError '}</span><span class="syn-attr">name</span>=<span class="syn-str">"name"</span> <span class="syn-attr">errors</span>=<span class="syn-punc">{'{'}</span>_actionErrors<span class="syn-punc">{'}'}</span> <span class="syn-tag">/{'>'}</span>{'\n'}
{'        '}<span class="syn-tag">{'<button '}</span><span class="syn-attr">type</span>=<span class="syn-str">"submit"</span><span class="syn-tag">{'>'}</span>Add<span class="syn-tag">{'</button>'}</span>{'\n'}
{'      '}<span class="syn-tag">{'</Form>'}</span>{'\n'}
{'      '}{'{'}users.<span class="syn-fn">map</span>(u <span class="syn-op">=></span> <span class="syn-tag">{'<p '}</span><span class="syn-attr">key</span>=<span class="syn-punc">{'{'}</span>u.id<span class="syn-punc">{'}'}</span><span class="syn-tag">{'>'}</span>{'{'}u.name{'}'}<span class="syn-tag">{'</p>'}</span>){'}'}{'\n'}
{'    '}<span class="syn-tag">{'</div>'}</span>{'\n'}
{'  '});{'\n'}
{'}'}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section class="py-28 px-6 border-t border-border-1">
        <div class="reveal max-w-6xl mx-auto">
          <div class="max-w-3xl mb-16">
            <div class="accent-line mb-6" />
            <h2 class="font-display font-700 text-3xl md:text-4xl tracking-tight mb-4">
              Batteries included.
            </h2>
            <p class="text-neutral-400 text-lg">
              Everything you need to ship. Nothing you don't.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard
              title="Server-First Rendering"
              desc="Pages render on the server. HTML arrives ready. No loading spinners."
            />
            <FeatureCard
              title="Type-Safe Loaders"
              desc="Loaders export Props, pages import it. One line. No type mismatches."
            />
            <FeatureCard
              title="Form Validation"
              desc="validate(req, schema) with Zod. Parse, validate, type — one function. Errors flow to <FieldError> automatically."
            />
            <FeatureCard
              title="Drizzle + SQLite"
              desc="Define a schema, table auto-creates on startup. Full ORM with type-safe queries."
            />
            <FeatureCard
              title="Tailwind v4"
              desc="Included out of the box. No configuration needed. Just use classes."
            />
            <FeatureCard
              title="Route Validation"
              desc="Validates every route on dev startup. Catches mistakes before the browser."
            />
            <FeatureCard
              title="Structured Errors"
              desc="Every error has a code, what went wrong, why, and how to fix it."
            />
            <FeatureCard
              title="CLI Scaffolding"
              desc="vibeframe new route — scaffolds with correct imports and types instantly."
            />
          </div>
        </div>
      </section>

      {/* AI Optimization */}
      <section class="py-28 px-6 border-t border-border-1 bg-surface">
        <div class="reveal max-w-6xl mx-auto">
          <div class="max-w-3xl mb-16">
            <div class="accent-line mb-6" />
            <h2 class="font-display font-700 text-3xl md:text-4xl tracking-tight mb-4">
              Designed for how AI actually works.
            </h2>
            <p class="text-neutral-400 text-lg leading-relaxed">
              Every design decision optimizes for AI coding tools. Not as an afterthought — as the primary constraint.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <AiFeature
              num="01"
              title="Colocated routes"
              desc="AI reads one directory instead of searching across many. Fewer file reads = faster, more accurate output."
            />
            <AiFeature
              num="02"
              title="Props type export"
              desc="Loaders export Props, pages import it. AI connects the types in one line. No guessing."
            />
            <AiFeature
              num="03"
              title="Startup validation"
              desc="Wrong exports? Missing loaders? Vibeframe catches it on startup with fix suggestions AI can act on."
            />
            <AiFeature
              num="04"
              title="vibeframe routes"
              desc="Prints every route with its files. AI gets instant, complete app context in one command."
            />
            <AiFeature
              num="05"
              title="Structured errors"
              desc="Every error includes code + reason + fix. Machine-parseable. AI reads it and acts immediately."
            />
            <AiFeature
              num="06"
              title="CLAUDE.md included"
              desc="Every generated project ships with conventions so Claude Code knows the patterns from the start."
            />
            <AiFeature
              num="07"
              title="CLI scaffolding"
              desc="vibeframe new route scaffolds correct imports and types. One command replaces manual file creation."
            />
            <AiFeature
              num="08"
              title="Minimal concepts"
              desc="Pages, loaders, actions, schemas. Four things to learn. Fewer concepts = fewer AI mistakes."
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section class="py-28 px-6 border-t border-border-1">
        <div class="reveal max-w-5xl mx-auto">
          <div class="max-w-3xl mb-16">
            <div class="accent-line mb-6" />
            <h2 class="font-display font-700 text-3xl md:text-4xl tracking-tight mb-4">
              The stack.
            </h2>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StackItem label="Runtime" value="Bun" />
            <StackItem label="Rendering" value="Preact (3KB)" />
            <StackItem label="Database" value="Drizzle + SQLite" />
            <StackItem label="Styling" value="Tailwind CSS v4" />
          </div>
        </div>
      </section>

      {/* Deploy */}
      <section class="py-20 px-6 border-t border-border-1 bg-surface">
        <div class="reveal max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="accent-line mb-6" />
              <h2 class="font-display font-700 text-3xl md:text-4xl tracking-tight mb-4">
                Deploy anywhere.
              </h2>
              <p class="text-neutral-400 text-lg leading-relaxed">
                184MB Alpine Docker image. Build it, ship it, run it.
              </p>
            </div>

            <div class="code-block">
              <div class="code-block-header">
                <div class="code-dot" /><div class="code-dot" /><div class="code-dot" />
                <span class="ml-3 text-xs text-neutral-500 font-mono">Dockerfile</span>
              </div>
              <pre>
<span class="syn-kw">FROM</span> oven/bun:1-alpine <span class="syn-kw">AS</span> build{'\n'}
<span class="syn-kw">WORKDIR</span> /app{'\n'}
<span class="syn-kw">COPY</span> package.json bun.lock* ./{'\n'}
<span class="syn-kw">RUN</span> bun install --frozen-lockfile{'\n'}
<span class="syn-kw">COPY</span> . .{'\n'}
<span class="syn-kw">RUN</span> bun run build{'\n'}
{'\n'}
<span class="syn-kw">FROM</span> oven/bun:1-alpine{'\n'}
<span class="syn-kw">WORKDIR</span> /app{'\n'}
<span class="syn-kw">COPY</span> <span class="syn-op">--from=</span>build /app .{'\n'}
<span class="syn-kw">EXPOSE</span> <span class="syn-num">3000</span>{'\n'}
<span class="syn-kw">CMD</span> [<span class="syn-str">"bun"</span>, <span class="syn-str">"run"</span>, <span class="syn-str">"start"</span>]
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-32 px-6 border-t border-border-1 dot-grid relative">
        <div class="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div class="reveal relative max-w-3xl mx-auto text-center">
          <h2 class="font-display font-800 text-4xl md:text-6xl tracking-tight mb-6">
            Ship faster with AI.
          </h2>
          <p class="text-neutral-400 text-lg mb-12">
            Stop fighting your framework. Start building.
          </p>

          <div class="max-w-md mx-auto mb-8">
            <div class="terminal glow-lime">
              <div class="terminal-header">
                <div class="terminal-dot bg-[#ff5f57]" />
                <div class="terminal-dot bg-[#febc2e]" />
                <div class="terminal-dot bg-[#28c840]" />
              </div>
              <div class="terminal-body text-center">
                <span class="text-lime">$</span>{' '}
                <span class="text-white">bunx vibeframe create my-app</span>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center gap-4">
            <a
              href="/get-started"
              class="inline-flex items-center gap-2 text-sm font-semibold text-[#050505] bg-lime px-6 py-3 rounded-md hover:bg-lime-dim transition-colors"
            >
              Get Started
              <span class="text-xs">→</span>
            </a>
            <a
              href="https://github.com/gtmetric/vibeframe"
              class="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 border border-border-2 px-6 py-3 rounded-md hover:text-white hover:border-neutral-600 transition-colors"
              target="_blank"
              rel="noopener"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="border-t border-border-1 py-12 px-6">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <svg viewBox="0 0 260 36" fill="none" class="h-4" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4 L14 28 L24 4" stroke="#a3e635" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              <text x="27" y="24" font-family="'JetBrains Mono', 'SF Mono', 'Fira Code', monospace" font-size="22" font-weight="700" fill="#e5e5e5" letter-spacing="-0.5">ibeframe</text>
            </svg>
            <span class="text-neutral-600 text-sm">·</span>
            <span class="text-neutral-600 text-sm">Built for AI. Used by developers.</span>
          </div>
          <div class="flex items-center gap-6">
            <a
              href="https://github.com/gtmetric/vibeframe"
              class="text-sm text-neutral-500 hover:text-white transition-colors"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/vibeframe"
              class="text-sm text-neutral-500 hover:text-white transition-colors"
              target="_blank"
              rel="noopener"
            >
              npm
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div class="feature-card rounded-lg border border-border-1 bg-surface p-6">
      <h3 class="font-display font-600 text-sm text-white mb-2">{title}</h3>
      <p class="text-sm text-neutral-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function AiFeature({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div class="flex gap-5 p-6 rounded-lg border border-border-1 bg-surface-2 feature-card">
      <span class="font-mono text-xs text-lime/40 pt-0.5 shrink-0">{num}</span>
      <div>
        <h3 class="font-display font-600 text-white mb-1.5">{title}</h3>
        <p class="text-sm text-neutral-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function StackItem({ label, value }: { label: string; value: string }) {
  return (
    <div class="rounded-lg border border-border-1 bg-surface p-6 text-center">
      <div class="text-xs font-mono text-neutral-600 uppercase tracking-wider mb-2">{label}</div>
      <div class="font-display font-600 text-white">{value}</div>
    </div>
  );
}
