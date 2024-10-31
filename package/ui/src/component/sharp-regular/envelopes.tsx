
import { Icon } from "../../index";

/**
 * A component that renders the `envelopes` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelopes?s=sharp-regular envelopes}
 * @preview ![envelopes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/envelopes.svg)
 */
const Envelopes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 80L144 80l0 25.4L336 242.5 528 105.4 528 80zm0 84.4L349.9 291.5l-13.9 10-13.9-10L144 164.4 144 336l384 0 0-171.6zM144 32l384 0 48 0 0 48 0 256 0 48-48 0-384 0-48 0 0-48L96 80l0-48 48 0zM48 96l0 24 0 312 408 0 24 0 0 48-24 0L24 480 0 480l0-24L0 120 0 96l48 0z" />
    </Icon>
);

export default Envelopes;