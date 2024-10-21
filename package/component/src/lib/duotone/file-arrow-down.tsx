
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-arrow-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-down?s=duotone file-arrow-down}
 * @preview ![file-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-arrow-down.svg)
 */
const FileArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM96 320c0 6.1 2.3 12.3 7 17l72 72c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31L216 232c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 102.1-31-31c-9.4-9.4-24.6-9.4-33.9 0c-4.7 4.7-7 10.8-7 17z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM216 232c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 102.1-31-31c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31L216 232z" />
    </Icon>
);

export default FileArrowDown;