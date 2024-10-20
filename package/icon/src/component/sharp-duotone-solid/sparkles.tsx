
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sparkles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkles?s=sharp-duotone-solid sparkles}
 * @preview ![sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sparkles.svg)
 */
const Sparkles: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320 96l64 32 32 64 32-64 64-32L448 64 416 0 384 64 320 96zm0 320l64 32 32 64 32-64 64-32-64-32-32-64-32 64-64 32z" />
        <path d="M128 192L192 64l64 128 128 64L256 320 192 448 128 320 0 256l128-64z" />
    </Icon>
);

export default Sparkles;