
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-4` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-4?s=sharp-duotone-solid circle-4}
 * @preview ![circle-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-4.svg)
 */
const Circle_4: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144.4 64c2.8-10.1 5.6-20.3 8.5-30.4c15-53.9 29.9-107.7 44.9-161.6l49.8 0c-13.3 48-26.7 96-40 144l64.4 0c0-18.7 0-37.3 0-56c0-8 0-16 0-24l48 0 0 24 0 56 8 0 24 0 0 48-24 0-8 0 0 40 0 24-48 0c0-8 0-16 0-24c0-13.3 0-26.7 0-40l-96 0-31.6 0z" />
        <path d="M152.9 289.6L197.8 128l49.8 0-40 144 64.4 0 0-56 0-24 48 0 0 24 0 56 8 0 24 0 0 48-24 0-8 0 0 40 0 24-48 0 0-24 0-40-96 0-31.6 0 8.5-30.4z" />
    </Icon>
);

export default Circle_4;