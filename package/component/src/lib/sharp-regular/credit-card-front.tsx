
import { Icon } from "../../index";

/**
 * A component that renders the `credit-card-front` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card-front?s=sharp-regular credit-card-front}
 * @preview ![credit-card-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/credit-card-front.svg)
 */
const CreditCardFront: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 80l0 352 480 0 0-352L48 80zM0 32l48 0 480 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM96 336l96 0 0 48-96 0 0-48zm128 0l160 0 0 48-160 0 0-48zM96 256l384 0 0 48L96 304l0-48zM480 128l0 96-128 0 0-96 128 0z" />
    </Icon>
);

export default CreditCardFront;