
import { Icon } from "../../index";

/**
 * A component that renders the `square-w` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-w?s=sharp-regular square-w}
 * @preview ![square-w](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-w.svg)
 */
const SquareW: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM377.5 144L311.1 374.6l-5 17.4-35.6 0-5.3-16.7L224 246.7 182.9 375.3 177.5 392l-35.6 0-5-17.4L70.5 144l50 0 40.7 141.5 39.9-124.8 5.3-16.7 35 0 5.3 16.7 39.9 124.8L327.5 144l50 0z" />
    </Icon>
);

export default SquareW;