
import { Icon } from "../../index";

/**
 * A component that renders the `monitor-waveform` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monitor-waveform?s=light monitor-waveform}
 * @preview ![monitor-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/monitor-waveform.svg)
 */
const MonitorWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 160 144 0c5.3 0 10.3 2.7 13.3 7.1l30.8 46.2 53-139c2.3-5.9 7.8-10 14.2-10.3s12.3 3.1 15.1 8.8L345.9 256l86.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-6.1 0-11.6-3.4-14.3-8.8L290 215.7l-51 134c-2.1 5.6-7.2 9.5-13.2 10.2s-11.8-2-15.1-7L167.4 288 32 288l0 128c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default MonitorWaveform;