
import { Icon } from "../../index";

/**
 * A component that renders the `chess-king` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king?s=sharp-thin chess-king}
 * @preview ![chess-king](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chess-king.svg)
 */
const ChessKing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M232 0l0 8 0 48 56 0 8 0 0 16-8 0-56 0 0 88 208 0 8 0 0 8 0 56 0 1.6-.6 1.5L381 384l-17.4 0L432 222.4l0-46.4-200 0-16 0L16 176l0 46.4L84.4 384 67 384 .6 227.1 0 225.6 0 224l0-56 0-8 8 0 208 0 0-88-56 0-8 0 0-16 8 0 56 0 0-48 0-8 16 0zM48 496l352 0 0-20.5L360.9 432 87.1 432 48 475.5 48 496zm-16 0l0-26.7L80 416l288 0 48 53.3 0 26.7 0 16-16 0L48 512l-16 0 0-16z" />
    </Icon>
);

export default ChessKing;