
import { Icon } from "../../index";

/**
 * A component that renders the `flute` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flute?s=sharp-light flute}
 * @preview ![flute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/flute.svg)
 */
const Flute: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 320l0-128 448 0 0 128-448 0zm-32 0l-96 0 0-128 96 0 0 128zm16-160l-16 0-96 0L0 160l0 32L0 320l0 32 32 0 96 0 16 0 16 0 448 0 32 0 0-32 0-128 0-32-32 0-448 0-16 0zM320 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Flute;