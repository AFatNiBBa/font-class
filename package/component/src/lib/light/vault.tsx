
import { Icon } from "../../index";

/**
 * A component that renders the `vault` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vault?s=light vault}
 * @preview ![vault](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/vault.svg)
 */
const Vault: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 352c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-352c0-17.7-14.3-32-32-32L64 32zM0 64C0 28.7 28.7 0 64 0L512 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64l0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16L96 480l0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16c-35.3 0-64-28.7-64-64L0 64zM352 240A128 128 0 1 0 96 240a128 128 0 1 0 256 0zM64 240a160 160 0 1 1 320 0A160 160 0 1 1 64 240zm160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm256 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm32 0c0 20.9-13.4 38.7-32 45.3L480 336c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-114.7c-18.6-6.6-32-24.4-32-45.3c0-26.5 21.5-48 48-48s48 21.5 48 48z" />
    </Icon>
);

export default Vault;