
import { Icon } from "../../index";

/**
 * A component that renders the `envelopes` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelopes?s=sharp-solid envelopes}
 * @preview ![envelopes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/envelopes.svg)
 */
const Envelopes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 299.7l-9.3-6.6L96 128.2 96 384l480 0 0-255.8L345.3 293l-9.3 6.6zm233.3-206l6.7-4.8L576 32 96 32l0 56.9 6.7 4.8L336 260.3 569.3 93.7zM48 120l0-24L0 96l0 24L0 456l0 24 24 0 432 0 24 0 0-48-24 0L48 432l0-312z" />
    </Icon>
);

export default Envelopes;