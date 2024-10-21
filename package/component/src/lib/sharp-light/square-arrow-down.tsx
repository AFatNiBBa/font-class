
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down?s=sharp-light square-arrow-down}
 * @preview ![square-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-arrow-down.svg)
 */
const SquareArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 448L32 64l384 0 0 384L32 448zM0 480l32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32 0 32 0 64 0 448l0 32zM235.3 379.3l96-96L342.6 272 320 249.4l-11.3 11.3L240 329.4 240 144l0-16-32 0 0 16 0 185.4-68.7-68.7L128 249.4 105.4 272l11.3 11.3 96 96L224 390.6l11.3-11.3z" />
    </Icon>
);

export default SquareArrowDown;