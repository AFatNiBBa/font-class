
import { Icon } from "../../index";

/**
 * A component that renders the `money-bill-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-simple?s=sharp-regular money-bill-simple}
 * @preview ![money-bill-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/money-bill-simple.svg)
 */
const MoneyBillSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 112l0 288 480 0 0-288L48 112zM0 64l48 0 480 0 48 0 0 48 0 288 0 48-48 0L48 448 0 448l0-48L0 112 0 64zm288 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default MoneyBillSimple;