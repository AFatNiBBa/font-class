
import { Icon } from "../../index";

/**
 * A component that renders the `chess-bishop-piece` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop-piece?s=regular chess-bishop-piece}
 * @preview ![chess-bishop-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chess-bishop-piece.svg)
 */
const ChessBishopPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M64 56c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24c0 12.2-9.2 22.3-21 23.8c6.2 6.4 13.2 14.4 20.2 23.8C210.8 129.8 232 168.8 232 216c0 20-5.9 35.9-13.9 48.2c3.7 4.2 5.9 9.7 5.9 15.8c0 11.3-7.8 20.8-18.3 23.3l4.9 48.7-48.2 0-4.8-48-59 0-4.8 48-48.2 0 4.9-48.7C39.8 300.8 32 291.3 32 280c0-6 2.2-11.6 5.9-15.8C29.9 251.9 24 236 24 216c0-47.2 21.2-86.2 40.8-112.4c7-9.4 14.1-17.4 20.2-23.8C73.2 78.3 64 68.2 64 56zm93.3 200l7.5-5.1c9.6-6.5 19.2-16.9 19.2-34.9c0-13.8-2.6-26.9-6.9-39.2L161 193c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l26.1-26.1-.4-.5c-8.1-10.8-16.2-19.3-22.2-25.1c-.9-.9-1.8-1.7-2.6-2.5c-.8 .8-1.7 1.6-2.6 2.5c-6 5.8-14.1 14.4-22.2 25.1C86.8 154.2 72 183.2 72 216c0 18.1 9.6 28.5 19.2 34.9l7.5 5.1 58.7 0zM69.2 432L52.7 464l150.7 0-16.6-32L69.2 432zm-9.7-48l137 0c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8L40.8 512C18.2 512 0 493.8 0 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C36.5 390.7 47.5 384 59.5 384z" />
    </Icon>
);

export default ChessBishopPiece;