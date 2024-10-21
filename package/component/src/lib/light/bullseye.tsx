
import { Icon } from "../../index";

/**
 * A component that renders the `bullseye` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye?s=light bullseye}
 * @preview ![bullseye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bullseye.svg)
 */
const Bullseye: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 384a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-288a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Bullseye;