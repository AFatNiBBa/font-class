
import { Icon } from "../../index";

/**
 * A component that renders the `note` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note?s=sharp-solid note}
 * @preview ![note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/note.svg)
 */
const Note: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 288-128 0-32 0 0 32 0 128L0 480 0 32zM402.7 352l45.3 0-32 32-64 64-32 32 0-45.3 0-50.7 0-32 32 0 50.7 0zM112 112l-48 0 0 48 48 0 0-48zM64 232l0 48 48 0 0-48-48 0zm48 120l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default Note;