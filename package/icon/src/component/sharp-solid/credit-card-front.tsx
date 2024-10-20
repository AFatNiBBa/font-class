
import { Icon } from "../../index";

/**
 * A component that renders the `credit-card-front` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card-front?s=sharp-solid credit-card-front}
 * @preview ![credit-card-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/credit-card-front.svg)
 */
const CreditCardFront: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 32l576 0 0 448L0 480 0 32zM480 288L96 288l0 32 384 0 0-32zM96 352l0 32 96 0 0-32-96 0zm128 0l0 32 160 0 0-32-160 0zM512 96L384 96l0 96 128 0 0-96z" />
    </Icon>
);

export default CreditCardFront;