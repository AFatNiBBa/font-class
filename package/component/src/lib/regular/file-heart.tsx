
import { Icon } from "../../index";

/**
 * A component that renders the `file-heart` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-heart?s=regular file-heart}
 * @preview ![file-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/file-heart.svg)
 */
const FileHeart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 448L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zM93.7 306.8c0 14.4 5.8 28.3 16.2 38.4l70.9 69c6.2 6 16.1 6 22.3 0l70.9-69c10.4-10.1 16.2-23.9 16.2-38.4c0-29.5-23.9-53.5-53.5-53.5l-1.5 0c-14.3 0-28.1 5.6-38.4 15.6l-4.9 4.8-4.9-4.8c-10.3-10-24-15.6-38.4-15.6l-1.5 0c-29.5 0-53.5 23.9-53.5 53.5z" />
    </Icon>
);

export default FileHeart;