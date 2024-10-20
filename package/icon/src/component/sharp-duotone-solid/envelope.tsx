
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelope` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=sharp-duotone-solid envelope}
 * @preview ![envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/envelope.svg)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 144L0 448l512 0 0-304L256 320 0 144z" />
        <path d="M0 144V64H512v80L256 320 0 144z" />
    </Icon>
);

export default Envelope;