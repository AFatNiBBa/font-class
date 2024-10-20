
import { Icon } from "../../index";

/**
 * A component that renders the `mp3-player` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mp3-player?s=thin mp3-player}
 * @preview ![mp3-player](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mp3-player.svg)
 */
const Mp3Player: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48L64 16zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM96 80c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16L96 80zM64 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 192c-17.7 0-32-14.3-32-32l0-64zM192 432a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-208a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm16 112a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Mp3Player;