
import { Icon } from "../../index";

/**
 * A component that renders the `credit-card-blank` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card-blank?s=sharp-regular credit-card-blank}
 * @preview ![credit-card-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/credit-card-blank.svg)
 */
const CreditCardBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 80l0 352 480 0 0-352L48 80zM0 32l48 0 480 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM96 336l96 0 0 48-96 0 0-48zm128 0l160 0 0 48-160 0 0-48z" />
    </Icon>
);

export default CreditCardBlank;