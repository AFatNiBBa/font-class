
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-waveform-lines` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-waveform-lines?s=sharp-duotone-solid circle-waveform-lines}
 * @preview ![circle-waveform-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-waveform-lines.svg)
 */
const CircleWaveformLines: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-96l32 0 0 16 0 160 0 16-32 0 0-16 0-160 0-16zm64 40l32 0 0 16 0 80 0 16-32 0 0-16 0-80 0-16zm64-72l32 0 0 16 0 224 0 16-32 0 0-16 0-224 0-16zm64 56l32 0 0 16 0 112 0 16-32 0 0-16 0-112 0-16zm64 40l32 0 0 16 0 32 0 16-32 0 0-16 0-32 0-16z" />
        <path d="M288 128l0 16 0 224 0 16-32 0 0-16 0-224 0-16 32 0zM160 160l0 16 0 160 0 16-32 0 0-16 0-160 0-16 32 0zm192 24l0 16 0 112 0 16-32 0 0-16 0-112 0-16 32 0zM224 200l0 16 0 80 0 16-32 0 0-16 0-80 0-16 32 0zm192 24l0 16 0 32 0 16-32 0 0-16 0-32 0-16 32 0z" />
    </Icon>
);

export default CircleWaveformLines;