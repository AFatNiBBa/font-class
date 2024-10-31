
import { Icon } from "../../index";

/**
 * A component that renders the `vault` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vault?s=sharp-light vault}
 * @preview ![vault](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/vault.svg)
 */
const Vault: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 32l0 416 512 0 0-416L32 32zM0 0L32 0 544 0l32 0 0 32 0 416 0 32-32 0-32 0 0 16 0 16-32 0 0-16 0-16L96 480l0 16 0 16-32 0 0-16 0-16-32 0L0 480l0-32L0 32 0 0zM352 240A128 128 0 1 0 96 240a128 128 0 1 0 256 0zM64 240a160 160 0 1 1 320 0A160 160 0 1 1 64 240zm160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm256 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm32 0c0 20.9-13.4 38.7-32 45.3L480 336l0 16-32 0 0-16 0-114.7c-18.6-6.6-32-24.4-32-45.3c0-26.5 21.5-48 48-48s48 21.5 48 48z" />
    </Icon>
);

export default Vault;