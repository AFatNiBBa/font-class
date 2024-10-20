
import { Icon, generic } from "../../index";

/**
 * A component that renders the `waveform-lines` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/waveform-lines?s=duotone waveform-lines}
 * @preview ![waveform-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/waveform-lines.svg)
 */
const WaveformLines: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 224l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32zM288 32l0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448c0-17.7-14.3-32-32-32s-32 14.3-32 32zM480 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M256 128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256zm192 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192zM0 256a32 32 0 1 0 64 0A32 32 0 1 0 0 256zm576 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
    </Icon>
);

export default WaveformLines;