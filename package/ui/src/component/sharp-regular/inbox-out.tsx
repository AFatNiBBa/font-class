
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-out` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-out?s=sharp-regular inbox-out}
 * @preview ![inbox-out](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/inbox-out.svg)
 */
const InboxOut: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 288l0 24-48 0 0-24 0-194.9-63 63-17 17-33.9-33.9 17-17 104-104 17-17 17 17 104 104 17 17L360 173.1l-17-17-63-63L280 288zM160 320l32 64 128 0 32-64 112 0 48 0 0 48 0 96 0 48-48 0L48 512 0 512l0-48 0-96 0-48 48 0 112 0zm202.9 85.5L349.7 432 320 432l-128 0-29.7 0-13.3-26.5L130.3 368 48 368l0 96 416 0 0-96-82.3 0-18.7 37.5z" />
    </Icon>
);

export default InboxOut;