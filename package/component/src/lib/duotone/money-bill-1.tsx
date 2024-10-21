
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bill-1` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-1?s=duotone money-bill-1}
 * @preview ![money-bill-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/money-bill-1.svg)
 */
const MoneyBill_1: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 192l0 128c35.3 0 64 28.7 64 64l320 0c0-35.3 28.7-64 64-64l0-128c-35.3 0-64-28.7-64-64l-320 0c0 35.3-28.7 64-64 64zm320 64a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
        <path d="M0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm128 0c0 35.3-28.7 64-64 64l0 128c35.3 0 64 28.7 64 64l320 0c0-35.3 28.7-64 64-64l0-128c-35.3 0-64-28.7-64-64l-320 0zm144 60l16 0c11 0 20 9 20 20l0 68 4 0c11 0 20 9 20 20s-9 20-20 20l-24 0-24 0c-11 0-20-9-20-20s9-20 20-20l4 0 0-48.4c-9.1-1.9-16-9.9-16-19.6c0-11 9-20 20-20z" />
    </Icon>
);

export default MoneyBill_1;