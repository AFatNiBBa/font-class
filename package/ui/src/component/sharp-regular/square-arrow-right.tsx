
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-right?s=sharp-regular square-arrow-right}
 * @preview ![square-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-arrow-right.svg)
 */
const SquareArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80L48 80l0 352 352 0 0-352zm48-48l0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 352 0 48 0zM361 273l-88 88-17 17L222.1 344l17-17 47-47L104 280l-24 0 0-48 24 0 182.1 0-47-47-17-17L256 134.1l17 17 88 88 17 17-17 17z" />
    </Icon>
);

export default SquareArrowRight;