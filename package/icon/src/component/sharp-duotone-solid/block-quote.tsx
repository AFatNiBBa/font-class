
import { Icon, generic } from "../../index";

/**
 * A component that renders the `block-quote` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-quote?s=sharp-duotone-solid block-quote}
 * @preview ![block-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/block-quote.svg)
 */
const BlockQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64l448 0 0 64L0 128 0 64zM128 224l320 0 0 64-320 0 0-64zm0 160l320 0 0 64-320 0 0-64z" />
        <path d="M0 224H64V448H0V224z" />
    </Icon>
);

export default BlockQuote;