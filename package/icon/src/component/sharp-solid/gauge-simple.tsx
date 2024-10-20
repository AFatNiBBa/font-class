
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple?s=sharp-solid gauge-simple}
 * @preview ![gauge-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/gauge-simple.svg)
 */
const GaugeSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3L280 88l0-24-48 0 0 24 0 204.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default GaugeSimple;