
import { Icon, generic } from "../../index";

/**
 * A component that renders the `quote-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quote-left?s=duotone quote-left}
 * @preview ![quote-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/quote-left.svg)
 */
const QuoteLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M256 216l0 72 0 32 0 32c0 35.3 28.7 64 64 64l64 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64l-64 0 0-8c0-30.9 25.1-56 56-56l8 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-8 0c-66.3 0-120 53.7-120 120z" />
        <path d="M120 96C53.7 96 0 149.7 0 216l0 72 0 32 0 32c0 35.3 28.7 64 64 64l64 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64l-64 0 0-8c0-30.9 25.1-56 56-56l8 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-8 0z" />
    </Icon>
);

export default QuoteLeft;