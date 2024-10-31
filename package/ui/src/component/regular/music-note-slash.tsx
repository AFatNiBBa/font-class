
import { Icon } from "../../index";

/**
 * A component that renders the `music-note-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note-slash?s=regular music-note-slash}
 * @preview ![music-note-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/music-note-slash.svg)
 */
const MusicNoteSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 31.1C512 13.9 498.1 0 480.9 0c-2.7 0-5.3 .3-7.9 1L321.9 40.8C311.3 43.6 304 53.1 304 64l0 149L38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L352 250.6l0-55.2 141.9-36.1C504.6 156.6 512 147 512 136l0-104.9zM304 366.3c-18.1-9-40.2-14.3-64-14.3c-61.9 0-112 35.8-112 80s50.1 80 112 80s112-35.8 112-80l0-58.7-48-37.8 0 30.8zm0 65.7c0 2.6-1.4 9.4-12.7 17.5c-11.2 8-29.2 14.5-51.3 14.5s-40.1-6.5-51.3-14.5C177.4 441.4 176 434.6 176 432s1.4-9.4 12.7-17.5c11.2-8 29.2-14.5 51.3-14.5s40.1 6.5 51.3 14.5c11.3 8.1 12.7 14.9 12.7 17.5zM464 117.3L352 145.8l0-63.3L464 53l0 64.3z" />
    </Icon>
);

export default MusicNoteSlash;