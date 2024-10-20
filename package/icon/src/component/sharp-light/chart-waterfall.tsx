
import { Icon } from "../../index";

/**
 * A component that renders the `chart-waterfall` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-waterfall?s=sharp-light chart-waterfall}
 * @preview ![chart-waterfall](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chart-waterfall.svg)
 */
const ChartWaterfall: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l0 16 0 400 464 0 16 0 0 32-16 0L16 480 0 480l0-16L0 48 0 32l32 0zM160 224l0 16 0 96 0 16-32 0 0-16 0-96 0-16 32 0zm96-80l0 96 0 16-32 0 0-16 0-96 0-16 32 0 0 16zm96-80l0 16 0 96 0 16-32 0 0-16 0-96 0-16 32 0zm96 16l0 256 0 16-32 0 0-16 0-256 0-16 32 0 0 16z" />
    </Icon>
);

export default ChartWaterfall;