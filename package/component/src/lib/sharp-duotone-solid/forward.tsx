
import { Icon, generic } from "../../index";

/**
 * A component that renders the `forward` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=sharp-duotone-solid forward}
 * @preview ![forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/forward.svg)
 */
const Forward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L256 256 0 448 0 64z" />
        <path d="M256 64V448L512 256 256 64z" />
    </Icon>
);

export default Forward;