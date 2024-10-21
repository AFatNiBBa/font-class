
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grill-fire` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grill-fire?s=sharp-duotone-solid grill-fire}
 * @preview ![grill-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grill-fire.svg)
 */
const GrillFire: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96c0 89.8 52.9 167.3 129.2 203l-23.1 53.8c-3.3-.5-6.7-.8-10.1-.8c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64l74.9 0c-5.4-15.2-8.9-31.3-10.2-48l-72.8 0 22.9-53.4c15.9 3.6 32.3 5.4 49.3 5.4c1.2 0 2.5 0 3.7 0c10.1-44.2 39.2-84.6 68.1-117.9c26.7-30.8 56.6-57.5 88.2-83.1c18.3 14.8 36.2 29.9 53.1 46.1c7.1-21.8 10.9-45 10.9-69.1l0-64L0 32zM120 416a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M256 352c0-89.6 85.3-165.3 128-192l64 64 32-32c76.8 64 96 133.3 96 160c0 88.4-71.6 160-160 160s-160-71.6-160-160zM416 464.2c35.3 0 64-28.7 64-64c0-48-64-96-64-96s-64 48-64 96c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default GrillFire;