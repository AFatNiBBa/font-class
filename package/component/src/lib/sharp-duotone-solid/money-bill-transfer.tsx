
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bill-transfer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-transfer?s=sharp-duotone-solid money-bill-transfer}
 * @preview ![money-bill-transfer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/money-bill-transfer.svg)
 */
const MoneyBillTransfer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 64l0 291 51.3-43.4 8.9-7.6 11.7 0 24 0 32 0 0 32 0 24 96 0 64 0 0 88 288 0 0-291-51.3 43.4-8.9 7.6L536 208l-24 0-32 0 0-32 0-24-96 0-64 0 0-88L32 64zm64 64l64 0c0 35.3-28.7 64-64 64l0-64zM384 256a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm96 128c0-35.3 28.7-64 64-64l0 64-64 0z" />
        <path d="M512 176l0-64-128 0-24 0 0-48 24 0 128 0 0-64 24 0L640 88 536 176l-24 0zM128 400l128 0 24 0 0 48-24 0-128 0 0 64-24 0L0 424l104-88 24 0 0 64z" />
    </Icon>
);

export default MoneyBillTransfer;