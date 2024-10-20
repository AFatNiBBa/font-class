
import { Icon } from "../../index";

/**
 * A component that renders the `sparkle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkle?s=sharp-regular sparkle}
 * @preview ![sparkle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sparkle.svg)
 */
const Sparkle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M298.7 330.7l95.7-47.8L448 256l-53.7-26.8-95.7-47.8L250.8 85.7 224 32 197.2 85.7l-47.8 95.7L53.7 229.2 0 256l53.7 26.8 95.7 47.8 47.8 95.7L224 480l26.8-53.7 47.8-95.7zm-74.7 42l-31.7-63.5-7.2-14.3-14.3-7.2L107.3 256l63.5-31.7 14.3-7.2 7.2-14.3L224 139.3l31.7 63.5 7.2 14.3 14.3 7.2L340.7 256l-63.5 31.7-14.3 7.2-7.2 14.3L224 372.7z" />
    </Icon>
);

export default Sparkle;