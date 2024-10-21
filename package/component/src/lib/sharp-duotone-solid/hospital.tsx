
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hospital` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hospital?s=sharp-duotone-solid hospital}
 * @preview ![hospital](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hospital.svg)
 */
const Hospital: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 96 80 0 16 0 0 32-16 0L0 224l0 64 80 0 16 0 0 32-16 0L0 320 0 512l160 0 0-416L0 96zm480 0l0 416 160 0 0-192-80 0-16 0 0-32 16 0 80 0 0-64-80 0-16 0 0-32 16 0 80 0 0-96L480 96z" />
        <path d="M480 0L160 0l0 512 112 0 0-128 96 0 0 128 112 0L480 0zM344 64l0 40 40 0 0 48-40 0 0 40-48 0 0-40-40 0 0-48 40 0 0-40 48 0zM560 224l80 0 0-32-80 0-16 0 0 32 16 0zm0 96l80 0 0-32-80 0-16 0 0 32 16 0zM0 224l80 0 16 0 0-32-16 0L0 192l0 32zm0 96l80 0 16 0 0-32-16 0L0 288l0 32z" />
    </Icon>
);

export default Hospital;