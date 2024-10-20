
import { Icon } from "../../index";

/**
 * A component that renders the `chart-gantt` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-gantt?s=sharp-light chart-gantt}
 * @preview ![chart-gantt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chart-gantt.svg)
 */
const ChartGantt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l0 16 0 400 464 0 16 0 0 32-16 0L16 480 0 480l0-16L0 48 0 32l32 0zm96 96l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm80 96l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zm160 96l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0z" />
    </Icon>
);

export default ChartGantt;