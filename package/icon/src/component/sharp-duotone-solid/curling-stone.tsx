
import { Icon, generic } from "../../index";

/**
 * A component that renders the `curling-stone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/curling-stone?s=sharp-duotone-solid curling-stone}
 * @preview ![curling-stone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/curling-stone.svg)
 */
const CurlingStone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 48 576 0 0-48-64-64-32 0L96 224l-32 0L0 288zm0 80l0 48 64 64 448 0 64-64 0-48L0 368z" />
        <path d="M192 32l-32 0 0 32 0 96-64 0 0 64 384 0 0-64-256 0 0-64 160 0 32 0 0-64-32 0L192 32z" />
    </Icon>
);

export default CurlingStone;