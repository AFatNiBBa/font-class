
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wine-glass-empty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass-empty?s=sharp-duotone-solid wine-glass-empty}
 * @preview ![wine-glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wine-glass-empty.svg)
 */
const WineGlassEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M78.2 198.5C73.9 246.5 111.7 288 160 288s86.1-41.5 81.8-89.5L229.6 64 90.4 64 78.2 198.5zm-63.7-5.8L32 0 288 0l17.5 192.7C312.3 267.3 262 332.9 192 348.5l0 99.5 80 0 0 64-112 0L48 512l0-64 80 0 0-99.5C58 332.9 7.7 267.3 14.5 192.7z" />
    </Icon>
);

export default WineGlassEmpty;