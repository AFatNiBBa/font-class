
import { Icon } from "../../index";

/**
 * A component that renders the `tape` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tape?s=sharp-regular tape}
 * @preview ![tape](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tape.svg)
 */
const Tape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 80a176 176 0 1 1 0 352 176 176 0 1 1 0-352zM362.6 432c52-41 85.4-104.6 85.4-176C448 132.3 347.7 32 224 32S0 132.3 0 256S100.3 480 224 480l328 0 24 0 0-48-24 0-189.4 0zM224 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
    </Icon>
);

export default Tape;