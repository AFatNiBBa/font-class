
import { Icon, generic } from "../../index";

/**
 * A component that renders the `computer-classic` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-classic?s=sharp-duotone-solid computer-classic}
 * @preview ![computer-classic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/computer-classic.svg)
 */
const ComputerClassic: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L448 0l0 416L0 416 0 0zM32 448l384 0 0 64L32 512l0-64zM56 336a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zM64 64l0 192 320 0 0-192L64 64zM224 320l0 32 16 0 128 0 16 0 0-32-16 0-128 0-16 0z" />
        <path d="M64 64H384V256H64V64z" />
    </Icon>
);

export default ComputerClassic;