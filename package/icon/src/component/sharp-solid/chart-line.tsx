
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line?s=sharp-solid chart-line}
 * @preview ![chart-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-line.svg)
 */
const ChartLine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64l0-32L0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64zM342.6 278.6l128-128-45.3-45.3L320 210.7l-57.4-57.4L240 130.7l-22.6 22.6-112 112 45.3 45.3L240 221.3l57.4 57.4L320 301.3l22.6-22.6z" />
    </Icon>
);

export default ChartLine;