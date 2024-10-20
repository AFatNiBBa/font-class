
import { Icon } from "../../index";

/**
 * A component that renders the `quote-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quote-left?s=sharp-light quote-left}
 * @preview ![quote-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/quote-left.svg)
 */
const QuoteLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 208C0 146.1 50.1 96 112 96l32 0 16 0 0 32-16 0-32 0c-44.2 0-80 35.8-80 80l0 16 128 0 32 0 0 32 0 128 0 32-32 0L32 416 0 416l0-32 0-64 0-64 0-32 0-16zm32 48l0 64 0 64 128 0 0-128L32 256zm384 0l-128 0 0 64 0 64 128 0 0-128zM256 320l0-64 0-32 0-16c0-61.9 50.1-112 112-112l32 0 16 0 0 32-16 0-32 0c-44.2 0-80 35.8-80 80l0 16 128 0 32 0 0 32 0 128 0 32-32 0-128 0-32 0 0-32 0-64z" />
    </Icon>
);

export default QuoteLeft;