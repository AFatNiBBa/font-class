
import { Icon } from "../../index";

/**
 * A component that renders the `mp3-player` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mp3-player?s=solid mp3-player}
 * @preview ![mp3-player](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/mp3-player.svg)
 */
const Mp3Player: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM192 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 128a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM96 64C78.3 64 64 78.3 64 96l0 64c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 64z" />
    </Icon>
);

export default Mp3Player;