
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spoon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spoon?s=sharp-duotone-solid spoon}
 * @preview ![spoon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/spoon.svg)
 */
const Spoon: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 160.2l0 39.6c7.2 7.2 14.3 14.3 21.5 21.5c2.2 2.2 4.4 4.4 6.6 6.6c10.7 10.7 21.3 21.3 32 32c2.2 2.2 4.4 4.4 6.6 6.6L312.2 288l39.6 0C432 288 512 192 512 96c0-53-43-96-96-96C320 0 224 80 224 160.2z" />
        <path d="M245.5 221.3l6.6 6.6 32 32 6.6 6.6L70.6 486.6 48 509.3 2.7 464l22.6-22.6L245.5 221.3z" />
    </Icon>
);

export default Spoon;