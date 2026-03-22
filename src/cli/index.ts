/**
 * Vibeframe CLI — command parser.
 */

const [, , command, ...args] = process.argv;

switch (command) {
  case "dev": {
    const { createApp } = await import("../server/app.ts");
    const port = parseInt(args[0] ?? "3000", 10);
    await createApp({ port });
    break;
  }

  case "build": {
    const { build } = await import("../build/builder.ts");
    console.log("\n  Vibeframe build\n");
    await build();
    console.log("\n  Build complete!\n");
    break;
  }

  case "start": {
    const { createApp } = await import("../server/app.ts");
    const port = parseInt(process.env.PORT ?? args[0] ?? "3000", 10);
    await createApp({ port, hostname: "0.0.0.0" });
    break;
  }

  case "routes": {
    const { listRoutes } = await import("./list-routes.ts");
    await listRoutes();
    break;
  }

  case "create": {
    const projectName = args[0];
    if (!projectName) {
      console.error("  Usage: vibeframe create <project-name>");
      process.exit(1);
    }
    const { createProject } = await import("./create.ts");
    await createProject(projectName);
    break;
  }

  case "export": {
    const { exportSite } = await import("./export.ts");
    await exportSite();
    break;
  }

  case "new": {
    const subcommand = args[0];
    if (subcommand === "route") {
      const routePath = args[1];
      if (!routePath) {
        console.error("  Usage: vibeframe new route <path> [--action] [--schema]");
        process.exit(1);
      }
      const { newRoute } = await import("./new-route.ts");
      await newRoute(routePath, {
        loader: true,
        action: args.includes("--action"),
        schema: args.includes("--schema"),
      });
    } else {
      console.error(`  Unknown: vibeframe new ${subcommand ?? ""}`);
      console.error("  Available: vibeframe new route <path>");
    }
    break;
  }

  default:
    console.log(`
  Vibeframe — An AI-optimal full-stack framework

  Getting started:
    vibeframe create <project-name>            Create a new project

  Development:
    bun run dev [port]                    Start development server
    bun run build                         Build for production
    bun run start [port]                  Serve production build
    vibeframe export                           Export static HTML to dist/

  Route tools:
    vibeframe routes                           List all routes with their files
    vibeframe new route <path>                 Scaffold a new route
      --action                            Include action.ts
      --schema                            Include schema.ts

  Examples:
    vibeframe create my-app
    vibeframe new route products
    vibeframe new route orders --action --schema
`);
}
