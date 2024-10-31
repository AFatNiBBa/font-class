
import { Icon } from "../../index";

/**
 * A component that renders the `road-bridge` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-bridge?s=solid road-bridge}
 * @preview ![road-bridge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/road-bridge.svg)
 */
const RoadBridge: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 0L608 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32zM480 200c-13.3 0-24 10.7-24 24l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24zm24 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64zM480 40c-13.3 0-24 10.7-24 24l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24zM32 96l256 0 0 64-40 0 0 64 40 0 0 96c-53 0-96 43-96 96l0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64c0-53-43-96-96-96l0-96 72 0 0-64-40 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm168 64l-80 0 0 64 80 0 0-64z" />
    </Icon>
);

export default RoadBridge;