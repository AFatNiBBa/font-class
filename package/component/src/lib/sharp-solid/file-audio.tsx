
import { Icon } from "../../index";

/**
 * A component that renders the `file-audio` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-audio?s=sharp-solid file-audio}
 * @preview ![file-audio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-audio.svg)
 */
const FileAudio: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zm-1.8 447.9l-15.5-28C268.1 403.5 288 372.1 288 336s-19.9-67.5-49.4-83.9l15.5-28C293.4 245.9 320 287.9 320 336s-26.6 90.1-65.8 111.9zm-31.1-56l-15.5-28c9.8-5.5 16.5-15.9 16.5-28s-6.6-22.5-16.5-28l15.5-28C242.7 291 256 311.9 256 336s-13.3 45-32.9 56zM64 376l0-80 56 0 40-40 16 0 0 160-16 0-40-40-56 0z" />
    </Icon>
);

export default FileAudio;