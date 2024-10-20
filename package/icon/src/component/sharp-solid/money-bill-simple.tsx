
import { Icon } from "../../index";

/**
 * A component that renders the `money-bill-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-simple?s=sharp-solid money-bill-simple}
 * @preview ![money-bill-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/money-bill-simple.svg)
 */
const MoneyBillSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 64L0 64 0 448l576 0 0-384zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default MoneyBillSimple;