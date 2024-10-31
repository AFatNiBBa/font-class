
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-mp4` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-mp4?s=sharp-duotone-solid file-mp4}
 * @preview ![file-mp4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-mp4.svg)
 */
const FileMp4: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 144L80 304l0 208L0 512 0 0z" />
        <path d="M384 160L224 0l0 160 160 0zM256 368l0-16-16 0-5.6 0-9.6 0-4.5 8.5-28.5 53.8-29.7-54-4.6-8.3-9.5 0-4 0-16 0 0 16 0 128 0 16 32 0 0-16 0-73 18 32.7 14.3 26 13.9-26.2L224 421.8l0 74.2 0 16 32 0 0-16 0-128zm48-16l-16 0 0 16 0 80 0 48 0 16 32 0 0-16 0-32 16 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-32 0zm32 80l-16 0 0-48 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm80 16l16 0 48 0 0 48 0 16 32 0 0-16 0-64 0-64 0-16-32 0 0 16 0 48-32 0 0-48 0-16-32 0 0 16 0 64 0 16z" />
    </Icon>
);

export default FileMp4;