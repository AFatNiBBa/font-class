
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bill` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill?s=duotone money-bill}
 * @preview ![money-bill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/money-bill.svg)
 */
const MoneyBill: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 192l0 128c35.3 0 64 28.7 64 64l320 0c0-35.3 28.7-64 64-64l0-128c-35.3 0-64-28.7-64-64l-320 0c0 35.3-28.7 64-64 64zm320 64a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
        <path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm384 64c0 35.3 28.7 64 64 64l0 128c-35.3 0-64 28.7-64 64l-320 0c0-35.3-28.7-64-64-64l0-128c35.3 0 64-28.7 64-64l320 0z" />
    </Icon>
);

export default MoneyBill;