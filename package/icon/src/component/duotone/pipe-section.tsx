
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe-section` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-section?s=duotone pipe-section}
 * @preview ![pipe-section](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pipe-section.svg)
 */
const PipeSection: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 128l0 256 512 0 0-256L64 128z" />
        <path d="M64 128c0-17.7-14.3-32-32-32S0 110.3 0 128L0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256zm576 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256z" />
    </Icon>
);

export default PipeSection;