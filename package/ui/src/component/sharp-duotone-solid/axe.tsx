
import { Icon, generic } from "../../index";

/**
 * A component that renders the `axe` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/axe?s=sharp-duotone-solid axe}
 * @preview ![axe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/axe.svg)
 */
const Axe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 448l64 64L336 240l-64-64L0 448zm384-96l0 64 32 0c123.7 0 224-100.3 224-224l0-32-64 0 0 32c0 88.4-71.6 160-160 160l-32 0zM400 48l64 64 48-48L448 0 400 48z" />
        <path d="M224 128L352 0 512 160l64 0 0 32c0 88.4-71.6 160-160 160l-32 0 0-64L224 128z" />
    </Icon>
);

export default Axe;