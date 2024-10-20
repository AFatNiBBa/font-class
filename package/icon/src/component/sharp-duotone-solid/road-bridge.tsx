
import { Icon, generic } from "../../index";

/**
 * A component that renders the `road-bridge` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-bridge?s=sharp-duotone-solid road-bridge}
 * @preview ![road-bridge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/road-bridge.svg)
 */
const RoadBridge: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 64 32 0 40 0 0 64L0 224l0 96c53 0 96 43 96 96l0 96 96 0 0-96c0-53 43-96 96-96l0-96-40 0 0-64 40 0 0-64L32 96 0 96zm120 64l80 0 0 64-80 0 0-64z" />
        <path d="M640 0L320 0l0 512 320 0L640 0zM504 224l0 64 0 24-48 0 0-24 0-64 0-24 48 0 0 24zm0 136l0 24 0 64 0 24-48 0 0-24 0-64 0-24 48 0zm0-296l0 64 0 24-48 0 0-24 0-64 0-24 48 0 0 24z" />
    </Icon>
);

export default RoadBridge;