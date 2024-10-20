
import { Icon } from "../../index";

/**
 * A component that renders the `vault` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vault?s=sharp-solid vault}
 * @preview ![vault](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/vault.svg)
 */
const Vault: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 0L0 0 0 480l80 0 16 32 64 0 16-32 224 0 16 32 64 0 16-32 80 0L576 0zM224 320a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-240a160 160 0 1 1 0 320 160 160 0 1 1 0-320zM480 221.3L480 352l-32 0 0-130.7c-18.6-6.6-32-24.4-32-45.3c0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3z" />
    </Icon>
);

export default Vault;