
import { Icon } from "../../index";

/**
 * A component that renders the `note` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note?s=regular note}
 * @preview ![note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/note.svg)
 */
const Note: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 80c8.8 0 16 7.2 16 16l0 224-80 0c-17.7 0-32 14.3-32 32l0 80L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 480l224 0 5.5 0c17 0 33.3-6.7 45.3-18.7l90.5-90.5c12-12 18.7-28.3 18.7-45.3l0-5.5 0-224c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64zm64-120a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM104 128a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm24 128a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Note;