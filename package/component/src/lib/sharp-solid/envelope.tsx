
import { Icon } from "../../index";

/**
 * A component that renders the `envelope` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=sharp-solid envelope}
 * @preview ![envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/envelope.svg)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l512 0 0 80L256 320 0 144 0 64zM0 448L0 182.8 237.9 346.4 256 358.8l18.1-12.5L512 182.8 512 448 0 448z" />
    </Icon>
);

export default Envelope;