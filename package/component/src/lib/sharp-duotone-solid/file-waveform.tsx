
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-waveform` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-waveform?s=sharp-duotone-solid file-waveform}
 * @preview ![file-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-waveform.svg)
 */
const FileWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 0L288 0l0 160 160 0 0 352L64 512l0-192 65.2 0 41.4 82.7 23.9 47.8 19.8-49.6 44.2-110.4 8.1 16.2 6.6 13.3 14.8 0 56 0 24 0 0-48-24 0-41.2 0-25.4-50.7-23.9-47.8-19.8 49.6L189.6 333.5l-24.1-48.2L158.8 272 144 272l-80 0L64 0z" />
        <path d="M448 160L288 0l0 160 160 0zM277.5 221.3l-23.9-47.8-19.8 49.6L189.6 333.5l-24.1-48.2L158.8 272 144 272 24 272 0 272l0 48 24 0 105.2 0 41.4 82.7 23.9 47.8 19.8-49.6 44.2-110.4 8.1 16.2 6.6 13.3 14.8 0 56 0 24 0 0-48-24 0-41.2 0-25.4-50.7z" />
    </Icon>
);

export default FileWaveform;