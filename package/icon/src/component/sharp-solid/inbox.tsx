
import { Icon } from "../../index";

/**
 * A component that renders the `inbox` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox?s=sharp-solid inbox}
 * @preview ![inbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/inbox.svg)
 */
const Inbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32L71 32 65 56.2 1 312.2l-1 3.8L0 320 0 448l0 32 32 0 448 0 32 0 0-32 0-128 0-3.9-1-3.8-64-256L441 32l-25 0L96 32zM73 288L121 96l270 0 48 192-71 0-32 64-160 0-32-64-71 0z" />
    </Icon>
);

export default Inbox;