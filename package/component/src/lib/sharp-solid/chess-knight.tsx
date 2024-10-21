
import { Icon } from "../../index";

/**
 * A component that renders the `chess-knight` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight?s=sharp-solid chess-knight}
 * @preview ![chess-knight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chess-knight.svg)
 */
const ChessKnight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 48L64 80l0 160 48 40 112-72 0 40L64 352l0 48 320 0 28.7-157.8c2.2-12.1 3.3-24.4 3.3-36.8C416 92 324 0 210.5 0L64 0l0 32L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM16 512l416 0 0-32-48-48L64 432 16 480l0 32z" />
    </Icon>
);

export default ChessKnight;