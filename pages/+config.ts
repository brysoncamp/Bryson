import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "Bryson Camp | Web Developer",
  description: "Junior full stack developer skilled in JavaScript, TypeScript, React, Node.js, and AWS. Passionate about building creative, scalable web apps.",

  // Enable SSG for all pages
  prerender: true,

  extends: vikeReact,
} satisfies Config;
