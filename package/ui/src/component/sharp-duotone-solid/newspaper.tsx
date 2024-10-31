
import { Icon, generic } from "../../index";

/**
 * A component that renders the `newspaper` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/newspaper?s=sharp-duotone-solid newspaper}
 * @preview ![newspaper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/newspaper.svg)
 */
const Newspaper: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 32l0 64 0 384 416 0 0-448L96 32zm64 64l160 0 0 128-160 0 0-128zm0 192l16 0 256 0 16 0 0 32-16 0-256 0-16 0 0-32zm0 96l16 0 256 0 16 0 0 32-16 0-256 0-16 0 0-32zM368 96l16 0 48 0 16 0 0 32-16 0-48 0-16 0 0-32zm0 96l16 0 48 0 16 0 0 32-16 0-48 0-16 0 0-32z" />
        <path d="M0 96L0 480l96 0L96 96 0 96zm384 0l-16 0 0 32 16 0 48 0 16 0 0-32-16 0-48 0zm0 96l-16 0 0 32 16 0 48 0 16 0 0-32-16 0-48 0zM176 288l-16 0 0 32 16 0 256 0 16 0 0-32-16 0-256 0zm0 96l-16 0 0 32 16 0 256 0 16 0 0-32-16 0-256 0z" />
    </Icon>
);

export default Newspaper;