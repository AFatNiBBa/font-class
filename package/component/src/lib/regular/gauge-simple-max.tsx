
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-max` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-max?s=regular gauge-simple-max}
 * @preview ![gauge-simple-max](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/gauge-simple-max.svg)
 */
const GaugeSimpleMax: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM200 352c0-30.9 25.1-56 56-56c10.3 0 19.9 2.8 28.2 7.6l110.2-75.4c10.9-7.5 25.9-4.7 33.4 6.3s4.7 25.9-6.3 33.4L311.3 343.2c.4 2.9 .7 5.8 .7 8.8c0 30.9-25.1 56-56 56s-56-25.1-56-56z" />
    </Icon>
);

export default GaugeSimpleMax;