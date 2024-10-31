
import { Icon } from "../../index";

/**
 * A component that renders the `music-note` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=sharp-light music-note}
 * @preview ![music-note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/music-note.svg)
 */
const MusicNote: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 128l0 39 128-32 0-94L224 73l0 55zm-32 0l0-80L352 8l32-8 0 33 0 127L224 200l0 232c0 44.2-50.1 80-112 80S0 476.2 0 432s50.1-80 112-80c31.3 0 59.7 9.2 80 24l0-168 0-33 0-47zM172.6 401.5C158.3 391.3 137 384 112 384s-46.3 7.3-60.6 17.5C37.1 411.7 32 422.9 32 432s5.1 20.3 19.4 30.5C65.7 472.7 87 480 112 480s46.3-7.3 60.6-17.5C186.9 452.3 192 441.1 192 432s-5.1-20.3-19.4-30.5z" />
    </Icon>
);

export default MusicNote;