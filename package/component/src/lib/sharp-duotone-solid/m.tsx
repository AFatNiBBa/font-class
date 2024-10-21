
import { Icon, generic } from "../../index";

/**
 * A component that renders the `m` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/m?s=sharp-duotone-solid m}
 * @preview ![m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/m.svg)
 */
const M: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 64 0 0-32 0-278.3L197.4 369.8 224 409.7l26.6-39.9L384 169.7 384 448l0 32 64 0 0-32 0-384 0-32-49.1 0-9.5 14.2L224 294.3 58.6 46.2 49.1 32 0 32z" />
    </Icon>
);

export default M;