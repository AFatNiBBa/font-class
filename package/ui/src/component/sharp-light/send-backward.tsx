
import { Icon } from "../../index";

/**
 * A component that renders the `send-backward` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-backward?s=sharp-light send-backward}
 * @preview ![send-backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/send-backward.svg)
 */
const SendBackward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l288 0 0 96 32 0 0-96 0-32L320 0 32 0 0 0 0 32 0 320l0 32 32 0 96 0 0-32-96 0L32 32zM288 96l0-32-32 0L96 64 64 64l0 32 0 160 0 32 32 0 32 0 0-32-32 0L96 96l160 0 0 32 32 0 0-32zm-96 96l288 0 0 288-288 0 0-288zm-32-32l0 32 0 288 0 32 32 0 288 0 32 0 0-32 0-288 0-32-32 0-288 0-32 0z" />
    </Icon>
);

export default SendBackward;