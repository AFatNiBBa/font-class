
import { Icon, generic } from "../../index";

/**
 * A component that renders the `corner` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corner?s=sharp-duotone-solid corner}
 * @preview ![corner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/corner.svg)
 */
const Corner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l32 0 384 0 32 0 0 32 0 160 0 32-64 0 0-32 0-128L32 224 0 224l0-64z" />
    </Icon>
);

export default Corner;