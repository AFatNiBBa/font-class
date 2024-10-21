
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-waveform` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-waveform?s=thin magnifying-glass-waveform}
 * @preview ![magnifying-glass-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/magnifying-glass-waveform.svg)
 */
const MagnifyingGlassWaveform: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 16a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 400c54.6 0 104.2-21 141.3-55.4l149 149c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-149-149C395 312.2 416 262.6 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM192 104c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 208c0 4.4 3.6 8 8 8s8-3.6 8-8l0-208zm-64 32c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 144c0 4.4 3.6 8 8 8s8-3.6 8-8l0-144zm128 0c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 144c0 4.4 3.6 8 8 8s8-3.6 8-8l0-144zm64 32c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 80c0 4.4 3.6 8 8 8s8-3.6 8-8l0-80z" />
    </Icon>
);

export default MagnifyingGlassWaveform;