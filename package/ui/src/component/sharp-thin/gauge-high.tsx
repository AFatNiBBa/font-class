
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-high` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-high?s=sharp-thin gauge-high}
 * @preview ![gauge-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/gauge-high.svg)
 */
const GaugeHigh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM272 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM208 352a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0c0-22.2-11.3-41.7-28.4-53.2l83.6-167.2 3.6-7.2-14.3-7.2-3.6 7.2L277.2 291.6c-6.6-2.3-13.8-3.6-21.2-3.6c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zM160 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM96 256a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm336-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default GaugeHigh;