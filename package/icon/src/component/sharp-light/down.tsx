
import { Icon } from "../../index";

/**
 * A component that renders the `down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down?s=sharp-light down}
 * @preview ![down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/down.svg)
 */
const Down: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M240 272l0-32 0-176-96 0 0 176 0 32-32 0-80 0 0 2.7 160 160 160-160 0-2.7-80 0-32 0zm144 16L214.6 457.4 192 480l-22.6-22.6L0 288l0-16 0-32 32 0 48 0 32 0 0-32 0-144 0-32 32 0 96 0 32 0 0 32 0 144 0 32 32 0 48 0 32 0 0 32 0 16z" />
    </Icon>
);

export default Down;