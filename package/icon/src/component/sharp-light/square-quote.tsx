
import { Icon } from "../../index";

/**
 * A component that renders the `square-quote` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quote?s=sharp-light square-quote}
 * @preview ![square-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-quote.svg)
 */
const SquareQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 384L32 448 32 64l384 0zM32 32L0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32zM208 288l0-16 0-32 0-24 0-24 0-32-32 0-48 0-32 0 0 32 0 48 0 32 32 0 48 0 0 16c0 17.7-14.3 32-32 32l-16 0-16 0 0 32 16 0 16 0c35.3 0 64-28.7 64-64zm-32-48l-48 0 0-48 48 0 0 24 0 24zm176 32l0-32 0-24 0-24 0-32-32 0-48 0-32 0 0 32 0 48 0 32 32 0 48 0 0 16c0 17.7-14.3 32-32 32l-16 0-16 0 0 32 16 0 16 0c35.3 0 64-28.7 64-64l0-16zm-32-56l0 24-48 0 0-48 48 0 0 24z" />
    </Icon>
);

export default SquareQuote;