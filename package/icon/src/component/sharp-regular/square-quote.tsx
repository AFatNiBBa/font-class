
import { Icon } from "../../index";

/**
 * A component that renders the `square-quote` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quote?s=sharp-regular square-quote}
 * @preview ![square-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-quote.svg)
 */
const SquareQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 352L48 432 48 80l352 0zM48 32L0 32 0 80 0 432l0 48 48 0 352 0 48 0 0-48 0-352 0-48-48 0L48 32zM208 160L96 160l0 112 64 0 0 8c0 13.3-10.7 24-24 24l-24 0 0 48 24 0c39.8 0 72-32.2 72-72l0-8 0-56 0-24 0-32zm32 0l0 112 64 0 0 8c0 13.3-10.7 24-24 24l-24 0 0 48 24 0c39.8 0 72-32.2 72-72l0-8 0-56 0-24 0-32-112 0z" />
    </Icon>
);

export default SquareQuote;