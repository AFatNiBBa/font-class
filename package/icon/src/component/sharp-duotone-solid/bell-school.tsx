
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-school` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-school?s=sharp-duotone-solid bell-school}
 * @preview ![bell-school](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bell-school.svg)
 */
const BellSchool: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416-.2A208 208 0 1 0 0 208zm288 0a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
        <path d="M208 160a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 256c55.9 0 106.6-22 144-57.9L352 464l88 0 0-22.4c-14.3-8.3-24-23.8-24-41.6c0-26.5 21.5-48 48-48s48 21.5 48 48c0 17.8-9.7 33.3-24 41.6l0 46.4 0 24-24 0-112 0L64 512l0-153.9C101.4 394 152.1 416 208 416z" />
    </Icon>
);

export default BellSchool;