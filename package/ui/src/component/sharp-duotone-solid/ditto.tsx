
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ditto` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ditto?s=sharp-duotone-solid ditto}
 * @preview ![ditto](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ditto.svg)
 */
const Ditto: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 32L32 288l64 0L128 32 0 32z" />
        <path d="M224 288L192 32H320L288 288H224z" />
    </Icon>
);

export default Ditto;