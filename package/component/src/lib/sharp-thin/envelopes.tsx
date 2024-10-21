
import { Icon } from "../../index";

/**
 * A component that renders the `envelopes` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelopes?s=sharp-thin envelopes}
 * @preview ![envelopes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/envelopes.svg)
 */
const Envelopes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 48l0 65.8-4.7 3.5L336 278.1 116.7 117.3l-4.7-3.5L112 48l448 0zm0 85.7L560 368l-448 0 0-234.3L331.3 294.5l4.7 3.5 4.7-3.5L560 133.7zM112 32L96 32l0 16 0 320 0 16 16 0 448 0 16 0 0-16 0-320 0-16-16 0L112 32zM64 128l-48 0L0 128l0 16L0 464l0 16 16 0 448 0 16 0 0-16 0-48-16 0 0 48L16 464l0-320 48 0 0-16z" />
    </Icon>
);

export default Envelopes;