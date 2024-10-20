
import { Icon } from "../../index";

/**
 * A component that renders the `mp3-player` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mp3-player?s=regular mp3-player}
 * @preview ![mp3-player](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mp3-player.svg)
 */
const Mp3Player: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 48c8.8 0 16 7.2 16 16l0 384c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l256 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM192 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 128a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM112 80c-17.7 0-32 14.3-32 32l0 48c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-48c0-17.7-14.3-32-32-32L112 80z" />
    </Icon>
);

export default Mp3Player;