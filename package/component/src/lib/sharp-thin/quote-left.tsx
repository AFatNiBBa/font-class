
import { Icon } from "../../index";

/**
 * A component that renders the `quote-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quote-left?s=sharp-thin quote-left}
 * @preview ![quote-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/quote-left.svg)
 */
const QuoteLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 216C0 149.7 53.7 96 120 96l16 0 8 0 0 16-8 0-16 0C62.6 112 16 158.6 16 216l0 8 160 0 16 0 0 16 0 160 0 16-16 0L16 416 0 416l0-16 0-88 0-72 0-16 0-8zm16 96l0 88 160 0 0-160L16 240l0 72zm240-96c0-66.3 53.7-120 120-120l16 0 8 0 0 16-8 0-16 0c-57.4 0-104 46.6-104 104l0 8 160 0 16 0 0 16 0 160 0 16-16 0-160 0-16 0 0-16 0-88 0-72 0-16 0-8zm16 96l0 88 160 0 0-160-160 0 0 72z" />
    </Icon>
);

export default QuoteLeft;