
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-word` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-word?s=duotone file-word}
 * @preview ![file-word](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-word.svg)
 */
const FileWord: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0c0 42.7 0 85.3 0 128c0 1.1 0 1.4 0 1.7c0 .5 .1 1.1 .1 1.6c.1 1.1 .3 2.1 .5 3.2c.4 2.1 1.1 4.1 1.9 6c1.6 3.8 4 7.3 6.9 10.2c5.8 5.8 13.8 9.4 22.6 9.4l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM64 264c0-.6 0-.3 0 0z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM111 257.1c-3.8-12.7-17.2-19.9-29.9-16.1s-19.9 17.2-16.1 29.9l48 160c3 10 12 16.9 22.4 17.1s19.8-6.2 23.2-16.1L192 336.6l33.3 95.3c3.4 9.8 12.8 16.3 23.2 16.1s19.5-7.1 22.4-17.1l48-160c3.8-12.7-3.4-26.1-16.1-29.9s-26.1 3.4-29.9 16.1l-26.8 89.2-31.6-90.3c-3.4-9.6-12.5-16.1-22.7-16.1s-19.3 6.4-22.7 16.1l-31.6 90.3L111 257.1z" />
    </Icon>
);

export default FileWord;