
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down-left?s=sharp-light square-arrow-down-left}
 * @preview ![square-arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-arrow-down-left.svg)
 */
const SquareArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 448L32 64l384 0 0 384L32 448zM0 480l32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32 0 32 0 64 0 448l0 32zM144 352l136 0 16 0 0-32-16 0-97.4 0L315.3 187.3 326.6 176 304 153.4l-11.3 11.3L160 297.4 160 192l0-16-32 0 0 16 0 144 0 16 16 0z" />
    </Icon>
);

export default SquareArrowDownLeft;