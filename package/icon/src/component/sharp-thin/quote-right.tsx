
import { Icon } from "../../index";

/**
 * A component that renders the `quote-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quote-right?s=sharp-thin quote-right}
 * @preview ![quote-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/quote-right.svg)
 */
const QuoteRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 296c0 66.3-53.7 120-120 120l-16 0-8 0 0-16 8 0 16 0c57.4 0 104-46.6 104-104l0-8-160 0-16 0 0-16 0-160 0-16 16 0 160 0 16 0 0 16 0 88 0 72 0 16 0 8zm-16-96l0-88-160 0 0 160 160 0 0-72zM192 296c0 66.3-53.7 120-120 120l-16 0-8 0 0-16 8 0 16 0c57.4 0 104-46.6 104-104l0-8L16 288 0 288l0-16L0 112 0 96l16 0 160 0 16 0 0 16 0 88 0 72 0 16 0 8zm-16-96l0-88L16 112l0 160 160 0 0-72z" />
    </Icon>
);

export default QuoteRight;