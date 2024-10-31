
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hospital` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hospital?s=duotone hospital}
 * @preview ![hospital](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hospital.svg)
 */
const Hospital: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 144l0 48 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L0 224l0 64 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L0 320 0 464c0 26.5 21.5 48 48 48l112 0 0-416L48 96C21.5 96 0 117.5 0 144zM480 96l0 416 112 0c26.5 0 48-21.5 48-48l0-144-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-48c0-26.5-21.5-48-48-48L480 96z" />
        <path d="M208 0c-26.5 0-48 21.5-48 48l0 464 112 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 112 0 0-464c0-26.5-21.5-48-48-48L208 0zM640 224l0-32-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0zm0 96l0-32-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0zM80 224c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 192l0 32 80 0zm0 96c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 288l0 32 80 0zM312 64l16 0c8.8 0 16 7.2 16 16l0 24 24 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-24 0 0 24c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-24-24 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16l24 0 0-24c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default Hospital;