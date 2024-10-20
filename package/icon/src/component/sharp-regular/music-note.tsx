
import { Icon } from "../../index";

/**
 * A component that renders the `music-note` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=sharp-regular music-note}
 * @preview ![music-note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/music-note.svg)
 */
const MusicNote: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 128l0-41.8L336 60.3l0 61.5L224 147.7l0-19.7zm-48 80l0 158.3c-18.1-9-40.2-14.3-64-14.3C50.1 352 0 387.8 0 432s50.1 80 112 80s112-35.8 112-80l0-235.1L384 160l0-110.7L384 0 336 11.1 176 48l0 80 0 30.7 0 49.3zM163.3 414.5c11.3 8.1 12.7 14.9 12.7 17.5s-1.4 9.4-12.7 17.5c-11.2 8-29.2 14.5-51.3 14.5s-40.1-6.5-51.3-14.5C49.4 441.4 48 434.6 48 432s1.4-9.4 12.7-17.5c11.2-8 29.2-14.5 51.3-14.5s40.1 6.5 51.3 14.5z" />
    </Icon>
);

export default MusicNote;