
import { Icon } from "../../index";

/**
 * A component that renders the `note-sticky` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-sticky?s=solid note-sticky}
 * @preview ![note-sticky](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/note-sticky.svg)
 */
const NoteSticky: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l224 0 0-112c0-26.5 21.5-48 48-48l112 0 0-224c0-35.3-28.7-64-64-64L64 32zM448 352l-45.3 0L336 352c-8.8 0-16 7.2-16 16l0 66.7 0 45.3 32-32 64-64 32-32z" />
    </Icon>
);

export default NoteSticky;