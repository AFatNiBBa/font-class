
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grid-dividers` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-dividers?s=sharp-duotone-solid grid-dividers}
 * @preview ![grid-dividers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grid-dividers.svg)
 */
const GridDividers: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 96l0 128 128 0 0-128L32 96zm0 288l0 128 128 0 0-128L32 384zM192 96l0 128 128 0 0-128L192 96zm0 288l0 128 128 0 0-128-128 0zM352 96l0 128 128 0 0-128L352 96zm0 288l0 128 128 0 0-128-128 0z" />
        <path d="M512 0L0 0 0 48l512 0 0-48zm0 288L0 288l0 48 512 0 0-48z" />
    </Icon>
);

export default GridDividers;