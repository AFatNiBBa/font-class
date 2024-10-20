
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-shield` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-shield?s=sharp-duotone-solid file-shield}
 * @preview ![file-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-shield.svg)
 */
const FileShield: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 48.3L256 257.8l0 38.2c0 76.6 34.3 164.8 106.1 216L0 512 0 0z" />
        <path d="M384 160L224 0l0 160 160 0zM527.3 312.4c-5.2 61-38.8 121.7-95.3 148l0-184.9 95.3 36.9zM432 512c96-32 144-130.2 144-216l0-16.2L432 224 288 279.8l0 16.2c0 85.8 48 184 144 216z" />
    </Icon>
);

export default FileShield;