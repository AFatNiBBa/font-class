
import { Icon } from "../../index";

/**
 * A component that renders the `timeline` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline?s=sharp-light timeline}
 * @preview ![timeline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/timeline.svg)
 */
const Timeline: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 48l0 64 64 0 0-64-64 0zM80 16l32 0 64 0 32 0 0 32 0 64 0 32-32 0-16 0 0 112 320 0 0-112-16 0-32 0 0-32 0-64 0-32 32 0 64 0 32 0 0 32 0 64 0 32-32 0-16 0 0 112 112 0 16 0 0 32-16 0-272 0 0 80 16 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32 32 0 16 0 0-80L16 288 0 288l0-32 16 0 112 0 0-112-16 0-32 0 0-32 0-64 0-32zM352 400l-32 0-16 0 0 64 64 0 0-64-16 0zM528 48l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default Timeline;