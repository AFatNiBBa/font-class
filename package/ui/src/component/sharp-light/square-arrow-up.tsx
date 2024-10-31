
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up?s=sharp-light square-arrow-up}
 * @preview ![square-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-arrow-up.svg)
 */
const SquareArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM235.3 132.7l96 96L342.6 240 320 262.6l-11.3-11.3L240 182.6 240 368l0 16-32 0 0-16 0-185.4-68.7 68.7L128 262.6 105.4 240l11.3-11.3 96-96L224 121.4l11.3 11.3z" />
    </Icon>
);

export default SquareArrowUp;