
import { Icon, generic } from "../../index";

/**
 * A component that renders the `headphones` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones?s=sharp-duotone-solid headphones}
 * @preview ![headphones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/headphones.svg)
 */
const Headphones: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2 256l30 0 18.4 0C65.8 156.3 152 80 256 80s190.2 76.3 205.6 176l18.4 0 30 0C494.3 129.7 386.5 32 256 32S17.7 129.7 2 256z" />
        <path d="M2 256c-1.3 10.5-2 21.2-2 32l0 96 0 96 128 0 0-224-77.6 0L2 256zm459.6 0L384 256l0 224 128 0 0-96 0-96c0-10.8-.7-21.5-2-32l-48.5 0z" />
    </Icon>
);

export default Headphones;