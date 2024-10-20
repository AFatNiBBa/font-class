
import { Icon } from "../../index";

/**
 * A component that renders the `face-flushed` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-flushed?s=regular face-flushed}
 * @preview ![face-flushed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/face-flushed.svg)
 */
const FaceFlushed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM160.4 248a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm216-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM192 336c-13.3 0-24 10.7-24 24s10.7 24 24 24l128 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-128 0zM160 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm144-80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default FaceFlushed;