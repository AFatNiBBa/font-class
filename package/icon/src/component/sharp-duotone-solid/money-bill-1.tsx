
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bill-1` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-1?s=sharp-duotone-solid money-bill-1}
 * @preview ![money-bill-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/money-bill-1.svg)
 */
const MoneyBill_1: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 192l0 128c35.3 0 64 28.7 64 64l320 0c0-35.3 28.7-64 64-64l0-128c-35.3 0-64-28.7-64-64l-320 0c0 35.3-28.7 64-64 64zm320 64a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
        <path d="M0 64l576 0 0 384L0 448 0 64zm128 64c0 35.3-28.7 64-64 64l0 128c35.3 0 64 28.7 64 64l320 0c0-35.3 28.7-64 64-64l0-128c-35.3 0-64-28.7-64-64l-320 0zm144 60l16 0 20 0 0 20 0 68 4 0 20 0 0 40-20 0-4 0-40 0-4 0-20 0 0-40 20 0 4 0 0-48-16 0 0-40 20 0z" />
    </Icon>
);

export default MoneyBill_1;