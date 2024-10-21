
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-simple-horizontal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-simple-horizontal?s=sharp-duotone-solid chart-simple-horizontal}
 * @preview ![chart-simple-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-simple-horizontal.svg)
 */
const ChartSimpleHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 320l448 0 0-128L0 192z" />
        <path d="M384 32l0 128L0 160 0 32l384 0zM256 352l0 128L0 480 0 352l256 0z" />
    </Icon>
);

export default ChartSimpleHorizontal;