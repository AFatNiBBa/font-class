
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-low` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-low?s=sharp-regular gauge-simple-low}
 * @preview ![gauge-simple-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/gauge-simple-low.svg)
 */
const GaugeSimpleLow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM200 352c0-14 5.1-26.8 13.7-36.6L146 161.7l-9.7-22 43.9-19.3 9.7 22L257.6 296c30.2 .8 54.4 25.6 54.4 56c0 30.9-25.1 56-56 56s-56-25.1-56-56z" />
    </Icon>
);

export default GaugeSimpleLow;