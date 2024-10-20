
import { Icon } from "../../index";

/**
 * A component that renders the `file-user` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-user?s=regular file-user}
 * @preview ![file-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/file-user.svg)
 */
const FileUser: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M304 464c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80l-16 0c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16l-16 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zM256 288a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default FileUser;