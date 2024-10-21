
import { Icon } from "../../index";

/**
 * A component that renders the `note-sticky` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-sticky?s=sharp-thin note-sticky}
 * @preview ![note-sticky](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/note-sticky.svg)
 */
const NoteSticky: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 272 0 0-128 0-16 16 0 128 0 0-272L16 48zM304 457.4L425.4 336 304 336l0 121.4zM288 480L16 480 0 480l0-16L0 48 0 32l16 0 416 0 16 0 0 16 0 272 0 16L304 480l-16 0z" />
    </Icon>
);

export default NoteSticky;