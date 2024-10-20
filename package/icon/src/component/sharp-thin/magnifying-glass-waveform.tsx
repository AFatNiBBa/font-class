
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-waveform` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-waveform?s=sharp-thin magnifying-glass-waveform}
 * @preview ![magnifying-glass-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/magnifying-glass-waveform.svg)
 */
const MagnifyingGlassWaveform: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 16a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 400c54.6 0 104.2-21 141.3-55.4L499.9 511.3l11.3-11.3L360.6 349.3C395 312.2 416 262.6 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM192 104l0-8-16 0 0 8 0 208 0 8 16 0 0-8 0-208zm-64 32l0-8-16 0 0 8 0 144 0 8 16 0 0-8 0-144zm128 0l0-8-16 0 0 8 0 144 0 8 16 0 0-8 0-144zm64 32l0-8-16 0 0 8 0 80 0 8 16 0 0-8 0-80z" />
    </Icon>
);

export default MagnifyingGlassWaveform;