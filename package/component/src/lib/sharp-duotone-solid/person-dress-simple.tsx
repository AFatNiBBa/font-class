
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-dress-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress-simple?s=sharp-duotone-solid person-dress-simple}
 * @preview ![person-dress-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-dress-simple.svg)
 */
const PersonDressSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64z" />
        <path d="M192 160L64 160 0 384l64 0 0 128 128 0 0-128 64 0L192 160z" />
    </Icon>
);

export default PersonDressSimple;