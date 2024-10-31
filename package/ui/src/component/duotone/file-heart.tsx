
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-heart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-heart?s=duotone file-heart}
 * @preview ![file-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-heart.svg)
 */
const FileHeart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM80 301.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c3.1 3.1 7.2 4.7 11.3 4.7s8.2-1.6 11.3-4.7l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3c0-33.8-27.4-61.3-61.3-61.3c-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9C107.4 240 80 267.4 80 301.3z" />
        <path d="M384 160l-128 0c-17.7 0-32-14.3-32-32L224 0 384 160zM80 301.3c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0L97.9 344.6C86.5 333.1 80 317.5 80 301.3z" />
    </Icon>
);

export default FileHeart;