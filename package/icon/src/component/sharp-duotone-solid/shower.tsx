
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shower` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shower?s=sharp-duotone-solid shower}
 * @preview ![shower](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shower.svg)
 */
const Shower: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 320a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32-160a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32-160a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M0 32l32 0 96 0 13.3 0 9.4 9.4 36.1 36.1c38.9-21 87.5-17.4 123 10.9L311 87l17-17L361.9 104l-17 17L185 281l-17 17L134.1 264l17-17 1.3-1.3c-28.3-35.5-31.9-84.2-10.9-123L114.7 96 64 96l0 352 0 32L0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default Shower;