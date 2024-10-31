
import { Icon } from "../../index";

/**
 * A component that renders the `flute` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flute?s=solid flute}
 * @preview ![flute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/flute.svg)
 */
const Flute: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 160l48 0 0 192-48 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zM592 352l-464 0 0-192 464 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48zM320 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Flute;