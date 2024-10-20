
import { Icon } from "../../index";

/**
 * A component that renders the `credit-card-blank` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card-blank?s=sharp-solid credit-card-blank}
 * @preview ![credit-card-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/credit-card-blank.svg)
 */
const CreditCardBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 32L0 32 0 480l576 0 0-448zM96 352l96 0 0 32-96 0 0-32zm128 0l160 0 0 32-160 0 0-32z" />
    </Icon>
);

export default CreditCardBlank;