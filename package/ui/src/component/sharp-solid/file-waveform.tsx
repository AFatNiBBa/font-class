
import { Icon } from "../../index";

/**
 * A component that renders the `file-waveform` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-waveform?s=sharp-solid file-waveform}
 * @preview ![file-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-waveform.svg)
 */
const FileWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 0L32 0l0 288 112 0 9.9 0 4.4 8.8L176 332.2l49.7-99.4L240 204.2l14.3 28.6L281.9 288l70.1 0 16 0 0 32-16 0-80 0-9.9 0-4.4-8.8L240 275.8l-49.7 99.4L176 403.8l-14.3-28.6L134.1 320 32 320l0 192 384 0 0-352-160 0L256 0zm32 0l0 128 128 0L288 0z" />
    </Icon>
);

export default FileWaveform;