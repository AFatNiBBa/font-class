
import { Icon } from "../../index";

/**
 * A component that renders the `monitor-waveform` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monitor-waveform?s=sharp-light monitor-waveform}
 * @preview ![monitor-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/monitor-waveform.svg)
 */
const MonitorWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 64l0 192 144 0 8.6 0 4.8 7.1 30.8 46.2 53-139 13-34 16.3 32.6L345.9 256l86.1 0 16 0 0 32-16 0-96 0-9.9 0-4.4-8.8L290 215.7l-51 134-11 29-17.2-25.8L167.4 288 32 288l0 160 512 0 0-384L32 64zM0 32l32 0 512 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default MonitorWaveform;