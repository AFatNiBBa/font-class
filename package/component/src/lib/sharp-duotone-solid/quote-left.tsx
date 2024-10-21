
import { Icon, generic } from "../../index";

/**
 * A component that renders the `quote-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quote-left?s=sharp-duotone-solid quote-left}
 * @preview ![quote-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/quote-left.svg)
 */
const QuoteLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M256 216l0 8 0 96 0 96 192 0 0-192-128 0 0-8c0-30.9 25.1-56 56-56l8 0 32 0 0-64-32 0-8 0c-66.3 0-120 53.7-120 120z" />
        <path d="M120 96C53.7 96 0 149.7 0 216l0 8 0 96 0 96 192 0 0-192L64 224l0-8c0-30.9 25.1-56 56-56l8 0 32 0 0-64-32 0-8 0z" />
    </Icon>
);

export default QuoteLeft;