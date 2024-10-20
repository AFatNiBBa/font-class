
import { Icon } from "../../index";

/**
 * A component that renders the `helicopter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helicopter?s=sharp-solid helicopter}
 * @preview ![helicopter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/helicopter.svg)
 */
const Helicopter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 64L384 64l0 64 32 0c88.4 0 160 71.6 160 160l0 64 0 32-32 0-160 0-96 0L192 256 32 192 0 64l64 0 48 64 208 0 0-64L128 64l0-64L576 0l0 64zM384 320l128 0 0-32c0-53-43-96-96-96l-32 0 0 128zm256 96l0 64 0 32-32 0-384 0 0-64 352 0 0-32 64 0z" />
    </Icon>
);

export default Helicopter;