
import { Icon } from "../../index";

/**
 * A component that renders the `file-circle-minus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-minus?s=sharp-regular file-circle-minus}
 * @preview ![file-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-circle-minus.svg)
 */
const FileCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 464l236.5 0c12.3 18.8 28 35.1 46.3 48L48 512 0 512l0-48L0 48 0 0 48 0 256 0 384 128l0 70.6c-17.2 4.9-33.4 12.3-48 21.8l0-60.5-112 0 0-112L48 48l0 416zm240-96a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm224 16l0-32-16 0-128 0-16 0 0 32 16 0 128 0 16 0z" />
    </Icon>
);

export default FileCircleMinus;