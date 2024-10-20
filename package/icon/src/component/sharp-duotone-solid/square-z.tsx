
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-z` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-z?s=sharp-duotone-solid square-z}
 * @preview ![square-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-z.svg)
 */
const SquareZ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm112 96l24 0 176 0 24 0 0 32.8-5.7 6.7L187.7 336 312 336l24 0 0 48-24 0-176 0-24 0 0-32.8 5.7-6.7L260.3 176 136 176l-24 0 0-48z" />
        <path d="M336 128l0 32.8-5.7 6.7L187.7 336 312 336l24 0 0 48-24 0-176 0-24 0 0-32.8 5.7-6.7L260.3 176 136 176l-24 0 0-48 24 0 176 0 24 0z" />
    </Icon>
);

export default SquareZ;