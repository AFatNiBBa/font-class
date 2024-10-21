
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple?s=duotone gauge-simple}
 * @preview ![gauge-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gauge-simple.svg)
 */
const GaugeSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm192 96c0-26.9 16.5-49.9 40-59.3L232 88c0-13.3 10.7-24 24-24s24 10.7 24 24l0 204.7c23.5 9.5 40 32.5 40 59.3c0 35.3-28.7 64-64 64s-64-28.7-64-64z" />
        <path d="M280 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 204.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64c0-26.9-16.5-49.9-40-59.3L280 88z" />
    </Icon>
);

export default GaugeSimple;