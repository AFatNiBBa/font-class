
import { Icon } from "../../index";

/**
 * A component that renders the `file-waveform` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-waveform?s=sharp-thin file-waveform}
 * @preview ![file-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-waveform.svg)
 */
const FileWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 496L80 496l0-160-16 0 0 160 0 16 16 0 352 0 16 0 0-16 0-336L288 0 80 0 64 0l0 16 0 240 16 0L80 16l192 0 0 152 0 8 8 0 152 0 0 320zm-6.6-336L288 160l0-137.4L425.4 160zM263.2 228.4l-7.6-15.2-6.9 15.5L190.9 358.7l-40.1-66.8-2.3-3.9-4.5 0L8 288l-8 0 0 16 8 0 131.5 0 45.7 76.1 7.9 13.2 6.3-14.1 57.1-128.5 24.4 48.8 2.2 4.4 4.9 0 64 0 8 0 0-16-8 0-59.1 0-29.8-59.6z" />
    </Icon>
);

export default FileWaveform;