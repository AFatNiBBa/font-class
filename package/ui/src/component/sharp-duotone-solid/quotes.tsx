
import { Icon, generic } from "../../index";

/**
 * A component that renders the `quotes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quotes?s=sharp-duotone-solid quotes}
 * @preview ![quotes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/quotes.svg)
 */
const Quotes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M256 272l0 144 80 0 0 8c0 13.3-10.7 24-24 24l-8 0-32 0 0 64 32 0 8 0c48.6 0 88-39.4 88-88l0-8 0-72 0-72-144 0zm176 0l0 144 80 0 0 8c0 13.3-10.7 24-24 24l-8 0-32 0 0 64 32 0 8 0c48.6 0 88-39.4 88-88l0-8 0-72 0-72-144 0z" />
        <path d="M0 88C0 39.4 39.4 0 88 0l8 0 32 0 0 64L96 64l-8 0C74.7 64 64 74.7 64 88l0 8 80 0 0 144L0 240l0-72L0 96l0-8zm176 0c0-48.6 39.4-88 88-88l8 0 32 0 0 64-32 0-8 0c-13.3 0-24 10.7-24 24l0 8 80 0 0 144-144 0 0-72 0-72 0-8z" />
    </Icon>
);

export default Quotes;