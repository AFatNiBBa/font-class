
import { Icon } from "../../index";

/**
 * A component that renders the `file-image` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-image?s=light file-image}
 * @preview ![file-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/file-image.svg)
 */
const FileImage: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 448l0-256-112 0c-26.5 0-48-21.5-48-48l0-112L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32zm-.5-288c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2L224 144c0 8.8 7.2 16 16 16l111.5 0zM0 64C0 28.7 28.7 0 64 0L220.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM72 256a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM181.3 368.9c-2.9 4.3-7.7 7-12.9 7.1s-10.1-2.2-13.2-6.4l-14.4-19.3L99 416l186.2 0L219.7 311.3l-38.4 57.6zM219.9 272c8 0 15.5 4.1 19.8 11l76 121.5c2.8 4.5 4.3 9.7 4.3 15.1c0 15.7-12.7 28.4-28.4 28.4L92.4 448C76.7 448 64 435.3 64 419.6c0-5.4 1.5-10.7 4.4-15.2l51.8-81.4c4.3-6.8 11.9-10.9 19.9-10.9c7.4 0 14.4 3.5 18.9 9.4l8.1 10.9 33.3-49.9c4.3-6.5 11.6-10.4 19.4-10.4z" />
    </Icon>
);

export default FileImage;