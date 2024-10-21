
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-max` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-max?s=sharp-thin gauge-simple-max}
 * @preview ![gauge-simple-max](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/gauge-simple-max.svg)
 */
const GaugeSimpleMax: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm0 400a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 16c-35.3 0-64-28.7-64-64s28.7-64 64-64c18.8 0 35.7 8.1 47.4 21l108-75.6 6.6-4.6 9.2 13.1-6.6 4.6-108 75.6c4.7 8.9 7.4 19.1 7.4 29.9c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default GaugeSimpleMax;