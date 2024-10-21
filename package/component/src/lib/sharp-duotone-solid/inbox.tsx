
import { Icon, generic } from "../../index";

/**
 * A component that renders the `inbox` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox?s=sharp-duotone-solid inbox}
 * @preview ![inbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/inbox.svg)
 */
const Inbox: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M73 288l71 0c10.7 21.3 21.3 42.7 32 64l160 0 32-64 71 0L391 96 121 96c-16 64-32 128-48 192z" />
        <path d="M96 32L71 32 65 56.2 1 312.2l-1 3.8L0 320 0 448l0 32 32 0 448 0 32 0 0-32 0-128 0-3.9-1-3.8-64-256L441 32l-25 0L96 32zM73 288L121 96l270 0 48 192-71 0-32 64-160 0-32-64-71 0z" />
    </Icon>
);

export default Inbox;