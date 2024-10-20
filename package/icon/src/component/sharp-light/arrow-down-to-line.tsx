
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-line?s=sharp-light arrow-down-to-line}
 * @preview ![arrow-down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-down-to-line.svg)
 */
const ArrowDownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 480L0 480l0-32 16 0 352 0 16 0 0 32-16 0L16 480zM203.3 379.3L192 390.6l-11.3-11.3-128-128L41.4 240 64 217.4l11.3 11.3L176 329.4 176 224l0-176 0-16 32 0 0 16 0 176 0 105.4L308.7 228.7 320 217.4 342.6 240l-11.3 11.3-128 128z" />
    </Icon>
);

export default ArrowDownToLine;