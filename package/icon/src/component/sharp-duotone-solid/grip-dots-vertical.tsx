
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grip-dots-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-dots-vertical?s=sharp-duotone-solid grip-dots-vertical}
 * @preview ![grip-dots-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grip-dots-vertical.svg)
 */
const GripDotsVertical: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M160 96a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 160a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 160a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M0 96a48 48 0 1 1 96 0A48 48 0 1 1 0 96zM0 256a48 48 0 1 1 96 0A48 48 0 1 1 0 256zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default GripDotsVertical;