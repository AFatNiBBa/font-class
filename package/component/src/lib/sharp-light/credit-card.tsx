
import { Icon } from "../../index";

/**
 * A component that renders the `credit-card` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card?s=sharp-light credit-card}
 * @preview ![credit-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/credit-card.svg)
 */
const CreditCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 64l0 64 512 0 0-64L32 64zm0 96l0 64 512 0 0-64L32 160zm0 96l0 192 512 0 0-192L32 256zM0 32l32 0 512 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM96 352l96 0 0 32-96 0 0-32zm128 0l160 0 0 32-160 0 0-32z" />
    </Icon>
);

export default CreditCard;