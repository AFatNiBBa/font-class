
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-back-point-ribbon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-back-point-ribbon?s=sharp-duotone-solid hand-back-point-ribbon}
 * @preview ![hand-back-point-ribbon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-back-point-ribbon.svg)
 */
const HandBackPointRibbon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 304l0 68c0 38 16.9 74 46.1 98.3l5.4 4.5c28.8 24 65 37.1 102.4 37.1L304 512c70.7 0 128-57.3 128-128l0-16 0-48 0-80-80 0 0-32-80 0 0-32-80 0 0-16-80 0 0 64 0 13.3 0 2.7 0 80 0 16-32 0 0-16 0-56L32 304zM112 0l0 32 80 0 0-32L112 0z" />
        <path d="M208 128V32H32L75.6 80 32 128H208z" />
    </Icon>
);

export default HandBackPointRibbon;