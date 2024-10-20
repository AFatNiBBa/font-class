
import { Icon, generic } from "../../index";

/**
 * A component that renders the `road-barrier` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-barrier?s=sharp-duotone-solid road-barrier}
 * @preview ![road-barrier](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/road-barrier.svg)
 */
const RoadBarrier: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 96l85.2 0L64 266.3 64 96zm42.8 192l90.6-181.3L202.8 96l74.3 0L186.5 277.3 181.2 288l-74.3 0zm128 0l90.6-181.3L330.8 96l74.3 0L314.5 277.3 309.2 288l-74.3 0zm128 0l90.6-181.3L458.8 96l74.3 0L442.5 277.3 437.2 288l-74.3 0zm128 0L576 117.7 576 288l-85.2 0z" />
        <path d="M64 32l0 32 0 384 0 32L0 480l0-32L0 64 0 32l64 0zm576 0l0 32 0 384 0 32-64 0 0-32 0-384 0-32 64 0z" />
    </Icon>
);

export default RoadBarrier;