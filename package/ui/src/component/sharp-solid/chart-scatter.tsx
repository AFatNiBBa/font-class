
import { Icon } from "../../index";

/**
 * A component that renders the `chart-scatter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-scatter?s=sharp-solid chart-scatter}
 * @preview ![chart-scatter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-scatter.svg)
 */
const ChartScatter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64l0-32L0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64zm160 64l-64 0 0 64 64 0 0-64zM192 288l-64 0 0 64 64 0 0-64zm128-64l-64 0 0 64 64 0 0-64zm32 128l64 0 0-64-64 0 0 64zM448 96l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default ChartScatter;