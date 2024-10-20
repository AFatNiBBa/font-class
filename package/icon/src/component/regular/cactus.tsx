
import { Icon } from "../../index";

/**
 * A component that renders the `cactus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cactus?s=regular cactus}
 * @preview ![cactus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cactus.svg)
 */
const Cactus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 448c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-352c0-26.5 21.5-48 48-48s48 21.5 48 48l0 352zM256 0c-53 0-96 43-96 96l0 128-48 0c-8.8 0-16-7.2-16-16l0-64c0-26.5-21.5-48-48-48S0 117.5 0 144l0 64c0 61.9 50.1 112 112 112l48 0 0 128c0 35.3 28.7 64 64 64l64 0c35.3 0 64-28.7 64-64l48 0c61.9 0 112-50.1 112-112l0-64c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 64c0 8.8-7.2 16-16 16l-48 0 0-256c0-53-43-96-96-96zm0 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm16 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Cactus;