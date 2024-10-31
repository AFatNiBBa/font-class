
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-audio` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-audio?s=duotone file-audio}
 * @preview ![file-audio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-audio.svg)
 */
const FileAudio: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM64 312l0 48c0 8.8 7.2 16 16 16l33.4 0 35.3 35.3c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-128c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5L113.4 296 80 296c-8.8 0-16 7.2-16 16zm151.9 2.7c5.1 5.7 8.1 13.1 8.1 21.3s-3.1 15.7-8.1 21.3c-5.9 6.6-5.3 16.7 1.3 22.6s16.7 5.3 22.6-1.3C249.8 367.4 256 352.4 256 336s-6.2-31.4-16.3-42.7c-5.9-6.6-16-7.1-22.6-1.3s-7.1 16-1.3 22.6zM236 231.7c-4.6 7.6-2.1 17.4 5.4 22C269.4 270.5 288 301.1 288 336s-18.6 65.5-46.5 82.3c-7.6 4.6-10 14.4-5.4 22c3 5 8.3 7.7 13.7 7.7c2.8 0 5.7-.7 8.2-2.3c37.1-22.4 62-63.1 62-109.7s-24.9-87.3-62-109.7c-7.6-4.6-17.4-2.1-22 5.4z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM258 226.3c-7.6-4.6-17.4-2.1-22 5.4s-2.1 17.4 5.4 22C269.4 270.5 288 301.1 288 336s-18.6 65.5-46.5 82.3c-7.6 4.6-10 14.4-5.4 22s14.4 10 22 5.4c37.1-22.4 62-63.1 62-109.7s-24.9-87.3-62-109.7zm-91.9 30.9c-6-2.5-12.9-1.1-17.4 3.5L113.4 296 80 296c-8.8 0-16 7.2-16 16l0 48c0 8.8 7.2 16 16 16l33.4 0 35.3 35.3c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-128c0-6.5-3.9-12.3-9.9-14.8zm51 34.9c-6.6 5.9-7.1 16-1.3 22.6c5.1 5.7 8.1 13.1 8.1 21.3s-3.1 15.7-8.1 21.3c-5.9 6.6-5.3 16.7 1.3 22.6s16.7 5.3 22.6-1.3C249.8 367.4 256 352.4 256 336s-6.2-31.4-16.3-42.7c-5.9-6.6-16-7.1-22.6-1.3z" />
    </Icon>
);

export default FileAudio;