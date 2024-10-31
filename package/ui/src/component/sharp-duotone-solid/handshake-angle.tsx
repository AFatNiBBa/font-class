
import { Icon, generic } from "../../index";

/**
 * A component that renders the `handshake-angle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-angle?s=sharp-duotone-solid handshake-angle}
 * @preview ![handshake-angle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/handshake-angle.svg)
 */
const HandshakeAngle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M224 64l0 64 0 96c0 26.7 0 53.3 0 80l96 0 0-112 192 0 0 112 0-32 32-32 96-96L496 0 432 64 224 64z" />
        <path d="M224 128L96 128l0 144L0 368 144 512l64-64 224 0 0-64 48 0 0-80 32 0 0-112-192 0 0 112-96 0 0-176z" />
    </Icon>
);

export default HandshakeAngle;