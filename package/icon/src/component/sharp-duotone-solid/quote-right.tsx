
import { Icon, generic } from "../../index";

/**
 * A component that renders the `quote-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quote-right?s=sharp-duotone-solid quote-right}
 * @preview ![quote-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/quote-right.svg)
 */
const QuoteRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 288l128 0 0 8c0 30.9-25.1 56-56 56l-8 0-32 0 0 64 32 0 8 0c66.3 0 120-53.7 120-120l0-8 0-96 0-96L0 96z" />
        <path d="M328 416c66.3 0 120-53.7 120-120l0-8 0-96 0-96L256 96l0 192 128 0 0 8c0 30.9-25.1 56-56 56l-8 0-32 0 0 64 32 0 8 0z" />
    </Icon>
);

export default QuoteRight;