
import { Icon, generic } from "../../index";

/**
 * A component that renders the `waveform-lines` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/waveform-lines?s=sharp-duotone-solid waveform-lines}
 * @preview ![waveform-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/waveform-lines.svg)
 */
const WaveformLines: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 192l0 32 0 64 0 32 64 0 0-32 0-64 0-32-64 0zM288 0l0 32 0 448 0 32 64 0 0-32 0-448 0-32L288 0zM480 64l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0z" />
        <path d="M256 128l0-32-64 0 0 32 0 256 0 32 64 0 0-32 0-256zm192 32l0-32-64 0 0 32 0 192 0 32 64 0 0-32 0-192zM0 224l0 64 64 0 0-64L0 224zm576 0l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default WaveformLines;