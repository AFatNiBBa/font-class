
import { Icon } from "../../index";

/**
 * A component that renders the `down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down?s=sharp-solid down}
 * @preview ![down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/down.svg)
 */
const Down: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 480L384 288l0-32-128 0 0-224L128 32l0 224L0 256l0 32L192 480z" />
    </Icon>
);

export default Down;