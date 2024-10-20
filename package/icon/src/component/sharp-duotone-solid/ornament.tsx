
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ornament` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ornament?s=sharp-duotone-solid ornament}
 * @preview ![ornament](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ornament.svg)
 */
const Ornament: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 320c0 22.4 3.8 44 10.9 64l362.2 0c7.1-20 10.9-41.6 10.9-64s-3.8-44-10.9-64L10.9 256C3.8 276 0 297.6 0 320zM128 64l0 32 32 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0 0-32c0-35.3-28.7-64-64-64s-64 28.7-64 64z" />
        <path d="M96 96l192 0 0 57.7c39.3 22.7 69.7 58.9 85.1 102.3L10.9 256C26.3 212.6 56.7 176.4 96 153.7L96 96zM10.9 384l362.1 0C346.7 458.6 275.6 512 192 512s-154.7-53.4-181.1-128z" />
    </Icon>
);

export default Ornament;