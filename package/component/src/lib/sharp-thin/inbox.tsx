
import { Icon } from "../../index";

/**
 * A component that renders the `inbox` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox?s=sharp-thin inbox}
 * @preview ![inbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/inbox.svg)
 */
const Inbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 464l480 0 0-142-.5-2-106.6 0-29.8 59.6-2.2 4.4-4.9 0-192 0-4.9 0-2.2-4.4L123.1 320 16.5 320l-.5 2 0 142zM491.5 304l-64-256-343 0-64 256L128 304l4.9 0 2.2 4.4L164.9 368l182.1 0 29.8-59.6 2.2-4.4 4.9 0 107.5 0zM0 464L0 320 72 32l368 0 72 288 0 144 0 16-16 0L16 480 0 480l0-16z" />
    </Icon>
);

export default Inbox;