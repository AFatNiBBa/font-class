
import { Icon } from "../../index";

/**
 * A component that renders the `ditto` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ditto?s=sharp-regular ditto}
 * @preview ![ditto](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ditto.svg)
 */
const Ditto: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M72 252L48 108l0-28 48 0 0 28L72 252zM144 32L96 32 48 32 0 32 0 80l0 32L32 304l80 0 32-192 0-32 0-48zM248 252L224 108l0-28 48 0 0 28L248 252zM320 32l-48 0-48 0-48 0 0 48 0 32 32 192 80 0 32-192 0-32 0-48z" />
    </Icon>
);

export default Ditto;