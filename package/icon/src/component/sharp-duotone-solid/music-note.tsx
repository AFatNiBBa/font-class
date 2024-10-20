
import { Icon, generic } from "../../index";

/**
 * A component that renders the `music-note` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=sharp-duotone-solid music-note}
 * @preview ![music-note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/music-note.svg)
 */
const MusicNote: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M192 51.8l0 25 0 64 0 218.9c37.8 12.8 64 40.4 64 72.3l0-266.2 103.8-25.9 24.2-6.1 0-25 0-64 0-41-39.8 9.9-128 32L192 51.8z" />
        <path d="M144 352a112 80 0 1 0 0 160 112 80 0 1 0 0-160z" />
    </Icon>
);

export default MusicNote;