
import { Icon } from "../../index";

/**
 * A component that renders the `square-quote` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quote?s=solid square-quote}
 * @preview ![square-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-quote.svg)
 */
const SquareQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 128l48 0c17.7 0 32 14.3 32 32l0 24 0 24 0 39.3c0 35.2-25.4 65.2-60.2 71l-7.9 1.3c-13.1 2.2-25.4-6.7-27.6-19.7s6.7-25.4 19.7-27.6l7.9-1.3c11.6-1.9 20.1-11.9 20.1-23.7l0-7.3-32 0c-17.7 0-32-14.3-32-32l0-48c0-17.7 14.3-32 32-32zm224 80l0 39.3c0 35.2-25.4 65.2-60.2 71l-7.9 1.3c-13.1 2.2-25.4-6.7-27.6-19.7s6.7-25.4 19.7-27.6l7.9-1.3c11.6-1.9 20.1-11.9 20.1-23.7l0-7.3-32 0c-17.7 0-32-14.3-32-32l0-48c0-17.7 14.3-32 32-32l48 0c17.7 0 32 14.3 32 32l0 24 0 24z" />
    </Icon>
);

export default SquareQuote;