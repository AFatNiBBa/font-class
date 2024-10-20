
import { Icon } from "../../index";

/**
 * A component that renders the `envelope` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=sharp-regular envelope}
 * @preview ![envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/envelope.svg)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 150.8l208 143 208-143 0-38.8L48 112l0 38.8zM464 209L256 352 48 209l0 191 416 0 0-191zM0 400L0 176l0-64L0 64l48 0 416 0 48 0 0 48 0 64 0 224 0 48-48 0L48 448 0 448l0-48z" />
    </Icon>
);

export default Envelope;