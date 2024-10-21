
import { Icon } from "../../index";

/**
 * A component that renders the `monitor-waveform` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monitor-waveform?s=thin monitor-waveform}
 * @preview ![monitor-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/monitor-waveform.svg)
 */
const MonitorWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM279.6 160c-3.2 .2-5.9 2.2-7.1 5.1L214 318.7l-39.4-59.1c-1.5-2.2-4-3.6-6.7-3.6l-88 0 0-128c0-8.8 7.2-16 16-16l384 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L96 400c-8.8 0-16-7.2-16-16l0-112 83.7 0 45.6 68.4c1.7 2.5 4.6 3.8 7.6 3.5s5.5-2.3 6.6-5.1l57.5-151 39.9 79.7c1.4 2.7 4.1 4.4 7.2 4.4l80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-75.1 0-45.8-91.6c-1.4-2.8-4.4-4.6-7.6-4.4zM64 128l0 256c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default MonitorWaveform;