
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grip-dots` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-dots?s=duotone grip-dots}
 * @preview ![grip-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/grip-dots.svg)
 */
const GripDots: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M112 336a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm160 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm160 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        <path d="M384 128a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm-160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM112 176a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
    </Icon>
);

export default GripDots;