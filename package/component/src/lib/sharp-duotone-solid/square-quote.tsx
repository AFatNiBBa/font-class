
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-quote` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quote?s=sharp-duotone-solid square-quote}
 * @preview ![square-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-quote.svg)
 */
const SquareQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM96 160l0 112 64 0 0 8c0 13.3-10.7 24-24 24l-24 0 0 48 24 0c39.8 0 72-32.2 72-72l0-8 0-56 0-24 0-32L96 160zm144 0l0 112 64 0 0 8c0 13.3-10.7 24-24 24l-24 0 0 48 24 0c39.8 0 72-32.2 72-72l0-8 0-56 0-24 0-32-112 0z" />
        <path d="M96 160l112 0 0 32 0 24 0 56 0 8c0 39.8-32.2 72-72 72l-24 0 0-48 24 0c13.3 0 24-10.7 24-24l0-8-64 0 0-112zm144 0l112 0 0 32 0 24 0 56 0 8c0 39.8-32.2 72-72 72l-24 0 0-48 24 0c13.3 0 24-10.7 24-24l0-8-64 0 0-112z" />
    </Icon>
);

export default SquareQuote;