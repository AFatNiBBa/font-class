
import { Icon } from "../../index";

/**
 * A component that renders the `game-board` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board?s=thin game-board}
 * @preview ![game-board](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/game-board.svg)
 */
const GameBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm136 0l0 56 80 0 0-56c0-4.4 3.6-8 8-8s8 3.6 8 8l0 56 80 0 0-56c0-4.4 3.6-8 8-8s8 3.6 8 8l0 56 56 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56 0 0 80 56 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56 0 0 80 56 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56 0 0 56c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-56-80 0 0 56c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-56-80 0 0 56c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-56-56 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l56 0 0-80-56 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l56 0 0-80-56 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l56 0 0-56c0-4.4 3.6-8 8-8s8 3.6 8 8zm0 152l80 0 0-80-80 0 0 80zm96 0l80 0 0-80-80 0 0 80zm0 16l0 80 80 0 0-80-80 0zm-16 0l-80 0 0 80 80 0 0-80z" />
    </Icon>
);

export default GameBoard;