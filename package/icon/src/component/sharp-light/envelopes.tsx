
import { Icon } from "../../index";

/**
 * A component that renders the `envelopes` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelopes?s=sharp-light envelopes}
 * @preview ![envelopes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/envelopes.svg)
 */
const Envelopes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 110.9L544 64 128 64l0 46.9L336 249.5 544 110.9zM544 352l0-202.7L336 288 128 149.3 128 352l416 0zm32-224l0 224 0 32-32 0-416 0-32 0 0-32 0-224 0-64 0-32 32 0 416 0 32 0 0 32 0 64zM32 96l0 16 0 336 432 0 16 0 0 32-16 0L16 480 0 480l0-16L0 112 0 96l32 0z" />
    </Icon>
);

export default Envelopes;