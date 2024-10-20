
import { Icon } from "../../index";

/**
 * A component that renders the `face-flushed` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-flushed?s=sharp-light face-flushed}
 * @preview ![face-flushed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-flushed.svg)
 */
const FaceFlushed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm160.4-56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm168 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM192 368l128 0 16 0 0 32-16 0-128 0-16 0 0-32 16 0zm-32-96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-128a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm240 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-128 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z" />
    </Icon>
);

export default FaceFlushed;