
import { Icon } from "../../index";

/**
 * A component that renders the `wine-glass-empty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass-empty?s=sharp-regular wine-glass-empty}
 * @preview ![wine-glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wine-glass-empty.svg)
 */
const WineGlassEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M62.3 197c-5.2 57.5 40 107 97.7 107s102.9-49.5 97.7-107L244.2 48 75.8 48 62.3 197zm-47.8-4.3L32 0 288 0l17.5 192.7c7 77.4-47.4 145.2-121.5 157.4l0 114 88 0 0 48-112 0L48 512l0-48 88 0 0-114C61.9 337.8 7.4 270.1 14.5 192.7z" />
    </Icon>
);

export default WineGlassEmpty;