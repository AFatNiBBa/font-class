
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-f` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-f?s=sharp-duotone-solid circle-f}
 * @preview ![circle-f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-f.svg)
 */
const CircleF: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l24 0 144 0 24 0 0 48-24 0-120 0 0 64 88 0 24 0 0 48-24 0-88 0 0 72 0 24-48 0 0-24 0-96 0-112 0-24z" />
        <path d="M160 128l24 0 144 0 24 0 0 48-24 0-120 0 0 64 88 0 24 0 0 48-24 0-88 0 0 72 0 24-48 0 0-24 0-96 0-112 0-24z" />
    </Icon>
);

export default CircleF;