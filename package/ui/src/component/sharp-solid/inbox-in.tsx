
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-in` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-in?s=sharp-solid inbox-in}
 * @preview ![inbox-in](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/inbox-in.svg)
 */
const InboxIn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0 178.7 41.4-41.4L352 146.7 397.3 192l-22.6 22.6-96 96L256 333.3l-22.6-22.6-96-96L114.7 192 160 146.7l22.6 22.6L224 210.7 224 32l0-32 64 0 0 32zM0 320l144 0 32 64 160 0 32-64 144 0 0 192L0 512 0 320z" />
    </Icon>
);

export default InboxIn;