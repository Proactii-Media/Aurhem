import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Aurhem" }, { name: "description", content: "Aurhem" }];
}

export default function Home() {
  return (
    <div>
      <h1 className="text-primary">aurhem</h1>
      <p className="text-secondary">aurhem</p>
      <p className="text-tertiary">aurhem</p>
      <p className="text-quaternary">aurhem</p>
    </div>
  );
}
