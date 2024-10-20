
import { Icon } from "../../index";

/**
 * A component that renders the `mp3-player` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mp3-player?s=sharp-light mp3-player}
 * @preview ![mp3-player](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mp3-player.svg)
 */
const Mp3Player: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32l0 448 320 0 0-448L32 32zM0 0L32 0 352 0l32 0 0 32 0 448 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM112 336a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm80 112a112 112 0 1 1 0-224 112 112 0 1 1 0 224zM168 336a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 96l0 64 192 0 0-64L96 96zM64 64l32 0 192 0 32 0 0 32 0 64 0 32-32 0L96 192l-32 0 0-32 0-64 0-32z" />
    </Icon>
);

export default Mp3Player;