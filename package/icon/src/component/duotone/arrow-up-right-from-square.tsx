
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-right-from-square` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right-from-square?s=duotone arrow-up-right-from-square}
 * @preview ![arrow-up-right-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-up-right-from-square.svg)
 */
const ArrowUpRightFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 112C0 67.8 35.8 32 80 32l112 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 96c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-112c0-17.7 14.3-32 32-32s32 14.3 32 32l0 112c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 112z" />
        <path d="M288 32c0-17.7 14.3-32 32-32L480 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L246.6 310.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 64 320 64c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default ArrowUpRightFromSquare;