
import { Icon } from "../../index";

/**
 * A component that renders the `note-sticky` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-sticky?s=sharp-regular note-sticky}
 * @preview ![note-sticky](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/note-sticky.svg)
 */
const NoteSticky: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 240 0 0-112 112 0 0-240L48 80zM288 480L48 480 0 480l0-48L0 80 0 32l48 0 352 0 48 0 0 48 0 240 0 32L320 480l-32 0z" />
    </Icon>
);

export default NoteSticky;