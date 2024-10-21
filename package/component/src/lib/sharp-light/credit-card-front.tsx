
import { Icon } from "../../index";

/**
 * A component that renders the `credit-card-front` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card-front?s=sharp-light credit-card-front}
 * @preview ![credit-card-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/credit-card-front.svg)
 */
const CreditCardFront: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 64l0 384L32 448 32 64l512 0zM32 32L0 32 0 64 0 448l0 32 32 0 512 0 32 0 0-32 0-384 0-32-32 0L32 32zM96 288l0 32 384 0 0-32L96 288zm0 64l0 32 96 0 0-32-96 0zm288 0l-160 0 0 32 160 0 0-32zm8-208l80 0 0 64-80 0 0-64zm-32-32l0 32 0 64 0 32 32 0 80 0 32 0 0-32 0-64 0-32-32 0-80 0-32 0z" />
    </Icon>
);

export default CreditCardFront;