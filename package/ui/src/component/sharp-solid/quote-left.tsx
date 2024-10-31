
import { Icon } from "../../index";

/**
 * A component that renders the `quote-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quote-left?s=sharp-solid quote-left}
 * @preview ![quote-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/quote-left.svg)
 */
const QuoteLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 216C0 149.7 53.7 96 120 96l8 0 32 0 0 64-32 0-8 0c-30.9 0-56 25.1-56 56l0 8 128 0 0 192L0 416l0-96 0-96 0-8zm256 0c0-66.3 53.7-120 120-120l8 0 32 0 0 64-32 0-8 0c-30.9 0-56 25.1-56 56l0 8 128 0 0 192-192 0 0-96 0-96 0-8z" />
    </Icon>
);

export default QuoteLeft;