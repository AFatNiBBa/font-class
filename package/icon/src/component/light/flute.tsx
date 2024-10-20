
import { Icon } from "../../index";

/**
 * A component that renders the `flute` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flute?s=light flute}
 * @preview ![flute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/flute.svg)
 */
const Flute: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 320l416 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-416 0 0 128zm-32 0l0-128-64 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0zM64 160l64 0 16 0 16 0 416 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-416 0-16 0-16 0-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64zm256 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Flute;