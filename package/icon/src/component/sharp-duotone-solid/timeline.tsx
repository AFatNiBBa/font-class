
import { Icon, generic } from "../../index";

/**
 * A component that renders the `timeline` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline?s=sharp-duotone-solid timeline}
 * @preview ![timeline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/timeline.svg)
 */
const Timeline: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 256 0 0 48 8 0 48 0 8 0 0-48 256 0 32 0 0-64-32 0-64 0 0-48-8 0-48 0-8 0 0 48-320 0 0-48-8 0-48 0-8 0 0 48-64 0L0 224z" />
        <path d="M152 72l0 48-48 0 0-48 48 0zM104 16L48 16l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-56 0-48 0zM536 72l0 48-48 0 0-48 48 0zM488 16l-56 0 0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-56 0-48 0zM296 392l48 0 0 48-48 0 0-48zm-56-56l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-56 0-48 0-56 0z" />
    </Icon>
);

export default Timeline;