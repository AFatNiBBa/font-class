
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase?s=sharp-regular briefcase}
 * @preview ![briefcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/briefcase.svg)
 */
const Briefcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M152 0L128 0l0 24 0 72L48 96 0 96l0 48L0 280 0 432l0 48 48 0 416 0 48 0 0-48 0-152 0-136 0-48-48 0-80 0 0-72 0-24L360 0 152 0zM464 256l-144 0-128 0L48 256l0-112 104 0 208 0 104 0 0 112zM320 304l144 0 0 128L48 432l0-128 144 0 0 48 128 0 0-48zM336 96L176 96l0-48 160 0 0 48z" />
    </Icon>
);

export default Briefcase;