
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clone?s=sharp-duotone-solid clone}
 * @preview ![clone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clone.svg)
 */
const Clone: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160l0 64L0 448l0 64 64 0 224 0 64 0 0-64 0-96-64 0 0 96L64 448l0-224 96 0 0-64-96 0L0 160z" />
        <path d="M160 352H512V0H160V352z" />
    </Icon>
);

export default Clone;