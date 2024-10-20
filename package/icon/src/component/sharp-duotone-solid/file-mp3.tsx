
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-mp3` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-mp3?s=sharp-duotone-solid file-mp3}
 * @preview ![file-mp3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-mp3.svg)
 */
const FileMp3: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 144L80 304l0 208L0 512 0 0z" />
        <path d="M384 160L224 0l0 160 160 0zM256 368l0-16-16 0-5.6 0-9.6 0-4.5 8.5-28.5 53.8-29.7-54-4.6-8.3-9.5 0-4 0-16 0 0 16 0 128 0 16 32 0 0-16 0-73 18 32.7 14.3 26 13.9-26.2L224 421.8l0 74.2 0 16 32 0 0-16 0-128zm48-16l-16 0 0 16 0 80 0 48 0 16 32 0 0-16 0-32 16 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-32 0zm32 80l-16 0 0-48 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm96-80l-16 0 0 32 16 0 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-24 0-16 0 0 32 16 0 24 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0-16 0 0 32 16 0 32 0c26.5 0 48-21.5 48-48c0-12.3-4.6-23.5-12.2-32c7.6-8.5 12.2-19.7 12.2-32c0-26.5-21.5-48-48-48l-32 0z" />
    </Icon>
);

export default FileMp3;