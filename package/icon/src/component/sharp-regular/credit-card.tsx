
import { Icon } from "../../index";

/**
 * A component that renders the `credit-card` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card?s=sharp-regular credit-card}
 * @preview ![credit-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/credit-card.svg)
 */
const CreditCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 80l0 48L48 128l0-48 480 0zm0 144l0 208L48 432l0-208 480 0zM48 32L0 32 0 80 0 432l0 48 48 0 480 0 48 0 0-48 0-352 0-48-48 0L48 32zM192 336l-96 0 0 48 96 0 0-48zm192 0l-160 0 0 48 160 0 0-48z" />
    </Icon>
);

export default CreditCard;