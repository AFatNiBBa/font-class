
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-shield` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-shield?s=sharp-duotone-solid building-shield}
 * @preview ![building-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/building-shield.svg)
 */
const BuildingShield: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l144 0 0-128 96 0 0 128 122.1 0c-68.5-48.9-102.9-131.4-105.9-205.3c-.1-.9-.2-1.7-.2-2.7l0-8 0-8 0-30.2 0-17.8 0-16 16 0 48 0 23.4 0L384 208.3 384 0 0 0zM64 96l64 0 0 64-64 0 0-64zm0 128l64 0 0 64-64 0 0-64zM160 96l64 0 0 64-64 0 0-64zm0 128l64 0 0 64-64 0 0-64z" />
        <path d="M432 275.5l0 184.9c56.5-26.3 90.2-87 95.3-148L432 275.5zM576 296c0 85.8-48 184-144 216c-96-32-144-130.2-144-216l0-16.2L432 224l144 55.8 0 16.2z" />
    </Icon>
);

export default BuildingShield;