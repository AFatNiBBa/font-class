
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-simple?s=sharp-duotone-solid person-simple}
 * @preview ![person-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-simple.svg)
 */
const PersonSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64z" />
        <path d="M224 160L32 160 24 352l40 0 0 160 128 0 0-160 40 0-8-192z" />
    </Icon>
);

export default PersonSimple;