
import { Icon } from "../../index";

/**
 * A component that renders the `handshake-angle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-angle?s=sharp-solid handshake-angle}
 * @preview ![handshake-angle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/handshake-angle.svg)
 */
const HandshakeAngle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 144L496 0 432 64 224 64l0 32 0 32 0 160 80 0 0-112 0-16s0 0 0 0l16 0 96 0 96 0 32 0 0 32 0 48 96-96zM192 128l-96 0 0 144L0 368 144 512l64-64 224 0 0-64 48 0 0-80 32 0 0-112-96 0-80 0 0 112 0 16-16 0-112 0-16 0 0-16 0-176z" />
    </Icon>
);

export default HandshakeAngle;