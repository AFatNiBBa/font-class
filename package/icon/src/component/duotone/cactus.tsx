
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cactus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cactus?s=duotone cactus}
 * @preview ![cactus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cactus.svg)
 */
const Cactus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 144l0 64c0 61.9 50.1 112 112 112l48 0 0-96-48 0c-8.8 0-16-7.2-16-16l0-64c0-26.5-21.5-48-48-48S0 117.5 0 144zM352 352l0 96 48 0c61.9 0 112-50.1 112-112l0-64c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 64c0 8.8-7.2 16-16 16l-48 0z" />
        <path d="M160 96c0-53 43-96 96-96s96 43 96 96l0 368c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-368zm80 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Cactus;