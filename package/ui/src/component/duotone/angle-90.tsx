
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angle-90` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-90?s=duotone angle-90}
 * @preview ![angle-90](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/angle-90.svg)
 */
const Angle_90: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 97.6l0 48.3c36.9 4.3 71.6 16 102.4 33.6l27.4-39.6C187 117.1 143 102.2 96 97.6zm129.3 99.4c29.4 21.6 54.2 49.1 72.9 80.5l41.7-23.8c-22.2-37.7-52-70.5-87.2-96.2l-27.3 39.5zm87.6 109c10.8 24.3 18.1 50.6 21.3 78l48.3 0c-3.6-36.1-13.2-70.4-27.7-102L312.8 306z" />
        <path d="M32 32c17.7 0 32 14.3 32 32l0 352 352 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32z" />
    </Icon>
);

export default Angle_90;