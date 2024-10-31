
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-audio` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-audio?s=sharp-duotone-solid file-audio}
 * @preview ![file-audio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-audio.svg)
 */
const FileAudio: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0c0 53.3 0 106.7 0 160l160 0 0 352L0 512 0 0zM64 296l0 80 56 0 40 40 16 0 0-160-16 0-40 40-56 0zm143.5 12c9.8 5.5 16.5 15.9 16.5 28s-6.6 22.5-16.5 28l15.5 28C242.7 381 256 360.1 256 336s-13.3-45-32.9-56l-15.5 28zm31.1-56C268.1 268.5 288 299.9 288 336s-19.9 67.5-49.4 83.9l15.5 28C293.4 426.1 320 384.1 320 336s-26.6-90.1-65.8-111.9l-15.5 28z" />
        <path d="M384 160L224 0l0 160 160 0zM254.2 447.9C293.4 426.1 320 384.1 320 336s-26.6-90.1-65.8-111.9l-15.5 28C268.1 268.5 288 299.9 288 336s-19.9 67.5-49.4 83.9l15.5 28zm-31.1-56C242.7 381 256 360.1 256 336s-13.3-45-32.9-56l-15.5 28c9.8 5.5 16.5 15.9 16.5 28s-6.6 22.5-16.5 28l15.5 28zM64 376l56 0 40 40 16 0 0-160-16 0-40 40-56 0 0 80z" />
    </Icon>
);

export default FileAudio;