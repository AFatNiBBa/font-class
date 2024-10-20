
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-line?s=sharp-light arrow-up-to-line}
 * @preview ![arrow-up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-up-to-line.svg)
 */
const ArrowUpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 32L0 32 0 64l16 0 352 0 16 0 0-32-16 0L16 32zM203.3 132.7L192 121.4l-11.3 11.3-128 128L41.4 272 64 294.6l11.3-11.3L176 182.6 176 288l0 176 0 16 32 0 0-16 0-176 0-105.4L308.7 283.3 320 294.6 342.6 272l-11.3-11.3-128-128z" />
    </Icon>
);

export default ArrowUpToLine;