
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bills` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills?s=sharp-duotone-solid money-bills}
 * @preview ![money-bills](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/money-bills.svg)
 */
const MoneyBills: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 24L0 456l0 24 24 0 496 0 24 0 0-48-24 0L48 432l0-312 0-24L0 96zm160 64l0 96c35.3 0 64 28.7 64 64l288 0c0-35.3 28.7-64 64-64l0-96c-35.3 0-64-28.7-64-64L224 96c0 35.3-28.7 64-64 64zm288 48a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
        <path d="M640 32L96 32l0 352 544 0 0-352zM512 96c0 35.3 28.7 64 64 64l0 96c-35.3 0-64 28.7-64 64l-288 0c0-35.3-28.7-64-64-64l0-96c35.3 0 64-28.7 64-64l288 0z" />
    </Icon>
);

export default MoneyBills;