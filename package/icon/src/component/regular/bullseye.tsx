
import { Icon } from "../../index";

/**
 * A component that renders the `bullseye` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye?s=regular bullseye}
 * @preview ![bullseye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bullseye.svg)
 */
const Bullseye: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-272a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Bullseye;