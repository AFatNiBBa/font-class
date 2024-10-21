
import { Icon, generic } from "../../index";

/**
 * A component that renders the `music-note-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note-slash?s=sharp-duotone-solid music-note-slash}
 * @preview ![music-note-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/music-note-slash.svg)
 */
const MusicNoteSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 432c0 44.2 50.1 80 112 80s112-35.8 112-80l0-33.5-64-50.4 0 11.6c-14.5-4.9-30.8-7.7-48-7.7c-61.9 0-112 35.8-112 80zM320 51.8l0 25 0 64 0 84.9 64 49.7 0-109.6 103.8-25.9 24.2-6.1 0-25 0-64 0-41-39.8 9.9-128 32L320 51.8z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L18.9 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default MusicNoteSlash;