import { c, css } from "atomico";
import tailwindcss from "../tailwindcss.css";

function tailwindcssHero() {
  return (
    <host shadowDom>
      <div
        class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
        role="alert"
      >
        <span class="font-medium">Info alert!</span> Change a few things up and
        try submitting again.
      </div>
    </host>
  );
}

tailwindcssHero.props = {
  myProp: String,
};

tailwindcssHero.styles = [
  tailwindcss,
  css`
    :host {
      display: block;
    }
  `,
];

export const TailwindcssHero = c(tailwindcssHero);

customElements.define("flowbite-alert", TailwindcssHero);
