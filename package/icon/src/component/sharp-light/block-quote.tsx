
import { Icon } from "../../index";

/**
 * A component that renders the `block-quote` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-quote?s=sharp-light block-quote}
 * @preview ![block-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/block-quote.svg)
 */
const BlockQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 80L0 80l0 32 16 0 416 0 16 0 0-32-16 0L16 80zM144 240l-16 0 0 32 16 0 288 0 16 0 0-32-16 0-288 0zM128 400l0 32 16 0 288 0 16 0 0-32-16 0-288 0-16 0zM0 432l0 16 32 0 0-16 0-192 0-16L0 224l0 16L0 432z" />
    </Icon>
);

export default BlockQuote;