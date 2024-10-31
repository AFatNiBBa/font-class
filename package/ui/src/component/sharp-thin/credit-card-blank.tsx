
import { Icon } from "../../index";

/**
 * A component that renders the `credit-card-blank` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card-blank?s=sharp-thin credit-card-blank}
 * @preview ![credit-card-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/credit-card-blank.svg)
 */
const CreditCardBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 48l0 416 544 0 0-416L16 48zM0 32l16 0 544 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM96 352l96 0 0 16-96 0 0-16zm128 0l160 0 0 16-160 0 0-16z" />
    </Icon>
);

export default CreditCardBlank;