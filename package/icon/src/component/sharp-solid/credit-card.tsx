
import { Icon } from "../../index";

/**
 * A component that renders the `credit-card` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card?s=sharp-solid credit-card}
 * @preview ![credit-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/credit-card.svg)
 */
const CreditCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 32L0 32l0 96 576 0 0-96zm0 192L0 224 0 480l576 0 0-256zM192 352l0 32-96 0 0-32 96 0zm32 0l160 0 0 32-160 0 0-32z" />
    </Icon>
);

export default CreditCard;