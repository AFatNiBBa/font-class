
import { Icon, generic } from "../../index";

/**
 * A component that renders the `credit-card` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card?s=sharp-duotone-solid credit-card}
 * @preview ![credit-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/credit-card.svg)
 */
const CreditCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32l0 96 576 0 0-96L0 32zM0 224L0 480l576 0 0-256L0 224zM96 352l96 0 0 32-96 0 0-32zm128 0l160 0 0 32-160 0 0-32z" />
        <path d="M576 224H0V128H576v96z" />
    </Icon>
);

export default CreditCard;