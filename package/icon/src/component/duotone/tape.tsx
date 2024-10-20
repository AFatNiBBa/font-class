
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tape` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tape?s=duotone tape}
 * @preview ![tape](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tape.svg)
 */
const Tape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 256a160 160 0 1 0 320 0A160 160 0 1 0 64 256zm224 0a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M64 256a160 160 0 1 1 320 0A160 160 0 1 1 64 256zM380.8 416c41.5-40.7 67.2-97.3 67.2-160C448 132.3 347.7 32 224 32S0 132.3 0 256S100.3 480 224 480l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-163.2 0z" />
    </Icon>
);

export default Tape;