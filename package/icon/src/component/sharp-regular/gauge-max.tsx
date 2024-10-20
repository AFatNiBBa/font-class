
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-max` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-max?s=sharp-regular gauge-max}
 * @preview ![gauge-max](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/gauge-max.svg)
 */
const GaugeMax: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm32 112a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM256 408c-30.9 0-56-25.1-56-56s25.1-56 56-56c10.3 0 19.9 2.8 28.2 7.6l110.2-75.4 19.8-13.6 27.1 39.6-19.8 13.6L311.3 343.2c.4 2.9 .7 5.8 .7 8.8c0 30.9-25.1 56-56 56zM384 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM112 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm80-64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
    </Icon>
);

export default GaugeMax;