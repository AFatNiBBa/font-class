
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe-valve` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-valve?s=sharp-duotone-solid pipe-valve}
 * @preview ![pipe-valve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pipe-valve.svg)
 */
const PipeValve: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 192l0 256 384 0 0-256-160 0 0-76.8L256 112l-32 3.2 0 76.8L64 192zM224 64l0 12.8L256 80l32-3.2L288 64c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M96 128l160-16 160 16 0-64L256 80 96 64l0 64zM64 160L0 160l0 32L0 448l0 32 64 0 0-32 0-256 0-32zm448 32l0-32-64 0 0 32 0 256 0 32 64 0 0-32 0-256z" />
    </Icon>
);

export default PipeValve;