
import { Icon } from "../../index";

/**
 * A component that renders the `torii-gate` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/torii-gate?s=sharp-solid torii-gate}
 * @preview ![torii-gate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/torii-gate.svg)
 */
const ToriiGate: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 128l0 64 64 0 0-64 64-64 0-64L416 32 96 32 0 0 0 64l64 64 0 64 64 0 0-64 96 0 0 64 64 0 0-64 96 0zM64 288l0 192 0 32 64 0 0-32 0-192 256 0 0 192 0 32 64 0 0-32 0-192 32 0 32 0 0-64-32 0L32 224 0 224l0 64 32 0 32 0z" />
    </Icon>
);

export default ToriiGate;