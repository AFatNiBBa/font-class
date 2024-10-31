
import { Icon } from "../../index";

/**
 * A component that renders the `block-quote` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-quote?s=regular block-quote}
 * @preview ![block-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/block-quote.svg)
 */
const BlockQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 72C10.7 72 0 82.7 0 96s10.7 24 24 24l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 72zM152 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-272 0zM128 416c0 13.3 10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-272 0c-13.3 0-24 10.7-24 24zM0 424c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176c0-13.3-10.7-24-24-24s-24 10.7-24 24L0 424z" />
    </Icon>
);

export default BlockQuote;