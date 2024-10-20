
import { Icon } from "../../index";

/**
 * A component that renders the `chart-gantt` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-gantt?s=sharp-solid chart-gantt}
 * @preview ![chart-gantt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-gantt.svg)
 */
const ChartGantt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32l0 32 0 352 416 0 32 0 0 64-32 0L32 480 0 480l0-32L0 64 0 32l64 0zm64 64l32 0 96 0 32 0 0 64-32 0-96 0-32 0 0-64zm96 96l128 0 32 0 0 64-32 0-128 0-32 0 0-64 32 0zm160 96l64 0 32 0 0 64-32 0-64 0-32 0 0-64 32 0z" />
    </Icon>
);

export default ChartGantt;