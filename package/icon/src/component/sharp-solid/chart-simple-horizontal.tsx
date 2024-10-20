
import { Icon } from "../../index";

/**
 * A component that renders the `chart-simple-horizontal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-simple-horizontal?s=sharp-solid chart-simple-horizontal}
 * @preview ![chart-simple-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-simple-horizontal.svg)
 */
const ChartSimpleHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 320l0-128L0 192 0 320l448 0zM256 480l0-128L0 352 0 480l256 0zM384 32L0 32 0 160l384 0 0-128z" />
    </Icon>
);

export default ChartSimpleHorizontal;