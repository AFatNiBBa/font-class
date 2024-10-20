
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase?s=sharp-thin briefcase}
 * @preview ![briefcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/briefcase.svg)
 */
const Briefcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M136 0l-8 0 0 8 0 88L16 96 0 96l0 16L0 264 0 464l0 16 16 0 480 0 16 0 0-16 0-200 0-152 0-16-16 0L384 96l0-88 0-8-8 0L136 0zM496 256l-160 0-16 0-128 0-16 0L16 256l0-144 120 0 240 0 120 0 0 144zM320 272l0 64-128 0 0-64 128 0zm-144 0l0 64 0 16 16 0 128 0 16 0 0-16 0-64 160 0 0 192L16 464l0-192 160 0zM368 96L144 96l0-80 224 0 0 80z" />
    </Icon>
);

export default Briefcase;