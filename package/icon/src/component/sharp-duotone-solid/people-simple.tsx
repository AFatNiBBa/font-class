
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-simple?s=sharp-duotone-solid people-simple}
 * @preview ![people-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/people-simple.svg)
 */
const PeopleSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64zm256 0a64 64 0 1 0 128 0A64 64 0 1 0 320 64z" />
        <path d="M32 160l192 0 8 192-40 0 0 160L64 512l0-160-40 0 8-192zm288 0l128 0 64 224-64 0 0 128-128 0 0-128-64 0 64-224z" />
    </Icon>
);

export default PeopleSimple;