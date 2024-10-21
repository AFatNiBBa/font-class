
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bills-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills-simple?s=sharp-duotone-solid money-bills-simple}
 * @preview ![money-bills-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/money-bills-simple.svg)
 */
const MoneyBillsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 24L0 456l0 24 24 0 496 0 24 0 0-48-24 0L48 432l0-312 0-24L0 96zM288 208a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M640 32L96 32l0 352 544 0 0-352zM368 128a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default MoneyBillsSimple;