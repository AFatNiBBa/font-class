
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-back-point-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-back-point-right?s=sharp-duotone-solid hand-back-point-right}
 * @preview ![hand-back-point-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-back-point-right.svg)
 */
const HandBackPointRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 208l0-80-224 0-13.3 0-2.7 0-80 0-16 0 0-32 16 0 56 0L208 48l-68 0c-38 0-74 16.9-98.3 46.1l-4.5 5.4C13.1 128.3 0 164.5 0 201.9L0 320c0 70.7 57.3 128 128 128l16 0 48 0 80 0 0-80 32 0 0-80 32 0 0-80 176 0z" />
    </Icon>
);

export default HandBackPointRight;