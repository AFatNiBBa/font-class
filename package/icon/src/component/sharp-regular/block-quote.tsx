
import { Icon } from "../../index";

/**
 * A component that renders the `block-quote` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-quote?s=sharp-regular block-quote}
 * @preview ![block-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/block-quote.svg)
 */
const BlockQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 72L0 72l0 48 24 0 400 0 24 0 0-48-24 0L24 72zM152 232l-24 0 0 48 24 0 272 0 24 0 0-48-24 0-272 0zM128 392l0 48 24 0 272 0 24 0 0-48-24 0-272 0-24 0zM0 424l0 24 48 0 0-24 0-176 0-24L0 224l0 24L0 424z" />
    </Icon>
);

export default BlockQuote;