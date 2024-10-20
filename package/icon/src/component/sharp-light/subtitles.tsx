
import { Icon } from "../../index";

/**
 * A component that renders the `subtitles` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/subtitles?s=sharp-light subtitles}
 * @preview ![subtitles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/subtitles.svg)
 */
const Subtitles: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 64l0 384 512 0 0-384L32 64zM0 32l32 0 512 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM112 256l192 0 16 0 0 32-16 0-192 0-16 0 0-32 16 0zm256 0l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0zM112 352l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0zm160 0l192 0 16 0 0 32-16 0-192 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Subtitles;