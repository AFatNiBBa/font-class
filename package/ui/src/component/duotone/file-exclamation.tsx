
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-exclamation?s=duotone file-exclamation}
 * @preview ![file-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-exclamation.svg)
 */
const FileExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0c53.3 0 106.7 0 160 0c0 42.7 0 85.3 0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM160 416c0 17.7 14.3 32 32 32c8.8 0 16.8-3.6 22.6-9.4c2.9-2.9 5.2-6.3 6.9-10.2c.8-1.9 1.4-3.9 1.9-6c.2-1 .4-2.1 .5-3.2c.1-.6 .1-1.1 .1-1.6c0-.5 0-1 0-1.3l0-.4 0-.4c0-.3 0-.7 0-1.2s-.1-1.1-.1-1.6c-.1-1.1-.3-2.1-.5-3.2c-.4-2.1-1.1-4.1-1.9-6c-1.6-3.8-4-7.3-6.9-10.2c-5.8-5.8-13.8-9.4-22.6-9.4c-17.7 0-32 14.3-32 32zm8-200c0 37.3 0 74.7 0 112c0 13.3 10.7 24 24 24c6.6 0 12.6-2.7 17-7c2.2-2.2 3.9-4.8 5.1-7.6c.6-1.4 1.1-2.9 1.4-4.5c.2-.8 .3-1.6 .4-2.4c.1-.8 .1-1.6 .1-2.2c0-37.7 0-75 0-112.3c0-.9 0-1.7-.1-2.5s-.2-1.6-.4-2.4c-.3-1.6-.8-3.1-1.4-4.5c-1.2-2.9-3-5.5-5.1-7.6c-4.3-4.3-10.3-7-17-7c-13.3 0-24 10.7-24 24z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM192 192c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default FileExclamation;