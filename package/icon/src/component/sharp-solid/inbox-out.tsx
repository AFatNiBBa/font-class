
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-out` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-out?s=sharp-solid inbox-out}
 * @preview ![inbox-out](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/inbox-out.svg)
 */
const InboxOut: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 288l0 32-64 0 0-32 0-162.7-41.4 41.4L160 189.3 114.7 144l22.6-22.6 96-96L256 2.7l22.6 22.6 96 96L397.3 144 352 189.3l-22.6-22.6L288 125.3 288 288zM0 320l144 0 32 64 160 0 32-64 144 0 0 192L0 512 0 320z" />
    </Icon>
);

export default InboxOut;