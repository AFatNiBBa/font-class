
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building?s=sharp-duotone-solid building}
 * @preview ![building](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/building.svg)
 */
const Building: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 512-144 0 0-128-96 0 0 128L0 512 0 0zM64 96l0 64 64 0 0-64L64 96zm0 128l0 64 64 0 0-64-64 0zM160 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0zM256 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0z" />
        <path d="M128 96L64 96l0 64 64 0 0-64zm0 128l-64 0 0 64 64 0 0-64zm96 0l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0zM160 96l0 64 64 0 0-64-64 0zm160 0l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default Building;