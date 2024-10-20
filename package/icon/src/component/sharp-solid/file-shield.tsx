
import { Icon } from "../../index";

/**
 * A component that renders the `file-shield` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-shield?s=sharp-solid file-shield}
 * @preview ![file-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-shield.svg)
 */
const FileShield: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L224 0l0 160 160 0 0 48.3L256 257.8l0 38.2c0 76.6 34.3 164.8 106.1 216L0 512 0 0zM384 128l-128 0L256 0 384 128zM527.3 312.4L432 275.5l0 184.9c56.5-26.3 90.2-87 95.3-148zM432 512c-96-32-144-130.2-144-216l0-16.2L432 224l144 55.8 0 16.2c0 85.9-48 184-144 216z" />
    </Icon>
);

export default FileShield;