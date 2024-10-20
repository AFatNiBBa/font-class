
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vault` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vault?s=sharp-duotone-solid vault}
 * @preview ![vault](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/vault.svg)
 */
const Vault: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 480l80 0 16 32 64 0 16-32 224 0 16 32 64 0 16-32 80 0L576 0 0 0zM384 240A160 160 0 1 1 64 240a160 160 0 1 1 320 0zm32-64c0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3L480 336l0 16-32 0 0-16 0-114.7c-18.6-6.6-32-24.4-32-45.3z" />
        <path d="M304 240a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM64 240a160 160 0 1 1 320 0A160 160 0 1 1 64 240zm448-64c0 20.9-13.4 38.7-32 45.3L480 336l0 16-32 0 0-16 0-114.7c-18.6-6.6-32-24.4-32-45.3c0-26.5 21.5-48 48-48s48 21.5 48 48z" />
    </Icon>
);

export default Vault;