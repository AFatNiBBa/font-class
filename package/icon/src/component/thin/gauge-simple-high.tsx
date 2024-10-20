
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-high` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-high?s=thin gauge-simple-high}
 * @preview ![gauge-simple-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/gauge-simple-high.svg)
 */
const GaugeSimpleHigh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112c35.3 0 64-28.7 64-64c0-22.2-11.3-41.7-28.4-53.2l83.6-167.2c2-4 .4-8.8-3.6-10.7s-8.8-.4-10.7 3.6L277.2 291.6c-6.6-2.3-13.8-3.6-21.2-3.6c-35.3 0-64 28.7-64 64s28.7 64 64 64z" />
    </Icon>
);

export default GaugeSimpleHigh;