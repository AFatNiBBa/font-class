
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-down?s=sharp-light chart-line-down}
 * @preview ![chart-line-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chart-line-down.svg)
 */
const ChartLineDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 48l0-16L0 32 0 48 0 464l0 16 16 0 480 0 16 0 0-32-16 0L32 448 32 48zM336 352l128 0 16 0 0-16 0-128 0-16-32 0 0 16 0 89.4L331.3 180.7 320 169.4l-11.3 11.3L224 265.4 123.3 164.7 112 153.4 89.4 176l11.3 11.3 112 112L224 310.6l11.3-11.3L320 214.6 425.4 320 336 320l-16 0 0 32 16 0z" />
    </Icon>
);

export default ChartLineDown;