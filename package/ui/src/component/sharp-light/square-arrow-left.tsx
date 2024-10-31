
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-left?s=sharp-light square-arrow-left}
 * @preview ![square-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-arrow-left.svg)
 */
const SquareArrowLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 448l384 0 0-384L32 64l0 384zM0 480l0-32L0 64 0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480zM100.7 244.7l96-96L208 137.4 230.6 160l-11.3 11.3L150.6 240 336 240l16 0 0 32-16 0-185.4 0 68.7 68.7L230.6 352 208 374.6l-11.3-11.3-96-96L89.4 256l11.3-11.3z" />
    </Icon>
);

export default SquareArrowLeft;