
import { Icon } from "../../index";

/**
 * A component that renders the `block-quote` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-quote?s=thin block-quote}
 * @preview ![block-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/block-quote.svg)
 */
const BlockQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M8 88c-4.4 0-8 3.6-8 8s3.6 8 8 8l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 88zM136 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l304 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-304 0zm-8 168c0 4.4 3.6 8 8 8l304 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-304 0c-4.4 0-8 3.6-8 8zM0 440c0 4.4 3.6 8 8 8s8-3.6 8-8l0-208c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 440z" />
    </Icon>
);

export default BlockQuote;