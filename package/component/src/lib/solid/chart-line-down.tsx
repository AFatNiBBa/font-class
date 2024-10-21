
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line-down` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-down?s=solid chart-line-down}
 * @preview ![chart-line-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chart-line-down.svg)
 */
const ChartLineDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm217.4 57.4L208 194.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0L304 189.3l57.4 57.4L329 279c-15.1 15.1-4.4 41 17 41L456 320c13.3 0 24-10.7 24-24l0-110.1c0-21.4-25.9-32.1-41-17l-32.4 32.4-80-80c-12.5-12.5-32.8-12.5-45.3 0z" />
    </Icon>
);

export default ChartLineDown;