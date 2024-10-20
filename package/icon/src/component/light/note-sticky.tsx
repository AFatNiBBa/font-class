
import { Icon } from "../../index";

/**
 * A component that renders the `note-sticky` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-sticky?s=light note-sticky}
 * @preview ![note-sticky](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/note-sticky.svg)
 */
const NoteSticky: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l208 0 0-96c0-26.5 21.5-48 48-48l96 0 0-208c0-17.7-14.3-32-32-32L64 64zM304 434.7L402.7 336 320 336c-8.8 0-16 7.2-16 16l0 82.7zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 213.5c0 17-6.7 33.3-18.7 45.3L322.7 461.3c-12 12-28.3 18.7-45.3 18.7L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default NoteSticky;