
import { Icon, generic } from "../../index";

/**
 * A component that renders the `note-sticky` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-sticky?s=sharp-duotone-solid note-sticky}
 * @preview ![note-sticky](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/note-sticky.svg)
 */
const NoteSticky: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l288 0 0-32 0-32 0-96 96 0 32 0 32 0 0-288L0 32z" />
        <path d="M288 320l0 96 0 32 0 32 16 0 13.3 0 9.4-9.4 112-112 9.4-9.4 0-13.3 0-16-32 0-32 0-96 0z" />
    </Icon>
);

export default NoteSticky;