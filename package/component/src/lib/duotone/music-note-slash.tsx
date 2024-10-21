
import { Icon, generic } from "../../index";

/**
 * A component that renders the `music-note-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note-slash?s=duotone music-note-slash}
 * @preview ![music-note-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/music-note-slash.svg)
 */
const MusicNoteSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 432c0 44.2 50.1 80 112 80s112-35.8 112-80l0-33.5-64-50.4 0 11.6c-14.5-4.9-30.8-7.7-48-7.7c-61.9 0-112 35.8-112 80zM320 64l0 64 0 97.5c21.3 16.7 42.7 33.4 64 50.2L384 153 487.8 127C502 123.5 512 110.7 512 96l0-64c0-9.9-4.5-19.2-12.3-25.2S481.8-1.4 472.2 1l-128 32C330 36.5 320 49.3 320 64z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default MusicNoteSlash;