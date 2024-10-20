
import { Icon } from "../../index";

/**
 * A component that renders the `note` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note?s=sharp-light note}
 * @preview ![note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/note.svg)
 */
const Note: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64L32 64l0 384 240 0 0-128 0-16 16 0 128 0 0-240zm-5.3 272L304 336l0 106.7L410.7 336zm37.3 8L312 480 32 480 0 480l0-32L0 64 0 32l32 0 384 0 32 0 0 32 0 280zM128 128l0 48-48 0 0-48 48 0zM80 232l48 0 0 48-48 0 0-48zm48 104l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default Note;