
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-max` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-max?s=thin gauge-simple-max}
 * @preview ![gauge-simple-max](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/gauge-simple-max.svg)
 */
const GaugeSimpleMax: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm0 400a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 16c-35.3 0-64-28.7-64-64s28.7-64 64-64c18.8 0 35.7 8.1 47.4 21l108-75.6c3.6-2.5 8.6-1.7 11.1 2s1.7 8.6-2 11.1l-108 75.6c4.7 8.9 7.4 19.1 7.4 29.9c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default GaugeSimpleMax;