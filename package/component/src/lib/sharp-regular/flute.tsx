
import { Icon } from "../../index";

/**
 * A component that renders the `flute` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flute?s=sharp-regular flute}
 * @preview ![flute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/flute.svg)
 */
const Flute: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 304l0-96 448 0 0 96-448 0zm-48 0l-48 0 0-96 48 0 0 96zm24-144l-24 0-48 0L0 160l0 48 0 96 0 48 48 0 48 0 24 0 24 0 448 0 48 0 0-48 0-96 0-48-48 0-448 0-24 0zM320 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Flute;