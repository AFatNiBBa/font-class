
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mug` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug?s=sharp-duotone-solid mug}
 * @preview ![mug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mug.svg)
 */
const Mug: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M416 64l0 64 32 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-32 0 0 64 32 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-32 0z" />
        <path d="M32 64H416V448H32V64z" />
    </Icon>
);

export default Mug;