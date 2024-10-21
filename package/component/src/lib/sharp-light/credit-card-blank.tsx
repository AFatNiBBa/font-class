
import { Icon } from "../../index";

/**
 * A component that renders the `credit-card-blank` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card-blank?s=sharp-light credit-card-blank}
 * @preview ![credit-card-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/credit-card-blank.svg)
 */
const CreditCardBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 64l0 384 512 0 0-384L32 64zM0 32l32 0 512 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM96 352l96 0 0 32-96 0 0-32zm128 0l160 0 0 32-160 0 0-32z" />
    </Icon>
);

export default CreditCardBlank;