
import { Icon, generic } from "../../index";

/**
 * A component that renders the `timeline-arrow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline-arrow?s=sharp-duotone-solid timeline-arrow}
 * @preview ![timeline-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/timeline-arrow.svg)
 */
const TimelineArrow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 160 0 0 48 8 0 48 0 8 0 0-48 258.7 0-33.4 33.4L458.7 344 504 389.3l22.6-22.6 88-88L637.3 256l-22.6-22.6-88-88L504 122.7 458.7 168l22.6 22.6L514.7 224 384 224l0-48-8 0-48 0-8 0 0 48-160 0 0-48-8 0-48 0-8 0 0 48-64 0L0 224z" />
        <path d="M152 72l0 48-48 0 0-48 48 0zM104 16L48 16l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-56 0-48 0zM376 72l0 48-48 0 0-48 48 0zM328 16l-56 0 0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-56 0-48 0zM200 392l48 0 0 48-48 0 0-48zm-56-56l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-56 0-48 0-56 0z" />
    </Icon>
);

export default TimelineArrow;