
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-simple?s=duotone person-simple}
 * @preview ![person-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-simple.svg)
 */
const PersonSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64z" />
        <path d="M105.6 160c-41.6 0-76.3 31.9-79.7 73.4l-4.1 49.3c-2.5 29.8 15.7 56.1 42.2 65.6L64 464c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-115.7c26.5-9.5 44.7-35.8 42.2-65.6l-4.1-49.3C226.7 191.9 192 160 150.4 160l-44.8 0z" />
    </Icon>
);

export default PersonSimple;