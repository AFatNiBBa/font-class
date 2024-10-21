
import { Icon } from "../../index";

/**
 * A component that renders the `chess-queen` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen?s=sharp-regular chess-queen}
 * @preview ![chess-queen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess-queen.svg)
 */
const ChessQueen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM150.6 88l-20 0L127 107.7c-5.4 29.8-31.6 52.4-63 52.4c-5 0-9.8-.6-14.4-1.6L38 155.8l-9.1 7.6L16.6 173.6l-15.6 13 10.2 17.5L97.2 352l55.5 0L69 208c41-1.8 76.2-25.6 94.2-59.9c22 26.8 55.4 43.9 92.8 43.9s70.8-17.1 92.8-43.9c18 34.3 53.2 58.1 94.2 59.9L359.3 352l55.5 0 85.9-147.9 10.2-17.5-15.6-13-12.2-10.2-9.1-7.6-11.6 2.7c-4.6 1.1-9.4 1.6-14.4 1.6c-31.4 0-57.5-22.6-63-52.4L381.4 88l-20 0-18.1 0-15.4 0-6.4 14c-11.4 24.8-36.5 42-65.5 42s-54.1-17.2-65.5-42l-6.4-14-15.4 0-18.1 0zM116.7 464l16.6-32 245.6 0 16.6 32-278.7 0zM448 461.3L408 384l-304 0L64 461.3l0 2.7 0 48 48 0 288 0 48 0 0-48 0-2.7z" />
    </Icon>
);

export default ChessQueen;