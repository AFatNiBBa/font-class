
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-low` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-low?s=sharp-solid gauge-simple-low}
 * @preview ![gauge-simple-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/gauge-simple-low.svg)
 */
const GaugeSimpleLow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-35.3-28.7-64-64-64c-2.1 0-4.1 .1-6.1 .3L173.3 140.9l-11.1-21.3-42.6 22.1 11.1 21.3 76.6 147.4C197.8 321.6 192 336.1 192 352c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default GaugeSimpleLow;