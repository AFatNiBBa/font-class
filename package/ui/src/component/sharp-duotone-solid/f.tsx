
import { Icon, generic } from "../../index";

/**
 * A component that renders the `f` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/f?s=sharp-duotone-solid f}
 * @preview ![f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/f.svg)
 */
const F: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M32 32L0 32 0 64 0 224l0 32 0 32L0 448l0 32 64 0 0-32 0-160 160 0 32 0 0-64-32 0L64 224 64 96l224 0 32 0 0-64-32 0L32 32z" />
    </Icon>
);

export default F;