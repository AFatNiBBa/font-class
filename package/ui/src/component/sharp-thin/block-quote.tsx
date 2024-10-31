
import { Icon } from "../../index";

/**
 * A component that renders the `block-quote` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-quote?s=sharp-thin block-quote}
 * @preview ![block-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/block-quote.svg)
 */
const BlockQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M8 88L0 88l0 16 8 0 432 0 8 0 0-16-8 0L8 88zM136 248l-8 0 0 16 8 0 304 0 8 0 0-16-8 0-304 0zm-8 160l0 16 8 0 304 0 8 0 0-16-8 0-304 0-8 0zM0 440l0 8 16 0 0-8 0-208 0-8L0 224l0 8L0 440z" />
    </Icon>
);

export default BlockQuote;