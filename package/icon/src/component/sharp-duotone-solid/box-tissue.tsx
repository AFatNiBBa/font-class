
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-tissue` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-tissue?s=sharp-duotone-solid box-tissue}
 * @preview ![box-tissue](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/box-tissue.svg)
 */
const BoxTissue: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224L0 384l512 0 0-160-106.7 0L384 288l64 0 0 32-74.7 0-238.2 0L64 320l0-32 64 0c-4.7-21.3-9.5-42.7-14.2-64L0 224z" />
        <path d="M64 0L208 0c40 0 52 24 64 48s24 48 64 48l112 0L373.3 320l-238.2 0L64 0zM512 384l0 128L0 512 0 384l512 0z" />
    </Icon>
);

export default BoxTissue;