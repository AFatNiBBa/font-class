
import { Icon } from "../../index";

/**
 * A component that renders the `down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down?s=sharp-regular down}
 * @preview ![down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/down.svg)
 */
const Down: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 272l0-48 0-144-64 0 0 144 0 48-48 0-60.1 0L192 412.1 332.1 272 272 272l-48 0zm112-48l48 0 0 48 0 16L225.9 446.1 192 480l-33.9-33.9L0 288l0-16 0-48 48 0 16 0 48 0 0-48 0-96 0-48 48 0 64 0 48 0 0 48 0 96 0 48 48 0 16 0z" />
    </Icon>
);

export default Down;