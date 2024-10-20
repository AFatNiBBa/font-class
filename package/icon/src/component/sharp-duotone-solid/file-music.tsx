
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-music` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-music?s=sharp-duotone-solid file-music}
 * @preview ![file-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-music.svg)
 */
const FileMusic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM64 416c0 17.7 21.5 32 48 32s48-14.3 48-32l0-100.9 96-36 0 74.7c-5-1.2-10.4-1.8-16-1.8c-26.5 0-48 14.3-48 32s21.5 32 48 32s48-14.3 48-32l0-128 0-32 0-23.1L266.4 209l-128 48L128 260.9l0 11.1 0 32 0 81.8c-5-1.2-10.4-1.8-16-1.8c-26.5 0-48 14.3-48 32z" />
        <path d="M384 160L224 0l0 160 160 0zm-96 64l0-23.1L266.4 209l-128 48L128 260.9l0 11.1 0 32 0 81.8c-5-1.2-10.4-1.8-16-1.8c-26.5 0-48 14.3-48 32s21.5 32 48 32s48-14.3 48-32l0-100.9 96-36 0 74.7c-5-1.2-10.4-1.8-16-1.8c-26.5 0-48 14.3-48 32s21.5 32 48 32s48-14.3 48-32l0-128 0-32z" />
    </Icon>
);

export default FileMusic;