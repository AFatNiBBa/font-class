
import { Icon, generic } from "../../index";

/**
 * A component that renders the `popsicle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popsicle?s=sharp-duotone-solid popsicle}
 * @preview ![popsicle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/popsicle.svg)
 */
const Popsicle: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 384l128 0 0-224 64 0 0 224 128 0 0-224C320 71.6 248.4 0 160 0S0 71.6 0 160z" />
        <path d="M128 160h64V512H128V160z" />
    </Icon>
);

export default Popsicle;