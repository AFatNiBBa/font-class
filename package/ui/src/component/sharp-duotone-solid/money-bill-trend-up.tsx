
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bill-trend-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-trend-up?s=sharp-duotone-solid money-bill-trend-up}
 * @preview ![money-bill-trend-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/money-bill-trend-up.svg)
 */
const MoneyBillTrendUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L0 512l512 0 0-256L0 256zm48 48l48 0c0 26.5-21.5 48-48 48l0-48zm0 112c26.5 0 48 21.5 48 48l-48 0 0-48zm272-32a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm96-80l48 0 0 48c-26.5 0-48-21.5-48-48zm0 160c0-26.5 21.5-48 48-48l0 48-48 0z" />
        <path d="M352 0L320 0l0 64 32 0 18.7 0-84.4 84.4L196.8 71.7 176 53.9 155.2 71.7l-112 96 41.7 48.6L176 138.1l91.2 78.1 22.5 19.3 21-21L416 109.3l0 18.7 0 32 64 0 0-32 0-96 0-32L448 0 352 0z" />
    </Icon>
);

export default MoneyBillTrendUp;