
import { Icon } from "../../index";

/**
 * A component that renders the `chart-waterfall` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-waterfall?s=sharp-solid chart-waterfall}
 * @preview ![chart-waterfall](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-waterfall.svg)
 */
const ChartWaterfall: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32l0 32 0 352 416 0 32 0 0 64-32 0L32 480 0 480l0-32L0 64 0 32l64 0zM192 224l0 32 0 64 0 32-64 0 0-32 0-64 0-32 64 0zm96-64l0 64 0 32-64 0 0-32 0-64 0-32 64 0 0 32zm96-96l0 32 0 64 0 32-64 0 0-32 0-64 0-32 64 0zm96 32l0 224 0 32-64 0 0-32 0-224 0-32 64 0 0 32z" />
    </Icon>
);

export default ChartWaterfall;