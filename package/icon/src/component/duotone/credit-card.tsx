
import { Icon, generic } from "../../index";

/**
 * A component that renders the `credit-card` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card?s=duotone credit-card}
 * @preview ![credit-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/credit-card.svg)
 */
const CreditCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM0 224L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192L0 224zM96 368c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16zm128 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" />
        <path d="M576 224H0V128H576v96z" />
    </Icon>
);

export default CreditCard;