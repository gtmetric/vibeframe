export default function GetStartedPage() {
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

      {/* Header */}
      <section class="pt-32 pb-16 px-6">
        <div class="max-w-3xl mx-auto">
          <a href="/" class="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-lime transition-colors mb-8">
            <span>←</span> Back to home
          </a>
          <h1 class="fade-up fade-up-1 font-display font-800 text-4xl md:text-5xl tracking-tight mb-4">
            Get Started
          </h1>
          <p class="fade-up fade-up-2 text-lg text-neutral-400 leading-relaxed">
            Go from zero to a running full-stack app in under a minute.
          </p>
        </div>
      </section>

      {/* Prerequisites */}
      <section class="pb-16 px-6">
        <div class="max-w-3xl mx-auto">
          <div class="fade-up fade-up-3 rounded-lg border border-border-2 bg-surface-2 p-6 mb-12">
            <h3 class="font-display font-600 text-sm text-white mb-3">Prerequisites</h3>
            <p class="text-sm text-neutral-400 leading-relaxed">
              You need{' '}
              <a href="https://bun.sh" class="text-lime hover:underline" target="_blank" rel="noopener">Bun</a>{' '}
              v1.0 or later. Install it with:
            </p>
            <div class="terminal mt-4">
              <div class="terminal-body !py-4 !text-sm">
                <span class="text-lime">$</span>{' '}
                <span class="text-white">curl -fsSL https://bun.sh/install | bash</span>
              </div>
            </div>
          </div>

          {/* Step 1 */}
          <Step num="1" title="Create your project">
            <p class="text-neutral-400 leading-relaxed mb-6">
              Scaffold a new Vibeframe project with one command. This creates the directory,
              installs dependencies, and sets up the project structure.
            </p>
            <div class="terminal mb-4">
              <div class="terminal-header">
                <div class="terminal-dot bg-[#ff5f57]" />
                <div class="terminal-dot bg-[#febc2e]" />
                <div class="terminal-dot bg-[#28c840]" />
              </div>
              <div class="terminal-body">
                <div>
                  <span class="text-lime">$</span>{' '}
                  <span class="text-white">bunx vibeframe create my-app</span>
                </div>
                <div class="text-neutral-600 mt-2">
                  Creating my-app...{'\n'}
                  ✓ Project created{'\n'}
                  ✓ Dependencies installed{'\n'}
                  ✓ CLAUDE.md generated
                </div>
              </div>
            </div>
            <p class="text-sm text-neutral-500">
              You'll get a ready-to-run project with a home page, counter demo, Tailwind CSS, and a CLAUDE.md
              so AI tools immediately understand the project conventions.
            </p>
          </Step>

          {/* Step 2 */}
          <Step num="2" title="Start the dev server">
            <p class="text-neutral-400 leading-relaxed mb-6">
              Navigate into your project and start the development server.
            </p>
            <div class="terminal mb-4">
              <div class="terminal-header">
                <div class="terminal-dot bg-[#ff5f57]" />
                <div class="terminal-dot bg-[#febc2e]" />
                <div class="terminal-dot bg-[#28c840]" />
              </div>
              <div class="terminal-body">
                <div>
                  <span class="text-lime">$</span>{' '}
                  <span class="text-white">cd my-app</span>
                </div>
                <div>
                  <span class="text-lime">$</span>{' '}
                  <span class="text-white">bun run dev</span>
                </div>
                <div class="text-neutral-600 mt-2">
                  ✓ All routes valid{'\n'}
                  Vibeframe server running at http://localhost:3000
                </div>
              </div>
            </div>
            <p class="text-sm text-neutral-500">
              Open{' '}
              <span class="text-neutral-300 font-mono text-xs">http://localhost:3000</span>{' '}
              in your browser. Live reload is built in — edit a file and the browser refreshes automatically.
            </p>
          </Step>

          {/* Step 3 */}
          <Step num="3" title="Understand the project structure">
            <p class="text-neutral-400 leading-relaxed mb-6">
              Every feature lives in one directory under <span class="font-mono text-sm text-neutral-300">routes/</span>.
              Each directory can contain up to four files:
            </p>
            <div class="code-block mb-6">
              <div class="code-block-header">
                <div class="code-dot" /><div class="code-dot" /><div class="code-dot" />
                <span class="ml-3 text-xs text-neutral-500 font-mono">project structure</span>
              </div>
              <pre class="file-tree">
<span class="text-neutral-300">my-app/</span>{'\n'}
{'  '}<span class="text-neutral-500">├─</span> <span class="text-neutral-300">routes/</span>{'\n'}
{'  '}<span class="text-neutral-500">│  ├─</span> <span class="text-lime">index/</span>{'\n'}
{'  '}<span class="text-neutral-500">│  │  └─</span> <span class="text-white">page.tsx</span>          <span class="syn-cm">← what the user sees</span>{'\n'}
{'  '}<span class="text-neutral-500">│  └─</span> <span class="text-lime">counter/</span>{'\n'}
{'  '}<span class="text-neutral-500">│     └─</span> <span class="text-white">page.tsx</span>          <span class="syn-cm">← interactive demo</span>{'\n'}
{'  '}<span class="text-neutral-500">├─</span> <span class="text-neutral-300">styles/</span>{'\n'}
{'  '}<span class="text-neutral-500">│  └─</span> app.css{'\n'}
{'  '}<span class="text-neutral-500">├─</span> CLAUDE.md              <span class="syn-cm">← AI conventions</span>{'\n'}
{'  '}<span class="text-neutral-500">└─</span> package.json
              </pre>
            </div>
            <div class="grid sm:grid-cols-2 gap-3">
              <FileRole file="page.tsx" role="UI component — what the user sees" />
              <FileRole file="loader.ts" role="Server data fetching — GET requests" />
              <FileRole file="action.ts" role="Form handling — POST/PUT/DELETE" />
              <FileRole file="schema.ts" role="Database schema — Drizzle table definition" />
            </div>
          </Step>

          {/* Step 4 */}
          <Step num="4" title="Add a new route">
            <p class="text-neutral-400 leading-relaxed mb-6">
              Use the CLI to scaffold a new route with the files you need.
            </p>
            <div class="terminal mb-6">
              <div class="terminal-header">
                <div class="terminal-dot bg-[#ff5f57]" />
                <div class="terminal-dot bg-[#febc2e]" />
                <div class="terminal-dot bg-[#28c840]" />
              </div>
              <div class="terminal-body">
                <div class="syn-cm"># Just a page</div>
                <div>
                  <span class="text-lime">$</span>{' '}
                  <span class="text-white">vibeframe new route about</span>
                </div>
                <div class="mt-3 syn-cm"># Page + form handling</div>
                <div>
                  <span class="text-lime">$</span>{' '}
                  <span class="text-white">vibeframe new route contact --action</span>
                </div>
                <div class="mt-3 syn-cm"># Page + database table</div>
                <div>
                  <span class="text-lime">$</span>{' '}
                  <span class="text-white">vibeframe new route products --schema</span>
                </div>
              </div>
            </div>
            <p class="text-sm text-neutral-500">
              Each command creates the route directory with correctly typed files.
              No boilerplate to copy-paste, no imports to guess.
            </p>
          </Step>

          {/* Step 5 */}
          <Step num="5" title="Build a feature">
            <p class="text-neutral-400 leading-relaxed mb-6">
              Here's a complete feature — a page that loads data from a database and handles form submissions.
              All in one directory.
            </p>

            <div class="space-y-4">
              <div class="code-block">
                <div class="code-block-header">
                  <div class="code-dot" /><div class="code-dot" /><div class="code-dot" />
                  <span class="ml-3 text-xs text-neutral-500 font-mono">routes/todos/schema.ts</span>
                </div>
                <pre>
<span class="syn-kw">import</span> {'{'} sqliteTable, text, integer {'}'} <span class="syn-kw">from</span> <span class="syn-str">"vibeframe"</span>;{'\n'}
{'\n'}
<span class="syn-kw">export const</span> <span class="syn-prop">todos</span> <span class="syn-op">=</span> <span class="syn-fn">sqliteTable</span>(<span class="syn-str">"todos"</span>, {'{'}{'\n'}
{'  '}<span class="syn-prop">id</span>: <span class="syn-fn">integer</span>(<span class="syn-str">"id"</span>).<span class="syn-fn">primaryKey</span>({'{'} <span class="syn-prop">autoIncrement</span>: <span class="syn-num">true</span> {'}'}),{'\n'}
{'  '}<span class="syn-prop">title</span>: <span class="syn-fn">text</span>(<span class="syn-str">"title"</span>).<span class="syn-fn">notNull</span>(),{'\n'}
{'  '}<span class="syn-prop">done</span>: <span class="syn-fn">integer</span>(<span class="syn-str">"done"</span>).<span class="syn-fn">default</span>(<span class="syn-num">0</span>),{'\n'}
{'}'});
                </pre>
              </div>

              <div class="code-block">
                <div class="code-block-header">
                  <div class="code-dot" /><div class="code-dot" /><div class="code-dot" />
                  <span class="ml-3 text-xs text-neutral-500 font-mono">routes/todos/loader.ts</span>
                </div>
                <pre>
<span class="syn-kw">import</span> {'{'} db {'}'} <span class="syn-kw">from</span> <span class="syn-str">"vibeframe"</span>;{'\n'}
<span class="syn-kw">import</span> {'{'} todos {'}'} <span class="syn-kw">from</span> <span class="syn-str">"./schema"</span>;{'\n'}
{'\n'}
<span class="syn-kw">export async function</span> <span class="syn-fn">loader</span>() {'{'}{'\n'}
{'  '}<span class="syn-kw">return</span> {'{'} <span class="syn-prop">todos</span>: db.<span class="syn-fn">select</span>().<span class="syn-fn">from</span>(todos).<span class="syn-fn">all</span>() {'}'};{'\n'}
{'}'}{'\n'}
{'\n'}
<span class="syn-kw">export type</span> <span class="syn-type">Props</span> <span class="syn-op">=</span> Awaited{'<'}ReturnType{'<'}<span class="syn-kw">typeof</span> loader{'>>'};
                </pre>
              </div>

              <div class="code-block">
                <div class="code-block-header">
                  <div class="code-dot" /><div class="code-dot" /><div class="code-dot" />
                  <span class="ml-3 text-xs text-neutral-500 font-mono">routes/todos/action.ts</span>
                </div>
                <pre>
<span class="syn-kw">import</span> {'{'} validate, z, db {'}'} <span class="syn-kw">from</span> <span class="syn-str">"vibeframe"</span>;{'\n'}
<span class="syn-kw">import</span> {'{'} todos {'}'} <span class="syn-kw">from</span> <span class="syn-str">"./schema"</span>;{'\n'}
{'\n'}
<span class="syn-kw">export async function</span> <span class="syn-fn">action</span>(<span class="syn-prop">req</span>) {'{'}{'\n'}
{'  '}<span class="syn-kw">const</span> {'{'} <span class="syn-prop">data</span>, <span class="syn-prop">errors</span> {'}'} <span class="syn-op">=</span> <span class="syn-kw">await</span> <span class="syn-fn">validate</span>(req, {'{'}{'\n'}
{'    '}<span class="syn-prop">title</span>: z.<span class="syn-fn">string</span>().<span class="syn-fn">min</span>(<span class="syn-num">1</span>, <span class="syn-str">"Title is required"</span>),{'\n'}
{'  }'});{'\n'}
{'  '}<span class="syn-kw">if</span> (errors) <span class="syn-kw">return</span> {'{'} errors {'}'};{'\n'}
{'  '}db.<span class="syn-fn">insert</span>(todos).<span class="syn-fn">values</span>(data).<span class="syn-fn">run</span>();{'\n'}
{'  '}<span class="syn-kw">return</span> {'{'} <span class="syn-prop">redirect</span>: <span class="syn-str">"/todos"</span> {'}'};{'\n'}
{'}'}
                </pre>
              </div>

              <div class="code-block">
                <div class="code-block-header">
                  <div class="code-dot" /><div class="code-dot" /><div class="code-dot" />
                  <span class="ml-3 text-xs text-neutral-500 font-mono">routes/todos/page.tsx</span>
                </div>
                <pre>
<span class="syn-kw">import</span> {'{'} Form, FieldError {'}'} <span class="syn-kw">from</span> <span class="syn-str">"vibeframe"</span>;{'\n'}
<span class="syn-kw">import type</span> {'{'} <span class="syn-type">Props</span> {'}'} <span class="syn-kw">from</span> <span class="syn-str">"./loader"</span>;{'\n'}
{'\n'}
<span class="syn-kw">export default function</span> <span class="syn-fn">TodosPage</span>({'{'} <span class="syn-prop">todos</span>, <span class="syn-prop">_actionErrors</span> {'}'}: <span class="syn-type">Props</span>) {'{'}{'\n'}
{'  '}<span class="syn-kw">return</span> ({'\n'}
{'    '}<span class="syn-tag">{'<div>'}</span>{'\n'}
{'      '}<span class="syn-tag">{'<h1>'}</span>Todos<span class="syn-tag">{'</h1>'}</span>{'\n'}
{'      '}<span class="syn-tag">{'<Form '}</span><span class="syn-attr">action</span>=<span class="syn-str">"/todos"</span><span class="syn-tag">{'>'}</span>{'\n'}
{'        '}<span class="syn-tag">{'<input '}</span><span class="syn-attr">name</span>=<span class="syn-str">"title"</span> <span class="syn-attr">placeholder</span>=<span class="syn-str">"New todo"</span> <span class="syn-tag">/{'>'}</span>{'\n'}
{'        '}<span class="syn-tag">{'<FieldError '}</span><span class="syn-attr">name</span>=<span class="syn-str">"title"</span> <span class="syn-attr">errors</span>=<span class="syn-punc">{'{'}</span>_actionErrors<span class="syn-punc">{'}'}</span> <span class="syn-tag">/{'>'}</span>{'\n'}
{'        '}<span class="syn-tag">{'<button '}</span><span class="syn-attr">type</span>=<span class="syn-str">"submit"</span><span class="syn-tag">{'>'}</span>Add<span class="syn-tag">{'</button>'}</span>{'\n'}
{'      '}<span class="syn-tag">{'</Form>'}</span>{'\n'}
{'      '}{'{'}todos.<span class="syn-fn">map</span>(t <span class="syn-op">=></span> <span class="syn-tag">{'<p '}</span><span class="syn-attr">key</span>=<span class="syn-punc">{'{'}</span>t.id<span class="syn-punc">{'}'}</span><span class="syn-tag">{'>'}</span>{'{'}t.title{'}'}<span class="syn-tag">{'</p>'}</span>){'}'}{'\n'}
{'    '}<span class="syn-tag">{'</div>'}</span>{'\n'}
{'  '});{'\n'}
{'}'}
                </pre>
              </div>
            </div>
          </Step>

          {/* Step 6 */}
          <Step num="6" title="Deploy">
            <p class="text-neutral-400 leading-relaxed mb-6">
              Build a 184MB Docker image and run it anywhere.
            </p>
            <div class="terminal mb-4">
              <div class="terminal-header">
                <div class="terminal-dot bg-[#ff5f57]" />
                <div class="terminal-dot bg-[#febc2e]" />
                <div class="terminal-dot bg-[#28c840]" />
              </div>
              <div class="terminal-body">
                <div>
                  <span class="text-lime">$</span>{' '}
                  <span class="text-white">docker build -t my-app .</span>
                </div>
                <div>
                  <span class="text-lime">$</span>{' '}
                  <span class="text-white">docker run -p 3000:3000 my-app</span>
                </div>
              </div>
            </div>
            <p class="text-sm text-neutral-500">
              A Dockerfile is included in every generated project. Alpine-based, multi-stage build, production-ready.
            </p>
          </Step>

          {/* CLI Reference */}
          <div class="mt-20 pt-16 border-t border-border-1">
            <h2 class="font-display font-700 text-2xl tracking-tight mb-8">
              CLI Reference
            </h2>
            <div class="space-y-3">
              <CliCommand cmd="bunx vibeframe create my-app" desc="Create a new project" />
              <CliCommand cmd="bun run dev" desc="Start dev server with live reload" />
              <CliCommand cmd="bun run build" desc="Production build" />
              <CliCommand cmd="bun run start" desc="Serve production build" />
              <CliCommand cmd="vibeframe new route <name>" desc="Scaffold a new route" />
              <CliCommand cmd="vibeframe new route <name> --action" desc="Route with form handling" />
              <CliCommand cmd="vibeframe new route <name> --schema" desc="Route with database table" />
              <CliCommand cmd="bun run routes" desc="List all routes and their files" />
            </div>
          </div>

          {/* What's Included */}
          <div class="mt-20 pt-16 border-t border-border-1">
            <h2 class="font-display font-700 text-2xl tracking-tight mb-8">
              What's Included
            </h2>
            <div class="grid sm:grid-cols-2 gap-4">
              <IncludedItem title="Preact" desc="3KB, React-compatible, SSR + hydration" />
              <IncludedItem title="Drizzle + SQLite" desc="Define a schema, get a table, query with types" />
              <IncludedItem title="Tailwind CSS" desc="No config needed, just use classes" />
              <IncludedItem title="Form Validation" desc="validate() with Zod — parsing, validation, and typing in one call" />
              <IncludedItem title="Live Reload" desc="Edit a file, see it instantly in the browser" />
              <IncludedItem title="Structured Errors" desc="Every error tells you exactly how to fix it" />
              <IncludedItem title="Route Validation" desc="Catches wrong exports on dev startup" />
              <IncludedItem title="CLAUDE.md" desc="AI conventions included in every project" />
            </div>
          </div>

          {/* Next Steps */}
          <div class="mt-20 pt-16 border-t border-border-1 pb-20">
            <h2 class="font-display font-700 text-2xl tracking-tight mb-4">
              Next Steps
            </h2>
            <p class="text-neutral-400 leading-relaxed mb-8">
              You're set up. Here's where to go from here:
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/gtmetric/vibeframe"
                class="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#050505] bg-lime px-6 py-3 rounded-md hover:bg-lime-dim transition-colors"
                target="_blank"
                rel="noopener"
              >
                View Source on GitHub
                <span class="text-xs">→</span>
              </a>
              <a
                href="https://github.com/gtmetric/vibeframe/blob/master/CLAUDE.md"
                class="inline-flex items-center justify-center gap-2 text-sm font-medium text-neutral-400 border border-border-2 px-6 py-3 rounded-md hover:text-white hover:border-neutral-600 transition-colors"
                target="_blank"
                rel="noopener"
              >
                Read the Docs (CLAUDE.md)
              </a>
            </div>
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

function Step({ num, title, children }: { num: string; title: string; children: any }) {
  return (
    <div class="mb-16">
      <div class="flex items-start gap-4 mb-6">
        <span class="shrink-0 w-8 h-8 rounded-full bg-lime/10 border border-lime/20 flex items-center justify-center font-mono text-sm text-lime font-semibold">
          {num}
        </span>
        <h2 class="font-display font-700 text-xl md:text-2xl tracking-tight pt-0.5">
          {title}
        </h2>
      </div>
      <div class="pl-12">
        {children}
      </div>
    </div>
  );
}

function FileRole({ file, role }: { file: string; role: string }) {
  return (
    <div class="rounded-md border border-border-1 bg-surface-2 px-4 py-3 flex items-center gap-3">
      <span class="font-mono text-xs text-lime shrink-0">{file}</span>
      <span class="text-xs text-neutral-500">{role}</span>
    </div>
  );
}

function CliCommand({ cmd, desc }: { cmd: string; desc: string }) {
  return (
    <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3 border-b border-border-1">
      <code class="font-mono text-sm text-white shrink-0">{cmd}</code>
      <span class="text-sm text-neutral-500">{desc}</span>
    </div>
  );
}

function IncludedItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div class="feature-card rounded-lg border border-border-1 bg-surface p-5">
      <h3 class="font-display font-600 text-sm text-white mb-1">{title}</h3>
      <p class="text-sm text-neutral-500">{desc}</p>
    </div>
  );
}
