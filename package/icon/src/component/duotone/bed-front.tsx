
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed-front` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-front?s=duotone bed-front}
 * @preview ![bed-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bed-front.svg)
 */
const BedFront: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288c0-23.7 12.9-44.4 32-55.4c9.4-5.4 20.3-8.6 32-8.6l16 0 160 0 32 0 160 0 16 0c11.7 0 22.6 3.1 32 8.6c19.1 11.1 32 31.7 32 55.4l0 32 0 32-32 0L32 352 0 352l0-32 0-32z" />
        <path d="M32 80c0-26.5 21.5-48 48-48l352 0c26.5 0 48 21.5 48 48l0 152.6c-9.4-5.4-20.3-8.6-32-8.6l-16 0 0-64c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32l0 64-32 0 0-64c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32l0 64-16 0c-11.7 0-22.6 3.1-32 8.6L32 80zm0 272l448 0 32 0 0 32 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L64 416l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64 0-32 32 0z" />
    </Icon>
);

export default BedFront;