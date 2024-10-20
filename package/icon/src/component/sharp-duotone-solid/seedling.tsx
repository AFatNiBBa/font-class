
import { Icon, generic } from "../../index";

/**
 * A component that renders the `seedling` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seedling?s=sharp-duotone-solid seedling}
 * @preview ![seedling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/seedling.svg)
 */
const Seedling: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M237.7 146.6c25.1 30.7 42.1 68.3 48 109.4l2.3 0c123.7 0 224-100.3 224-224l0-32L448 0C351.5 0 269.2 61 237.7 146.6z" />
        <path d="M64 64L0 64 0 96C0 219.7 100.3 320 224 320l0 160 0 32 64 0 0-32 0-160 0-32C288 164.3 187.7 64 64 64z" />
    </Icon>
);

export default Seedling;