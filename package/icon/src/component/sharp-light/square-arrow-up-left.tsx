
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-up-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up-left?s=sharp-light square-arrow-up-left}
 * @preview ![square-arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-arrow-up-left.svg)
 */
const SquareArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM144 160l136 0 16 0 0 32-16 0-97.4 0L315.3 324.7 326.6 336 304 358.6l-11.3-11.3L160 214.6 160 320l0 16-32 0 0-16 0-144 0-16 16 0z" />
    </Icon>
);

export default SquareArrowUpLeft;