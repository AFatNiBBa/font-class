
import { Icon } from "../../index";

/**
 * A component that renders the `file-lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-lock?s=sharp-solid file-lock}
 * @preview ![file-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-lock.svg)
 */
const FileLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L224 0l0 160 160 0 0 33.6c-19.8 20.2-32 47.9-32 78.4l0 15.7-32 0L320 512 0 512 0 0zM384 128l-128 0L256 0 384 128zm80 112c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default FileLock;