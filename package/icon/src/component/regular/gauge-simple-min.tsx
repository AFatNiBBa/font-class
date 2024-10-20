
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-min` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-min?s=regular gauge-simple-min}
 * @preview ![gauge-simple-min](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/gauge-simple-min.svg)
 */
const GaugeSimpleMin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm56-160c0-30.9-25.1-56-56-56c-10.3 0-19.9 2.8-28.2 7.6L117.6 228.2c-10.9-7.5-25.9-4.7-33.4 6.3s-4.7 25.9 6.3 33.4l110.2 75.4c-.4 2.9-.7 5.8-.7 8.8c0 30.9 25.1 56 56 56s56-25.1 56-56z" />
    </Icon>
);

export default GaugeSimpleMin;