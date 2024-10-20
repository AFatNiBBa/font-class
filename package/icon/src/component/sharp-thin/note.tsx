
import { Icon } from "../../index";

/**
 * A component that renders the `note` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note?s=sharp-thin note}
 * @preview ![note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/note.svg)
 */
const Note: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 272-128 0-16 0 0 16 0 128L16 464 16 48l416 0zm-6.6 288L304 457.4 304 336l121.4 0zM16 480l272 0 16 0L448 336l0-16 0-272 0-16-16 0L16 32 0 32 0 48 0 464l0 16 16 0zM72 96l-8 0 0 8 0 48 0 8 8 0 48 0 8 0 0-8 0-48 0-8-8 0L72 96zm8 48l0-32 32 0 0 32-32 0zM64 224l0 8 0 48 0 8 8 0 48 0 8 0 0-8 0-48 0-8-8 0-48 0-8 0zm16 16l32 0 0 32-32 0 0-32zM72 352l-8 0 0 8 0 48 0 8 8 0 48 0 8 0 0-8 0-48 0-8-8 0-48 0zm8 48l0-32 32 0 0 32-32 0z" />
    </Icon>
);

export default Note;