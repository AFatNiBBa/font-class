
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon?s=sharp-duotone-solid hexagon}
 * @preview ![hexagon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hexagon.svg)
 */
const Hexagon: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 32L0 256 128 480l256 0L512 256 384 32 128 32z" />
    </Icon>
);

export default Hexagon;