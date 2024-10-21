
import { Icon } from "../../index";

/**
 * A component that renders the `vault` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vault?s=regular vault}
 * @preview ![vault](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/vault.svg)
 */
const Vault: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 48c-8.8 0-16 7.2-16 16l0 352c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-352c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L512 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64l0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8-352 0 0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8c-35.3 0-64-28.7-64-64L0 64zM320 240a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM80 240a144 144 0 1 1 288 0A144 144 0 1 1 80 240zm144-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272-16c0 17.8-9.7 33.3-24 41.6L472 328c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-110.4c-14.3-8.3-24-23.8-24-41.6c0-26.5 21.5-48 48-48s48 21.5 48 48z" />
    </Icon>
);

export default Vault;