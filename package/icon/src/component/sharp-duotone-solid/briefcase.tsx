
import { Icon, generic } from "../../index";

/**
 * A component that renders the `briefcase` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase?s=sharp-duotone-solid briefcase}
 * @preview ![briefcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/briefcase.svg)
 */
const Briefcase: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 480l512 0 0-192-192 0 0 64-128 0 0-64L0 288z" />
        <path d="M152 0L128 0l0 24 0 72L0 96 0 288l512 0 0-192L384 96l0-72 0-24L360 0 152 0zM336 96L176 96l0-48 160 0 0 48z" />
    </Icon>
);

export default Briefcase;