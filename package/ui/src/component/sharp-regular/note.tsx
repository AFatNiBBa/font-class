
import { Icon } from "../../index";

/**
 * A component that renders the `note` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note?s=sharp-regular note}
 * @preview ![note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/note.svg)
 */
const Note: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 240-112 0 0 112L48 432 48 80l352 0zM48 480l240 0 32 0L448 352l0-32 0-240 0-48-48 0L48 32 0 32 0 80 0 432l0 48 48 0zm80-352l-48 0 0 48 48 0 0-48zM80 232l0 48 48 0 0-48-48 0zm48 104l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default Note;