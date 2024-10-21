
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bullseye` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye?s=sharp-duotone-solid bullseye}
 * @preview ![bullseye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bullseye.svg)
 */
const Bullseye: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 256a144 144 0 1 0 288 0 144 144 0 1 0 -288 0zm224 0a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
        <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Bullseye;