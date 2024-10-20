
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe-section` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-section?s=sharp-duotone-solid pipe-section}
 * @preview ![pipe-section](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pipe-section.svg)
 */
const PipeSection: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 128l0 256 512 0 0-256L64 128z" />
        <path d="M64 128l0-32L0 96l0 32L0 384l0 32 64 0 0-32 0-256zm576 0l0-32-64 0 0 32 0 256 0 32 64 0 0-32 0-256z" />
    </Icon>
);

export default PipeSection;