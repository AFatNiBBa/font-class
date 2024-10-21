
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-high` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-high?s=light gauge-simple-high}
 * @preview ![gauge-simple-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/gauge-simple-high.svg)
 */
const GaugeSimpleHigh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96c35.3 0 64-28.7 64-64c0-18.6-7.9-35.3-20.5-47l82.6-153.4c4.2-7.8 1.3-17.5-6.5-21.7s-17.5-1.3-21.7 6.5L271.3 289.8c-4.9-1.2-10-1.8-15.3-1.8c-35.3 0-64 28.7-64 64s28.7 64 64 64z" />
    </Icon>
);

export default GaugeSimpleHigh;