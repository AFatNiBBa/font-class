
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-min` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-min?s=sharp-regular gauge-min}
 * @preview ![gauge-min](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/gauge-min.svg)
 */
const GaugeMin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm32-400a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 408c30.9 0 56-25.1 56-56s-25.1-56-56-56c-10.3 0-19.9 2.8-28.2 7.6L117.6 228.2 97.7 214.6 70.6 254.3l19.8 13.6 110.2 75.4c-.4 2.9-.7 5.8-.7 8.8c0 30.9 25.1 56 56 56zM192 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM400 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default GaugeMin;