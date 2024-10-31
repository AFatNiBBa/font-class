
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-back-point-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-back-point-left?s=sharp-duotone-solid hand-back-point-left}
 * @preview ![hand-back-point-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-back-point-left.svg)
 */
const HandBackPointLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208l0-80 224 0 13.3 0 2.7 0 80 0 16 0 0-32-16 0-56 0 40-48 68 0c38 0 74 16.9 98.3 46.1l4.5 5.4c24 28.8 37.1 65 37.1 102.4L512 320c0 70.7-57.3 128-128 128l-16 0-48 0-80 0 0-80-32 0 0-80-32 0 0-80L0 208z" />
    </Icon>
);

export default HandBackPointLeft;