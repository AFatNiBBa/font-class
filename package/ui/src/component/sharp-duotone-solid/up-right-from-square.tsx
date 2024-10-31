
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-right-from-square` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right-from-square?s=sharp-duotone-solid up-right-from-square}
 * @preview ![up-right-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/up-right-from-square.svg)
 */
const UpRightFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l32 0 128 0 32 0 0 64-32 0L64 96l0 352 352 0 0-96 0-32 64 0 0 32 0 128 0 32-32 0L32 512 0 512l0-32L0 64 0 32z" />
        <path d="M480 208l32-32L512 0 336 0 304 32l65.4 65.4-168 168L178.7 288 224 333.3l22.6-22.6 168-168L480 208z" />
    </Icon>
);

export default UpRightFromSquare;