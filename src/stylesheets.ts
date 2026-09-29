import { at_keyframes, css } from "@thi.ng/hiccup-css";

/**
 * Design tokens as CSS custom properties on `:root`.
 */
const tokens = [
  ":root",
  {
    "--color-bg": "#ece9e2",
    "--color-surface": "#fbfaf7",
    "--color-border": "#dcd7cc",
    "--color-text": "#37332b",
    "--color-text-muted": "#8b8577",
    "--color-primary": "#3d6a58",
    "--color-primary-hover": "#31584a",
    "--color-success": "#4c7a5b",
    "--color-success-hover": "#40684d",
    "--color-error": "#b0532f",
    "--color-error-hover": "#97462a",
    "--color-ghost-hover": "#e4e0d5",
    "--radius-btn": "0.375rem",
    "--radius-card": "0.75rem",
  },
];

/**
 * Element class rules shared by the layout and todo views.
 */
const classes = [
  [
    ".todo-page",
    {
      display: "flex",
      "min-height": "100vh",
      "align-items": "center",
      "justify-content": "center",
      padding: "2rem 1rem",
    },
  ],
  [
    ".todo-stack",
    {
      display: "flex",
      "flex-direction": "column",
      gap: "1.5rem",
      width: "100%",
      "max-width": "36rem",
    },
  ],
  [
    ".todo-heading",
    { "font-size": "1.875rem", "font-weight": 700, "text-align": "center" },
  ],
  [
    ".todo-card",
    {
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      "border-radius": "var(--radius-card)",
      padding: "1rem 1.25rem",
      "box-shadow": "0 4px 12px rgba(55, 51, 43, 0.08)",
      transition:
        "box-shadow 200ms ease, opacity 200ms ease, transform 200ms ease",
    },
    ["&:hover", { "box-shadow": "0 6px 16px rgba(55, 51, 43, 0.14)" }],
    // HTMX request/settle states for cards being mutated.
    ["&.htmx-request", { opacity: 0.35, transform: "translateX(0.5rem)" }],
    ["&.htmx-swapping", { opacity: 0, transform: "translateX(0.5rem)" }],
  ],
  [
    ".todo-card-row",
    {
      display: "flex",
      "flex-direction": "row",
      "align-items": "center",
      gap: "1rem",
    },
  ],
  [
    ".todo-title",
    { flex: 1, margin: 0, "font-size": "0.875rem", "font-weight": 500 },
    ["&.is-completed", { "text-decoration": "line-through", opacity: 0.5 }],
  ],
  [".todo-actions", { display: "flex", "flex-wrap": "nowrap", gap: "0.75rem" }],
  [".todo-form", { display: "flex", gap: "0.5rem" }],
  [
    ".todo-input",
    {
      flex: 1,
      padding: "0.5rem 0.75rem",
      "font-size": "0.875rem",
      color: "var(--color-text)",
      background: "var(--color-bg)",
      border: "1px solid var(--color-border)",
      "border-radius": "var(--radius-btn)",
    },
    ["&:focus-visible", { outline: "2px solid var(--color-primary)" }],
  ],
  [
    ".todo-btn",
    {
      display: "inline-block",
      padding: "0.5rem 1rem",
      "font-size": "0.875rem",
      "font-weight": 500,
      "line-height": 1.25,
      "text-align": "center",
      color: "var(--color-text)",
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      "border-radius": "var(--radius-btn)",
      cursor: "pointer",
      transition: "background 150ms ease",
    },
    ["&:disabled", { opacity: 0.5, cursor: "default" }],
    [
      "&.todo-btn-primary",
      {
        color: "#fbfaf7",
        background: "var(--color-primary)",
        "border-color": "var(--color-primary)",
      },
      ["&:hover", { background: "var(--color-primary-hover)" }],
    ],
    [
      "&.todo-btn-success",
      {
        color: "#fbfaf7",
        background: "var(--color-success)",
        "border-color": "var(--color-success)",
      },
      ["&:hover", { background: "var(--color-success-hover)" }],
    ],
    [
      "&.todo-btn-error",
      {
        color: "#fbfaf7",
        background: "var(--color-error)",
        "border-color": "var(--color-error)",
      },
      ["&:hover", { background: "var(--color-error-hover)" }],
    ],
    [
      "&.todo-btn-ghost",
      {
        "font-size": "0.8125rem",
        padding: "0.375rem 0.75rem",
        color: "var(--color-text-muted)",
        background: "transparent",
        "border-color": "transparent",
      },
      [
        "&:hover",
        { color: "var(--color-text)", background: "var(--color-ghost-hover)" },
      ],
    ],
  ],
  [
    ".todo-list",
    {
      display: "flex",
      "flex-direction": "column",
      gap: "0.75rem",
      "margin-top": "0.75rem",
    },
  ],
  [
    ".skeleton",
    {
      "border-radius": "var(--radius-btn)",
      background: "var(--color-border)",
      animation: "skeleton-pulse 1.5s ease-in-out infinite",
    },
  ],
  // The add-pending skeleton is hidden until HTMX marks it as requesting.
  [
    "#todo-add-pending-skeleton",
    { display: "none" },
    ["&.htmx-request", { display: "block" }],
  ],
];

/**
 * Base resets, layout shell, class rules, and skeleton styles serialized to a
 * single minified stylesheet string.
 */
export const globalStylesheet = css([
  tokens,
  ["*", { margin: 0, padding: 0, "box-sizing": "border-box" }],
  [
    "body",
    {
      "font-family": "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      "line-height": 1.5,
      color: "var(--color-text)",
      background: "var(--color-bg)",
      "-webkit-font-smoothing": "antialiased",
    },
  ],
  classes,
  at_keyframes("skeleton-pulse", {
    0: { opacity: 1 },
    50: { opacity: 0.4 },
    100: { opacity: 1 },
  }),
]);
