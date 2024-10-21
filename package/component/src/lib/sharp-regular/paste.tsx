
import { Icon } from "../../index";

/**
 * A component that renders the `paste` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paste?s=sharp-regular paste}
 * @preview ![paste](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/paste.svg)
 */
const Paste: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 96l0 48 80 0 0-16 0-32 32 0 64 0 16 0 48 0 0-48-48 0-56.6 0C211.6 20.9 188.2 0 160 0s-51.6 20.9-55.4 48L48 48 0 48 0 96 0 400l0 48 48 0 112 0 0-48L48 400 48 96l32 0zm64-40a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM464 464l-224 0 0-288 156.1 0L464 243.9 464 464zm48-240l-96-96-176 0-48 0 0 48 0 288 0 48 48 0 224 0 48 0 0-48 0-240z" />
    </Icon>
);

export default Paste;