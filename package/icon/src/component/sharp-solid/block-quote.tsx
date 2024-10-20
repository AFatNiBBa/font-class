
import { Icon } from "../../index";

/**
 * A component that renders the `block-quote` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-quote?s=sharp-solid block-quote}
 * @preview ![block-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/block-quote.svg)
 */
const BlockQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 64L0 64l0 64 448 0 0-64zm0 160l-320 0 0 64 320 0 0-64zM128 384l0 64 320 0 0-64-320 0zM64 224L0 224 0 448l64 0 0-224z" />
    </Icon>
);

export default BlockQuote;