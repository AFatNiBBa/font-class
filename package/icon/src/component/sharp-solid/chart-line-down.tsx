
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-down?s=sharp-solid chart-line-down}
 * @preview ![chart-line-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-line-down.svg)
 */
const ChartLineDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64l0-32L0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64zM304 98.7l-22.6 22.6L208 194.7l-57.4-57.4-45.3 45.3 80 80L208 285.3l22.6-22.6L304 189.3l57.4 57.4L320 288l32 32 128 0 0-128-32-32-41.4 41.4-80-80L304 98.7z" />
    </Icon>
);

export default ChartLineDown;