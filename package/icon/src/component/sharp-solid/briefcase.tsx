
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase?s=sharp-solid briefcase}
 * @preview ![briefcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/briefcase.svg)
 */
const Briefcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l24 0L360 0l24 0 0 24 0 72 128 0 0 160-192 0-128 0L0 256 0 96l128 0 0-72 0-24zM0 288l192 0 0 64 128 0 0-64 192 0 0 192L0 480 0 288zM336 48L176 48l0 48 160 0 0-48z" />
    </Icon>
);

export default Briefcase;