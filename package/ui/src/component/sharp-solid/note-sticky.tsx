
import { Icon } from "../../index";

/**
 * A component that renders the `note-sticky` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-sticky?s=sharp-solid note-sticky}
 * @preview ![note-sticky](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/note-sticky.svg)
 */
const NoteSticky: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l288 0 0-128 0-32 32 0 128 0 0-288zm0 320l-45.3 0L352 352l-32 0 0 32 0 50.7 0 45.3 32-32 64-64 32-32z" />
    </Icon>
);

export default NoteSticky;