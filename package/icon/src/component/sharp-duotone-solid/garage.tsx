
import { Icon, generic } from "../../index";

/**
 * A component that renders the `garage` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/garage?s=sharp-duotone-solid garage}
 * @preview ![garage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/garage.svg)
 */
const Garage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 224l384 0 0 96-384 0 0-96zm0 128l384 0 0 160-384 0 0-160zm128 64l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0z" />
        <path d="M0 128V512H96V192H544V512h96V128L320 0 0 128z" />
    </Icon>
);

export default Garage;