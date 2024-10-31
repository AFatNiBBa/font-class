
import { Icon, generic } from "../../index";

/**
 * A component that renders the `seedling` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seedling?s=duotone seedling}
 * @preview ![seedling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/seedling.svg)
 */
const Seedling: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M237.7 146.6c25.1 30.7 42.1 68.3 48 109.4l2.3 0c123.7 0 224-100.3 224-224c0-17.7-14.3-32-32-32L448 0C351.5 0 269.2 61 237.7 146.6z" />
        <path d="M32 64C14.3 64 0 78.3 0 96C0 219.7 100.3 320 224 320l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 0-32C288 164.3 187.7 64 64 64L32 64z" />
    </Icon>
);

export default Seedling;