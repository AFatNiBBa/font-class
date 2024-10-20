
import { Icon } from "../../index";

/**
 * A component that renders the `note` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note?s=solid note}
 * @preview ![note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/note.svg)
 */
const Note: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 224-112 0c-26.5 0-48 21.5-48 48l0 112L64 480c-35.3 0-64-28.7-64-64L0 96zM402.7 352l45.3 0-32 32-64 64-32 32 0-45.3 0-66.7c0-8.8 7.2-16 16-16l66.7 0zM112 376a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM88 112a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm24 144a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Note;