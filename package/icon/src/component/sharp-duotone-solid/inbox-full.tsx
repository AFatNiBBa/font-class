
import { Icon, generic } from "../../index";

/**
 * A component that renders the `inbox-full` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-full?s=sharp-duotone-solid inbox-full}
 * @preview ![inbox-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/inbox-full.svg)
 */
const InboxFull: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M73 288c16-64 32-128 48-192l270 0 48 192-71 0-32 64-160 0c-10.7-21.3-21.3-42.7-32-64l-71 0zm55-64l0 32 16 0 224 0 16 0 0-32-16 0-224 0-16 0zm32-80l0 32 16 0 160 0 16 0 0-32-16 0-160 0-16 0z" />
        <path d="M96 32L71 32 65 56.2 1 312.2l-1 3.8L0 320 0 448l0 32 32 0 448 0 32 0 0-32 0-128 0-3.9-1-3.8-64-256L441 32l-25 0L96 32zM73 288L121 96l270 0 48 192-71 0-32 64-160 0-32-64-71 0z" />
    </Icon>
);

export default InboxFull;