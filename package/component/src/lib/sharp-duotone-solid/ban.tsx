
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ban` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban?s=sharp-duotone-solid ban}
 * @preview ![ban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ban.svg)
 */
const Ban: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M99.5 144.8c12.5-17.5 27.8-32.8 45.3-45.3L412.5 367.2c-12.5 17.5-27.8 32.8-45.3 45.3L99.5 144.8z" />
        <path d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default Ban;