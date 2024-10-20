
import { Icon } from "../../index";

/**
 * A component that renders the `game-console-handheld` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-console-handheld?s=sharp-solid game-console-handheld}
 * @preview ![game-console-handheld](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/game-console-handheld.svg)
 */
const GameConsoleHandheld: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L384 0l0 512L0 512 0 0zM96 64l0 160 192 0 0-160L96 64zM232 384a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm88-72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM96 288l0 32-32 0 0 32 32 0 0 32 32 0 0-32 32 0 0-32-32 0 0-32-32 0z" />
    </Icon>
);

export default GameConsoleHandheld;