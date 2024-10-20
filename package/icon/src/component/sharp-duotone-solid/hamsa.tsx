
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hamsa` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hamsa?s=sharp-duotone-solid hamsa}
 * @preview ![hamsa](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hamsa.svg)
 */
const Hamsa: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288l0 48L95.4 441c41.1 45.2 99.4 71 160.6 71s119.4-25.8 160.6-71L512 336l0-48-96 0 0-256-80 0 0 192-40 0L296 0 216 0l0 224-40 0 0-192L96 32l0 256L0 288zm160 64s48-64 96-64s96 64 96 64s-48 64-96 64s-96-64-96-64z" />
        <path d="M224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Hamsa;