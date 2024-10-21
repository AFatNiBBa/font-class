
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angle-90` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-90?s=sharp-duotone-solid angle-90}
 * @preview ![angle-90](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/angle-90.svg)
 */
const Angle_90: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 97.6l0 48.3c36.9 4.3 71.6 16 102.4 33.6l27.4-39.6C187 117.1 143 102.2 96 97.6zm129.3 99.4c29.4 21.6 54.2 49.1 72.9 80.5l41.7-23.8c-22.2-37.7-52-70.5-87.2-96.2l-27.3 39.5zm87.6 109c10.8 24.3 18.1 50.6 21.3 78l48.3 0c-3.6-36.1-13.2-70.4-27.7-102L312.8 306z" />
        <path d="M64 32l0 32 0 352 352 0 32 0 0 64-32 0L32 480 0 480l0-32L0 64 0 32l64 0z" />
    </Icon>
);

export default Angle_90;