
import { Icon, generic } from "../../index";

/**
 * A component that renders the `curling-stone` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/curling-stone?s=duotone curling-stone}
 * @preview ![curling-stone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/curling-stone.svg)
 */
const CurlingStone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 16 576 0 0-16c0-53-43-96-96-96L96 224c-53 0-96 43-96 96zm0 48l0 16c0 53 43 96 96 96l384 0c53 0 96-43 96-96l0-16L0 368z" />
        <path d="M224 128c0-17.7 14.3-32 32-32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L256 32c-53 0-96 43-96 96l0 32c-35.3 0-64 28.7-64 64l384 0c0-35.3-28.7-64-64-64l-192 0 0-32z" />
    </Icon>
);

export default CurlingStone;