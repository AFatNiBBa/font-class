
import { Icon } from "../../index";

/**
 * A component that renders the `money-bills-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills-simple?s=sharp-light money-bills-simple}
 * @preview ![money-bills-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/money-bills-simple.svg)
 */
const MoneyBillsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 64l0 288-480 0 0-288 480 0zM128 32L96 32l0 32 0 288 0 32 32 0 480 0 32 0 0-32 0-288 0-32-32 0L128 32zM368 272a64 64 0 1 1 0-128 64 64 0 1 1 0 128zm-96-64a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM32 112l0-16L0 96l0 16L0 464l0 16 16 0 512 0 16 0 0-32-16 0L32 448l0-336z" />
    </Icon>
);

export default MoneyBillsSimple;