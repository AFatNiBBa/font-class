
import { Icon } from "../../index";

/**
 * A component that renders the `game-board` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board?s=light game-board}
 * @preview ![game-board](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/game-board.svg)
 */
const GameBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm144 16l0 32 64 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 64 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 64 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 64 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-64 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-64 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-64-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-64-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16zm0 128l64 0 0-64-64 0 0 64zm96 0l64 0 0-64-64 0 0 64zm0 32l0 64 64 0 0-64-64 0zm-32 0l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default GameBoard;