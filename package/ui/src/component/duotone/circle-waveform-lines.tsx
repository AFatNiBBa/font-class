
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-waveform-lines` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-waveform-lines?s=duotone circle-waveform-lines}
 * @preview ![circle-waveform-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-waveform-lines.svg)
 */
const CircleWaveformLines: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 160c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-160zm64 40c0-8.8 7.2-16 16-16s16 7.2 16 16l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80zm64-72c0-8.8 7.2-16 16-16s16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224zm64 56c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112zm64 40c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32z" />
        <path d="M272 128c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16zM144 160c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16zm192 24c8.8 0 16 7.2 16 16l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112c0-8.8 7.2-16 16-16zM208 200c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80c0-8.8 7.2-16 16-16zm192 24c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default CircleWaveformLines;