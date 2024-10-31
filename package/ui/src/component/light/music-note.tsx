
import { Icon } from "../../index";

/**
 * A component that renders the `music-note` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=light music-note}
 * @preview ![music-note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/music-note.svg)
 */
const MusicNote: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 23.1C384 10.3 373.7 0 360.9 0c-2 0-4 .3-5.9 .8L203.9 40.5c-7 1.8-11.9 8.2-11.9 15.5l0 320c-20.3-14.8-48.7-24-80-24C50.1 352 0 387.8 0 432s50.1 80 112 80s112-35.8 112-80l0-242.9 147.9-37.6c7.1-1.8 12.1-8.2 12.1-15.5l0-112.9zM192 432c0 9.1-5.1 20.3-19.4 30.5C158.3 472.7 137 480 112 480s-46.3-7.3-60.6-17.5C37.1 452.3 32 441.1 32 432s5.1-20.3 19.4-30.5C65.7 391.3 87 384 112 384s46.3 7.3 60.6 17.5C186.9 411.7 192 422.9 192 432zM352 123.6L224 156.1l0-87.8L352 34.6l0 88.9z" />
    </Icon>
);

export default MusicNote;