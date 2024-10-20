
import { Icon } from "../../index";

/**
 * A component that renders the `file-heart` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-heart?s=sharp-regular file-heart}
 * @preview ![file-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-heart.svg)
 */
const FileHeart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l176 0 0 112 112 0 0 304L48 464 48 48zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM93.7 305.1c0 14.3 5.9 28 16.4 37.8l70.9 66.4L192 419.5l10.9-10.2 70.9-66.4c10.5-9.8 16.4-23.5 16.4-37.8c0-28.6-23.2-51.8-51.8-51.8l-3.5 0c-14 0-27.5 5.3-37.8 14.9l-5.2 4.8-5.2-4.8c-10.3-9.6-23.8-14.9-37.8-14.9l-3.5 0c-28.6 0-51.8 23.2-51.8 51.8z" />
    </Icon>
);

export default FileHeart;