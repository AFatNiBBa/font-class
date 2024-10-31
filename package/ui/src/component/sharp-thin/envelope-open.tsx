
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-open` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open?s=sharp-thin envelope-open}
 * @preview ![envelope-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/envelope-open.svg)
 */
const EnvelopeOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 231.6l240 165 240-165 0-31.6L256 20 16 200l0 31.6zM496 251L256 416 16 251l0 245 480 0 0-245zM0 192L256 0 512 192l0 48 0 256 0 16-16 0L16 512 0 512l0-16L0 240l0-48z" />
    </Icon>
);

export default EnvelopeOpen;