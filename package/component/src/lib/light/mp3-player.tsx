
import { Icon } from "../../index";

/**
 * A component that renders the `mp3-player` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mp3-player?s=light mp3-player}
 * @preview ![mp3-player](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mp3-player.svg)
 */
const Mp3Player: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L64 32zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM112 336a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm80 112a112 112 0 1 1 0-224 112 112 0 1 1 0 224zM168 336a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 96l0 64 192 0 0-64L96 96zM64 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 192c-17.7 0-32-14.3-32-32l0-64z" />
    </Icon>
);

export default Mp3Player;