
import { Icon } from "../../index";

/**
 * A component that renders the `face-flushed` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-flushed?s=thin face-flushed}
 * @preview ![face-flushed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-flushed.svg)
 */
const FaceFlushed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM192 368l128 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-128 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm-32-80a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm256 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-144 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM160.4 208a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm192 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32z" />
    </Icon>
);

export default FaceFlushed;