
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fence` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fence?s=sharp-duotone-solid fence}
 * @preview ![fence](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fence.svg)
 */
const Fence: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 160l0 64 64 0 0-64-64 0zm0 192l0 64 64 0 0-64-64 0zM320 160l0 64 64 0 0-64-64 0zm0 192l0 64 64 0 0-64-64 0z" />
        <path d="M64 32L0 96 0 480l128 0 0-384L64 32zM192 96l0 384 128 0 0-384L256 32 192 96zm192 0l0 384 128 0 0-384L448 32 384 96z" />
    </Icon>
);

export default Fence;