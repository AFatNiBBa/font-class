
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bill-wheat` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-wheat?s=duotone money-bill-wheat}
 * @preview ![money-bill-wheat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/money-bill-wheat.svg)
 */
const MoneyBillWheat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 304L0 464c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48L48 256c-26.5 0-48 21.5-48 48zm48 0l48 0c0 26.5-21.5 48-48 48l0-48zm0 112c26.5 0 48 21.5 48 48l-48 0 0-48zm272-32a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm96-80l48 0 0 48c-26.5 0-48-21.5-48-48zm0 160c0-26.5 21.5-48 48-48l0 48-48 0z" />
        <path d="M160 16c0-8.8 7.2-16 16-16c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80zM32 40c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 64C42.7 64 32 53.3 32 40zM0 112C0 98.7 10.7 88 24 88l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 136c-13.3 0-24-10.7-24-24zm56 48l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM288 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80c0-8.8 7.2-16 16-16zm96 16c0-8.8 7.2-16 16-16c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80zm80 112c8.8 0 16 7.2 16 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-96 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16zM240 128c8.8 0 16 7.2 16 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80z" />
    </Icon>
);

export default MoneyBillWheat;