
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-max` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-max?s=sharp-light gauge-simple-max}
 * @preview ![gauge-simple-max](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/gauge-simple-max.svg)
 */
const GaugeSimpleMax: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm0 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 32c-35.3 0-64-28.7-64-64s28.7-64 64-64c17.5 0 33.4 7 44.9 18.4l106.9-64.1 13.7-8.2L438 261.5l-13.7 8.2L317.4 333.8c1.7 5.8 2.6 11.9 2.6 18.2c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default GaugeSimpleMax;