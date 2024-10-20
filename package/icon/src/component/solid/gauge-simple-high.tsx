
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-high` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-high?s=solid gauge-simple-high}
 * @preview ![gauge-simple-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/gauge-simple-high.svg)
 */
const GaugeSimpleHigh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-15.9-5.8-30.4-15.3-41.6l76.6-147.4c6.1-11.8 1.5-26.3-10.2-32.4s-26.2-1.5-32.4 10.2L262.1 288.3c-2-.2-4-.3-6.1-.3c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default GaugeSimpleHigh;