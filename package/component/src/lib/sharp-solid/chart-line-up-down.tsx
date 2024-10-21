
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line-up-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-up-down?s=sharp-solid chart-line-up-down}
 * @preview ![chart-line-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-line-up-down.svg)
 */
const ChartLineUpDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64l0-32L0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64zm416 0L352 64 336 80l41.4 41.4L288 210.7l-57.4-57.4L208 130.7l-22.6 22.6-88 88 45.3 45.3L208 221.3l57.4 57.4L288 301.3l22.6-22.6 112-112L464 208l16-16 0-128zm0 320l0-128-16-16-41.4 41.4-34.7-34.7-45.3 45.3 34.7 34.7L336 368l16 16 128 0z" />
    </Icon>
);

export default ChartLineUpDown;