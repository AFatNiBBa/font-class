
import { Icon } from "../../index";

/**
 * A component that renders the `vault` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vault?s=thin vault}
 * @preview ![vault](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/vault.svg)
 */
const Vault: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 16C37.5 16 16 37.5 16 64l0 352c0 26.5 21.5 48 48 48l448 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L64 16zM0 64C0 28.7 28.7 0 64 0L512 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64l0 24c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-24L80 480l0 24c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-24c-35.3 0-64-28.7-64-64L0 64zM368 240A144 144 0 1 0 80 240a144 144 0 1 0 288 0zM64 240a160 160 0 1 1 320 0A160 160 0 1 1 64 240zm160 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm272 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm16 0c0 23.8-17.3 43.5-40 47.3L472 344c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-120.7c-22.7-3.8-40-23.6-40-47.3c0-26.5 21.5-48 48-48s48 21.5 48 48z" />
    </Icon>
);

export default Vault;