
import { Icon, generic } from "../../index";

/**
 * A component that renders the `colon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/colon?s=sharp-duotone-solid colon}
 * @preview ![colon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/colon.svg)
 */
const Colon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M32 320l128 0 0 128L32 448l0-128z" />
        <path d="M32 64H160V192H32V64z" />
    </Icon>
);

export default Colon;