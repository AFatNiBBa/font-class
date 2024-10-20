
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-left?s=sharp-thin square-arrow-left}
 * @preview ![square-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-arrow-left.svg)
 */
const SquareArrowLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 464l416 0 0-416L16 48l0 416zM0 480l0-16L0 48 0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480zM98.3 250.3l104-104 5.7-5.7L219.3 152l-5.7 5.7L123.3 248 344 248l8 0 0 16-8 0-220.7 0 90.3 90.3 5.7 5.7L208 371.3l-5.7-5.7-104-104L92.7 256l5.7-5.7z" />
    </Icon>
);

export default SquareArrowLeft;