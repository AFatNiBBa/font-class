
import { Icon, generic } from "../../index";

/**
 * A component that renders the `note-sticky` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-sticky?s=duotone note-sticky}
 * @preview ![note-sticky](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/note-sticky.svg)
 */
const NoteSticky: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l224 0 0-128c0-17.7 14.3-32 32-32l128 0 0-224c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96z" />
        <path d="M288 352V480h5.5c17 0 33.3-6.7 45.3-18.7l90.5-90.5c12-12 18.7-28.3 18.7-45.3V320H320c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default NoteSticky;