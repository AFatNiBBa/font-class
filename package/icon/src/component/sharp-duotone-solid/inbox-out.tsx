
import { Icon, generic } from "../../index";

/**
 * A component that renders the `inbox-out` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-out?s=sharp-duotone-solid inbox-out}
 * @preview ![inbox-out](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/inbox-out.svg)
 */
const InboxOut: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320L0 512l512 0 0-192-144 0-32 64-160 0-32-64L0 320z" />
        <path d="M288 333.3l0-32 0-178.7 41.4 41.4L352 186.5l45.3-45.3-22.6-22.6-96-96L256 0 233.4 22.6l-96 96-22.6 22.6L160 186.5l22.6-22.6L224 122.5l0 178.7 0 32 64 0z" />
    </Icon>
);

export default InboxOut;