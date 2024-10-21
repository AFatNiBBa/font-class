
import { Icon } from "../../index";

/**
 * A component that renders the `down-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-right?s=sharp-thin down-right}
 * @preview ![down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/down-right.svg)
 */
const DownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M132.7 315.3L59.3 388.7 48 400l11.3 11.3L80 432l272 0 16 0 0-16 0-272-20.7-20.7L336 112l-11.3 11.3-73.4 73.4L240 208l-11.3-11.3L107.3 75.3 96 64 84.7 75.3 11.3 148.7 0 160l11.3 11.3L132.7 292.7 144 304l-11.3 11.3zM22.6 160L96 86.6 228.7 219.3 240 230.6l11.3-11.3L336 134.6l16 16L352 416 86.6 416l-16-16 84.7-84.7L166.6 304l-11.3-11.3L22.6 160z" />
    </Icon>
);

export default DownRight;