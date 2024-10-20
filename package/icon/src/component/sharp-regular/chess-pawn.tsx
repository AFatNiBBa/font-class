
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn?s=sharp-regular chess-pawn}
 * @preview ![chess-pawn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess-pawn.svg)
 */
const ChessPawn: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M232 152A72 72 0 1 0 88 152a72 72 0 1 0 144 0zm24 120l-12.6 0 10.7 80-48.4 0L195 272l-35 0-35 0-10.7 80-48.4 0 10.7-80L64 272l-24 0 0-48 24 0c-15.1-20.1-24-45-24-72C40 85.7 93.7 32 160 32s120 53.7 120 120c0 27-8.9 51.9-24 72l24 0 0 48-24 0zM69.2 432L52.7 464l214.7 0-16.6-32L69.2 432zM320 464l0 48-48 0L48 512 0 512l0-48 0-2.7L40 384l240 0 40 77.3 0 2.7z" />
    </Icon>
);

export default ChessPawn;