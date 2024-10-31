
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-right-from-square` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right-from-square?s=sharp-duotone-solid arrow-up-right-from-square}
 * @preview ![arrow-up-right-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-right-from-square.svg)
 */
const ArrowUpRightFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l32 0 128 0 32 0 0 64-32 0L64 96l0 352 352 0 0-96 0-32 64 0 0 32 0 128 0 32-32 0L32 512 0 512l0-32L0 64 0 32z" />
        <path d="M288 0l32 0L480 0l32 0 0 32 0 160 0 32-64 0 0-32 0-82.7L246.6 310.6 224 333.3 178.7 288l22.6-22.6L402.7 64 320 64l-32 0 0-64z" />
    </Icon>
);

export default ArrowUpRightFromSquare;