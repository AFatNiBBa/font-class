
import { Icon, generic } from "../../index";

/**
 * A component that renders the `road-bridge` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-bridge?s=duotone road-bridge}
 * @preview ![road-bridge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/road-bridge.svg)
 */
const RoadBridge: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128c0 17.7 14.3 32 32 32l40 0 0 64L0 224l0 96c53 0 96 43 96 96l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-53 43-96 96-96l0-96-40 0 0-64 40 0 0-64L32 96C14.3 96 0 110.3 0 128zm120 32l80 0 0 64-80 0 0-64z" />
        <path d="M608 0L352 0c-17.7 0-32 14.3-32 32l0 448c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-448c0-17.7-14.3-32-32-32zM504 224l0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64c0-13.3 10.7-24 24-24s24 10.7 24 24zM480 360c13.3 0 24 10.7 24 24l0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64c0-13.3 10.7-24 24-24zM504 64l0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default RoadBridge;