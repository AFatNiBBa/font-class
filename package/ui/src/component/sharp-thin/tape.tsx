
import { Icon } from "../../index";

/**
 * A component that renders the `tape` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tape?s=sharp-thin tape}
 * @preview ![tape](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tape.svg)
 */
const Tape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm83.3 416C389.8 430.9 448 350.3 448 256C448 132.3 347.7 32 224 32S0 132.3 0 256S100.3 480 224 480l344 0 8 0 0-16-8 0-260.7 0zM224 176a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
    </Icon>
);

export default Tape;