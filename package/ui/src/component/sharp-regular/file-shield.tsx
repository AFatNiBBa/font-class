
import { Icon } from "../../index";

/**
 * A component that renders the `file-shield` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-shield?s=sharp-regular file-shield}
 * @preview ![file-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-shield.svg)
 */
const FileShield: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 464l264.6 0c13.9 18 30.4 34.3 49.5 48L336 512 48 512 0 512l0-48L0 48 0 0 48 0 256 0 384 128l0 80.3-48 18.6 0-66.9-112 0 0-112L48 48l0 416zM527.3 312.4L432 275.5l0 184.9c56.5-26.3 90.2-87 95.3-148zM432 512c-96-32-144-130.2-144-216l0-16.2L432 224l144 55.8 0 16.2c0 85.8-48 184-144 216z" />
    </Icon>
);

export default FileShield;