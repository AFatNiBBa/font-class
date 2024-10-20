
import { Icon } from "../../index";

/**
 * A component that renders the `tape` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tape?s=light tape}
 * @preview ![tape](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tape.svg)
 */
const Tape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zM339.4 448C404.5 408.8 448 337.5 448 256C448 132.3 347.7 32 224 32S0 132.3 0 256S100.3 480 224 480l336 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-220.6 0zM224 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
    </Icon>
);

export default Tape;