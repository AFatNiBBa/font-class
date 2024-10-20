
import { Icon } from "../../index";

/**
 * A component that renders the `credit-card-blank` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card-blank?s=solid credit-card-blank}
 * @preview ![credit-card-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/credit-card-blank.svg)
 */
const CreditCardBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM96 368c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16zm128 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default CreditCardBlank;