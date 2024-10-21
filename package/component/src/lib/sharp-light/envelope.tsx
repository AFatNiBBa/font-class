
import { Icon } from "../../index";

/**
 * A component that renders the `envelope` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=sharp-light envelope}
 * @preview ![envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/envelope.svg)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 159.2l224 154 224-154L480 96 32 96l0 63.2zM480 198L256 352 32 198l0 218 448 0 0-218zM0 416L0 176 0 96 0 64l32 0 448 0 32 0 0 32 0 80 0 240 0 32-32 0L32 448 0 448l0-32z" />
    </Icon>
);

export default Envelope;