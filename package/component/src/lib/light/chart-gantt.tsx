
import { Icon } from "../../index";

/**
 * A component that renders the `chart-gantt` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-gantt?s=light chart-gantt}
 * @preview ![chart-gantt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chart-gantt.svg)
 */
const ChartGantt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 32c8.8 0 16 7.2 16 16l0 352c0 26.5 21.5 48 48 48l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 480c-44.2 0-80-35.8-80-80L0 48c0-8.8 7.2-16 16-16zM128 144c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm80 80l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm160 96l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default ChartGantt;