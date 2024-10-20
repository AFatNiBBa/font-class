
import { Icon, generic } from "../../index";

/**
 * A component that renders the `music-note` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=duotone music-note}
 * @preview ![music-note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/music-note.svg)
 */
const MusicNote: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M192 64l0 64 0 231.7c37.8 12.8 64 40.4 64 72.3l0-279L359.8 127C374 123.5 384 110.7 384 96l0-64c0-9.9-4.5-19.2-12.3-25.2S353.8-1.4 344.2 1l-128 32C202 36.5 192 49.3 192 64z" />
        <path d="M144 352a112 80 0 1 0 0 160 112 80 0 1 0 0-160z" />
    </Icon>
);

export default MusicNote;