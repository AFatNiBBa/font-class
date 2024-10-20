
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-high` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-high?s=regular gauge-high}
 * @preview ![gauge-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/gauge-high.svg)
 */
const GaugeHigh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm32-400a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 408c30.9 0 56-25.1 56-56c0-14-5.1-26.8-13.7-36.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L254.4 296c-30.2 .8-54.4 25.6-54.4 56c0 30.9 25.1 56 56 56zM192 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM112 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm320-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default GaugeHigh;