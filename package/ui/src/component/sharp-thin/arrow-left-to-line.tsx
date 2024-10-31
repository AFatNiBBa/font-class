
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-line` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-line?s=sharp-thin arrow-left-to-line}
 * @preview ![arrow-left-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-left-to-line.svg)
 */
const ArrowLeftToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 440l0 8 16 0 0-8L16 72l0-8L0 64l0 8L0 440zM98.3 250.3L92.7 256l5.7 5.7 136 136 5.7 5.7L251.3 392l-5.7-5.7L123.3 264 440 264l8 0 0-16-8 0-316.7 0L245.7 125.7l5.7-5.7L240 108.7l-5.7 5.7-136 136z" />
    </Icon>
);

export default ArrowLeftToLine;