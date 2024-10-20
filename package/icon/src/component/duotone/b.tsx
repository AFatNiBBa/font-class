
import { Icon, generic } from "../../index";

/**
 * A component that renders the `b` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/b?s=duotone b}
 * @preview ![b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/b.svg)
 */
const B: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M64 32C28.7 32 0 60.7 0 96L0 256 0 416c0 35.3 28.7 64 64 64l128 0c70.7 0 128-57.3 128-128c0-46.5-24.8-87.3-62-109.7c18.7-22.3 30-51 30-82.3c0-70.7-57.3-128-128-128L64 32zm96 192l-96 0L64 96l96 0c35.3 0 64 28.7 64 64s-28.7 64-64 64zM64 288l96 0 32 0c35.3 0 64 28.7 64 64s-28.7 64-64 64L64 416l0-128z" />
    </Icon>
);

export default B;