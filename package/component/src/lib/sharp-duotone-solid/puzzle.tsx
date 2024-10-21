
import { Icon, generic } from "../../index";

/**
 * A component that renders the `puzzle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle?s=sharp-duotone-solid puzzle}
 * @preview ![puzzle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/puzzle.svg)
 */
const Puzzle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 512l224 0 0-80-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-80-80 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L0 288zM304 0l0 80 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 64 64 0 0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16 80 0L512 0 304 0z" />
        <path d="M0 288l80 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 80 0 0-80 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-80L0 64 0 288zm224 0l0 80-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 80 224 0 0-224-80 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-80 0z" />
    </Icon>
);

export default Puzzle;