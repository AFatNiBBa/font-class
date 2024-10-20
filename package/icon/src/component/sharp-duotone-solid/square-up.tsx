
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up?s=sharp-duotone-solid square-up}
 * @preview ![square-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-up.svg)
 */
const SquareUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 224L224 96 352 224l0 32-80 0c0 42.7 0 85.3 0 128l-96 0 0-128-80 0 0-32z" />
        <path d="M272 256l80 0 0-32L224 96 96 224l0 32 80 0 0 128 96 0 0-128z" />
    </Icon>
);

export default SquareUp;