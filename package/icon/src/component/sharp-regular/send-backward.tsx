
import { Icon } from "../../index";

/**
 * A component that renders the `send-backward` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-backward?s=sharp-regular send-backward}
 * @preview ![send-backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/send-backward.svg)
 */
const SendBackward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 0L0 0 0 352l128 0 0-192 0-32 32 0 192 0L352 0zM208 208l256 0 0 256-256 0 0-256zm-48-48l0 48 0 256 0 48 48 0 256 0 48 0 0-48 0-256 0-48-48 0-256 0-48 0z" />
    </Icon>
);

export default SendBackward;