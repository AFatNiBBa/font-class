
import { Icon, generic } from "../../index";

/**
 * A component that renders the `torii-gate` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/torii-gate?s=sharp-duotone-solid torii-gate}
 * @preview ![torii-gate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/torii-gate.svg)
 */
const ToriiGate: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 128l64 0 0 96-64 0 0-96zm0 160l64 0 0 192 0 32-64 0 0-32 0-192zM224 128l64 0 0 96-64 0 0-96zm160 0l64 0 0 96-64 0 0-96zm0 160l64 0 0 192 0 32-64 0 0-32 0-192z" />
        <path d="M64 128l384 0 64-64 0-64L416 32 96 32 0 0 0 64l64 64zM32 224L0 224l0 64 32 0 448 0 32 0 0-64-32 0L32 224z" />
    </Icon>
);

export default ToriiGate;