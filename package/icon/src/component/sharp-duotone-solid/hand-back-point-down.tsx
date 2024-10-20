
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-back-point-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-back-point-down?s=sharp-duotone-solid hand-back-point-down}
 * @preview ![hand-back-point-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-back-point-down.svg)
 */
const HandBackPointDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M176 512l-80 0 0-224 0-13.3 0-2.7 0-80 0-16-32 0 0 16 0 56L16 208l0-68c0-38 16.9-74 46.1-98.3l5.4-4.5C96.3 13.1 132.5 0 169.9 0L288 0c70.7 0 128 57.3 128 128l0 16 0 48 0 80-80 0 0 32-80 0 0 32-80 0 0 176z" />
    </Icon>
);

export default HandBackPointDown;