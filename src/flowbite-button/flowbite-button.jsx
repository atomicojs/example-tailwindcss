import { c, css } from "atomico";
import tailwindcss from "../tailwindcss.css";

function button() {
  return (
    <host shadowDom>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <slot></slot>
      </button>
    </host>
  );
}

button.props = {
  myProp: String,
};

console.log(tailwindcss);

button.styles = [
  tailwindcss,
  css`
    :host {
      display: block;
    }
  `,
];

export const Button = c(button);

customElements.define("flowbite-button", Button);
