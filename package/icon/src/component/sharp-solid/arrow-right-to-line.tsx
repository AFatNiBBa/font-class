
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-line?s=sharp-solid arrow-right-to-line}
 * @preview ![arrow-right-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-right-to-line.svg)
 */
const ArrowRightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 96l0-32-64 0 0 32 0 320 0 32 64 0 0-32 0-320zM310.6 278.6L333.3 256l-22.6-22.6-128-128L160 82.7 114.7 128l22.6 22.6L210.7 224 32 224 0 224l0 64 32 0 178.7 0-73.4 73.4L114.7 384 160 429.3l22.6-22.6 128-128z" />
    </Icon>
);

export default ArrowRightToLine;