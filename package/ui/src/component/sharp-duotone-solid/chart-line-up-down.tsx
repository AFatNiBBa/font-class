
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-line-up-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-up-down?s=sharp-duotone-solid chart-line-up-down}
 * @preview ![chart-line-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-line-up-down.svg)
 */
const ChartLineUpDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64l0-32L0 32z" />
        <path d="M352 64l128 0 0 128-16 16-41.4-41.4-112 112L288 301.3l-22.6-22.6L208 221.3l-65.4 65.4L97.4 241.4l88-88L208 130.7l22.6 22.6L288 210.7l89.4-89.4L336 80l16-16zm0 320l-16-16 41.4-41.4-34.7-34.7 45.3-45.3 34.7 34.7L464 240l16 16 0 128-128 0z" />
    </Icon>
);

export default ChartLineUpDown;