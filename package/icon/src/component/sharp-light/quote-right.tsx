
import { Icon } from "../../index";

/**
 * A component that renders the `quote-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quote-right?s=sharp-light quote-right}
 * @preview ![quote-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/quote-right.svg)
 */
const QuoteRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 304c0 61.9-50.1 112-112 112l-32 0-16 0 0-32 16 0 32 0c44.2 0 80-35.8 80-80l0-16-128 0-32 0 0-32 0-128 0-32 32 0 128 0 32 0 0 32 0 64 0 64 0 32 0 16zm-32-48l0-64 0-64-128 0 0 128 128 0zM32 256l128 0 0-64 0-64L32 128l0 128zm160-64l0 64 0 32 0 16c0 61.9-50.1 112-112 112l-32 0-16 0 0-32 16 0 32 0c44.2 0 80-35.8 80-80l0-16L32 288 0 288l0-32L0 128 0 96l32 0 128 0 32 0 0 32 0 64z" />
    </Icon>
);

export default QuoteRight;