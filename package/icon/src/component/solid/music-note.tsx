
import { Icon } from "../../index";

/**
 * A component that renders the `music-note` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=solid music-note}
 * @preview ![music-note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/music-note.svg)
 */
const MusicNote: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 32c0-9.9-4.5-19.2-12.3-25.2S353.8-1.4 344.2 1l-128 32C202 36.5 192 49.3 192 64l0 64 0 231.7c-14.5-4.9-30.8-7.7-48-7.7c-61.9 0-112 35.8-112 80s50.1 80 112 80s112-35.8 112-80l0-279L359.8 127C374 123.5 384 110.7 384 96l0-64z" />
    </Icon>
);

export default MusicNote;