
import { Icon } from "../../index";

/**
 * A component that renders the `square-code` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-code?s=sharp-thin square-code}
 * @preview ![square-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-code.svg)
 */
const SquareCode: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 416L16 464 16 48l416 0zM16 32L0 32 0 48 0 464l0 16 16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32zM260.7 176l5.7 5.7L340.7 256l-74.3 74.3-5.7 5.7L272 347.3l5.7-5.7 80-80 5.7-5.7-5.7-5.7-80-80-5.7-5.7L260.7 176zm-79 5.7l5.7-5.7L176 164.7l-5.7 5.7-80 80L84.7 256l5.7 5.7 80 80 5.7 5.7L187.3 336l-5.7-5.7L107.3 256l74.3-74.3z" />
    </Icon>
);

export default SquareCode;