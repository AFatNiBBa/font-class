
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-mov` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-mov?s=duotone file-mov}
 * @preview ![file-mov](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-mov.svg)
 */
const FileMov: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-240 0c-35.3 0-64 28.7-64 64l0 144-16 0c-35.3 0-64-28.7-64-64L0 64z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM157.7 359.8c-3.7-6.2-11.1-9.1-18-7.2s-11.7 8.2-11.7 15.4l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-70.2 18.3 30.5c2.9 4.8 8.1 7.8 13.7 7.8s10.8-3 13.7-7.8L224 425.8l0 70.2c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-7.2-4.8-13.5-11.7-15.4s-14.3 1-18 7.2L192 416.9l-34.3-57.1zM448 368c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 31.6c0 34.7 10.3 68.7 29.6 97.6l5.1 7.7c3 4.5 8 7.1 13.3 7.1s10.3-2.7 13.3-7.1l5.1-7.7c19.3-28.9 29.6-62.9 29.6-97.6l0-31.6c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 31.6c0 23-5.5 45.6-16 66c-10.5-20.3-16-42.9-16-66l0-31.6zM288 392l0 80c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-80c0-22.1-17.9-40-40-40l-16 0c-22.1 0-40 17.9-40 40zm40-8l16 0c4.4 0 8 3.6 8 8l0 80c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default FileMov;