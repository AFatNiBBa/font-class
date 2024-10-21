
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-line?s=sharp-light arrow-left-to-line}
 * @preview ![arrow-left-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-left-to-line.svg)
 */
const ArrowLeftToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 432l0 16 32 0 0-16L32 80l0-16L0 64 0 80 0 432zM100.7 244.7L89.4 256l11.3 11.3 128 128L240 406.6 262.6 384l-11.3-11.3L150.6 272 256 272l176 0 16 0 0-32-16 0-176 0-105.4 0L251.3 139.3 262.6 128 240 105.4l-11.3 11.3-128 128z" />
    </Icon>
);

export default ArrowLeftToLine;