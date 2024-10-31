
import { Icon } from "../../index";

/**
 * A component that renders the `file-circle-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-check?s=thin file-circle-check}
 * @preview ![file-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/file-circle-check.svg)
 */
const FileCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 496l247.2 0c5.8 5.5 12 10.6 18.5 15.3c-3.2 .5-6.4 .7-9.7 .7L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L204.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 145.9c9 9 14.1 21.2 14.1 33.9l0 18.7c-5.4 1.5-10.8 3.3-16 5.4l0-24.1c0-1.3-.1-2.6-.2-3.9L248 176c-22.1 0-40-17.9-40-40l0-119.8c-1.3-.2-2.6-.2-3.9-.2L64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48zM361.1 160c-.8-1-1.6-1.9-2.4-2.7L226.7 25.4c-.9-.9-1.8-1.7-2.7-2.4L224 136c0 13.3 10.7 24 24 24l113.1 0zM432 496a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm69.7 98.3c3.1 3.1 3.1 8.2 0 11.3l-80 80c-3.1 3.1-8.2 3.1-11.3 0l-48-48c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L416 396.7l74.3-74.3c3.1-3.1 8.2-3.1 11.3 0z" />
    </Icon>
);

export default FileCircleCheck;