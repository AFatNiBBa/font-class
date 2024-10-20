
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe-valve` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-valve?s=duotone pipe-valve}
 * @preview ![pipe-valve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pipe-valve.svg)
 */
const PipeValve: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 192l0 256 384 0 0-256-160 0 0-76-32-4-32 4 0 76L64 192zM224 64l0 12 32 4 32-4 0-12c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M128 128l128-16 128 16c17.7 0 32-14.3 32-32s-14.3-32-32-32L256 80 128 64c-17.7 0-32 14.3-32 32s14.3 32 32 32zM32 160c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256c0-17.7-14.3-32-32-32zm480 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256z" />
    </Icon>
);

export default PipeValve;