
import { Icon } from "../../index";

/**
 * A component that renders the `money-bills-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills-simple?s=sharp-regular money-bills-simple}
 * @preview ![money-bills-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/money-bills-simple.svg)
 */
const MoneyBillsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M592 80l0 256-448 0 0-256 448 0zM144 32L96 32l0 48 0 256 0 48 48 0 448 0 48 0 0-48 0-256 0-48-48 0L144 32zM448 208a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM48 120l0-24L0 96l0 24L0 456l0 24 24 0 496 0 24 0 0-48-24 0L48 432l0-312z" />
    </Icon>
);

export default MoneyBillsSimple;