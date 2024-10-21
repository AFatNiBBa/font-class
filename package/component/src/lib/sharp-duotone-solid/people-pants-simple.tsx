
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-pants-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-pants-simple?s=sharp-duotone-solid people-pants-simple}
 * @preview ![people-pants-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/people-pants-simple.svg)
 */
const PeoplePantsSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64zm256 0a64 64 0 1 0 128 0A64 64 0 1 0 320 64z" />
        <path d="M32 160l192 0 8 192-40 0 0 160L64 512l0-160-40 0 8-192zm256 0l192 0 8 192-40 0 0 160-128 0 0-160-40 0 8-192z" />
    </Icon>
);

export default PeoplePantsSimple;