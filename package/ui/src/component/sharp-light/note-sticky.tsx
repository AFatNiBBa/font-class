
import { Icon } from "../../index";

/**
 * A component that renders the `note-sticky` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-sticky?s=sharp-light note-sticky}
 * @preview ![note-sticky](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/note-sticky.svg)
 */
const NoteSticky: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l384 0 0 240-128 0-16 0 0 16 0 128L32 448 32 64zM304 442.7L304 336l106.7 0L304 442.7zm8 37.3L448 344l0-280 0-32-32 0L32 32 0 32 0 64 0 448l0 32 32 0 280 0z" />
    </Icon>
);

export default NoteSticky;