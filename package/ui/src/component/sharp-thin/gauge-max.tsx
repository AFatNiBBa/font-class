
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-max` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-max?s=sharp-thin gauge-max}
 * @preview ![gauge-max](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/gauge-max.svg)
 */
const GaugeMax: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm16 80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM208 352a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm-16 0c0-35.3 28.7-64 64-64c18.8 0 35.7 8.1 47.4 21l108-75.6 6.6-4.6 9.2 13.1-6.6 4.6-108 75.6c4.7 8.9 7.4 19.1 7.4 29.9c0 35.3-28.7 64-64 64s-64-28.7-64-64zM384 128a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM96 224a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm64-96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
    </Icon>
);

export default GaugeMax;