
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-line?s=sharp-solid arrow-left-to-line}
 * @preview ![arrow-left-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-left-to-line.svg)
 */
const ArrowLeftToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96L0 64l64 0 0 32 0 320 0 32L0 448l0-32L0 96zM137.4 278.6L114.7 256l22.6-22.6 128-128L288 82.7 333.3 128l-22.6 22.6L237.3 224 416 224l32 0 0 64-32 0-178.7 0 73.4 73.4L333.3 384 288 429.3l-22.6-22.6-128-128z" />
    </Icon>
);

export default ArrowLeftToLine;