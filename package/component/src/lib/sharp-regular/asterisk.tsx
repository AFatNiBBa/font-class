
import { Icon } from "../../index";

/**
 * A component that renders the `asterisk` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/asterisk?s=sharp-regular asterisk}
 * @preview ![asterisk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/asterisk.svg)
 */
const Asterisk: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M216 32l0 24 0 156.9 131.4-81.3 25.3 40.8L237.6 256l135 83.6-25.3 40.8L216 299.1 216 456l0 24-48 0 0-24 0-156.9L36.6 380.4 11.4 339.6l135-83.6-135-83.6 25.3-40.8L168 212.9 168 56l0-24 48 0z" />
    </Icon>
);

export default Asterisk;