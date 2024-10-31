
import { Icon } from "../../index";

/**
 * A component that renders the `music-note` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=sharp-solid music-note}
 * @preview ![music-note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/music-note.svg)
 */
const MusicNote: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 44.8l0-41-39.8 9.9-128 32L192 51.8l0 25 0 64 0 218.9c-14.5-4.9-30.8-7.7-48-7.7c-61.9 0-112 35.8-112 80s50.1 80 112 80s112-35.8 112-80l0-266.2 103.8-25.9 24.2-6.1 0-25 0-64z" />
    </Icon>
);

export default MusicNote;