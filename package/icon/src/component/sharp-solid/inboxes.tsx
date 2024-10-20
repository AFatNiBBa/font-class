
import { Icon } from "../../index";

/**
 * A component that renders the `inboxes` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inboxes?s=sharp-solid inboxes}
 * @preview ![inboxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/inboxes.svg)
 */
const Inboxes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M74.3 0L96 0 416 0l21.7 0 8 20.1 64 160 2.3 5.7 0 6.2 0 96 0 32-32 0L32 320 0 320l0-32 0-96 0-6.2 2.3-5.7 64-160L74.3 0zm43.3 64L79.3 160l64.7 0 32 64 160 0 32-64 64.7 0L394.3 64 117.7 64zM0 352l144 0 32 64 160 0 32-64 144 0 0 160L0 512 0 352z" />
    </Icon>
);

export default Inboxes;