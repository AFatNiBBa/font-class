
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mp3-player` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mp3-player?s=sharp-duotone-solid mp3-player}
 * @preview ![mp3-player](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mp3-player.svg)
 */
const Mp3Player: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 512L0 512 0 0zM64 64l0 128 256 0 0-128L64 64zM96 352a96 96 0 1 0 192 0A96 96 0 1 0 96 352z" />
        <path d="M320 64l0 128L64 192 64 64l256 0zM224 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 352a96 96 0 1 1 192 0A96 96 0 1 1 96 352z" />
    </Icon>
);

export default Mp3Player;