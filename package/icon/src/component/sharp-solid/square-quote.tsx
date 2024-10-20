
import { Icon } from "../../index";

/**
 * A component that renders the `square-quote` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quote?s=sharp-solid square-quote}
 * @preview ![square-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-quote.svg)
 */
const SquareQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 448L0 480 0 32zM208 160L96 160l0 112 64 0 0 8c0 13.3-10.7 24-24 24l-24 0 0 48 24 0c39.8 0 72-32.2 72-72l0-8 0-56 0-24 0-32zm32 0l0 112 64 0 0 8c0 13.3-10.7 24-24 24l-24 0 0 48 24 0c39.8 0 72-32.2 72-72l0-8 0-56 0-24 0-32-112 0z" />
    </Icon>
);

export default SquareQuote;