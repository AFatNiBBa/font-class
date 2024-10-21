
import { Icon, generic } from "../../index";

/**
 * A component that renders the `check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check?s=sharp-duotone-solid check}
 * @preview ![check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/check.svg)
 */
const Check: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M448.1 142l-23 22.2L186.7 394.6l-22.2 21.5-22.2-21.5L23 279.4 0 257.2l44.5-46 23 22.2 97 93.7L380.6 118.2l23-22.2 44.5 46z" />
    </Icon>
);

export default Check;