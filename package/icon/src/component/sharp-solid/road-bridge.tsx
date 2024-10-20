
import { Icon } from "../../index";

/**
 * A component that renders the `road-bridge` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-bridge?s=sharp-solid road-bridge}
 * @preview ![road-bridge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/road-bridge.svg)
 */
const RoadBridge: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 0L640 0l0 512-320 0L320 0zM504 200l-48 0 0 24 0 64 0 24 48 0 0-24 0-64 0-24zm0 184l0-24-48 0 0 24 0 64 0 24 48 0 0-24 0-64zm0-344l-48 0 0 24 0 64 0 24 48 0 0-24 0-64 0-24zM32 96l256 0 0 64-40 0 0 64 40 0 0 96c-53 0-96 43-96 96l0 96-96 0 0-96c0-53-43-96-96-96l0-96 72 0 0-64-40 0L0 160 0 96l32 0zm168 64l-80 0 0 64 80 0 0-64z" />
    </Icon>
);

export default RoadBridge;