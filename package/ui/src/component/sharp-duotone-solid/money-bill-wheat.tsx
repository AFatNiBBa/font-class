
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bill-wheat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-wheat?s=sharp-duotone-solid money-bill-wheat}
 * @preview ![money-bill-wheat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/money-bill-wheat.svg)
 */
const MoneyBillWheat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L0 512l512 0 0-256L0 256zm48 48l48 0c0 26.5-21.5 48-48 48l0-48zm0 112c26.5 0 48 21.5 48 48l-48 0 0-48zm272-32a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm96-80l48 0 0 48c-26.5 0-48-21.5-48-48zm0 160c0-26.5 21.5-48 48-48l0 48-48 0z" />
        <path d="M160 0l16 0c44.2 0 80 35.8 80 80l0 16-16 0c-44.2 0-80-35.8-80-80l0-16zM32 16l24 0 48 0 24 0 0 48-24 0L56 64 32 64l0-48zM0 88l24 0 112 0 24 0 0 48-24 0L24 136 0 136 0 88zm56 72l48 0 24 0 0 48-24 0-48 0-24 0 0-48 24 0zM288 0c44.2 0 80 35.8 80 80l0 16-16 0c-44.2 0-80-35.8-80-80l0-16 16 0zm96 0l16 0c44.2 0 80 35.8 80 80l0 16-16 0c-44.2 0-80-35.8-80-80l0-16zm80 128l16 0 0 16c0 44.2-35.8 80-80 80l-16 0 0-16c0-44.2 35.8-80 80-80zm-96 0l0 16c0 44.2-35.8 80-80 80l-16 0 0-16c0-44.2 35.8-80 80-80l16 0zm-128 0l16 0 0 16c0 44.2-35.8 80-80 80l-16 0 0-16c0-44.2 35.8-80 80-80z" />
    </Icon>
);

export default MoneyBillWheat;