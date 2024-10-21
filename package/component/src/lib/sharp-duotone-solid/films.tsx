
import { Icon, generic } from "../../index";

/**
 * A component that renders the `films` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/films?s=sharp-duotone-solid films}
 * @preview ![films](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/films.svg)
 */
const Films: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 24L0 456l0 24 24 0 432 0 24 0 0-48-24 0L48 432l0-312 0-24L0 96zM256 80l0 112 160 0 0-112L256 80zm0 144l0 112 160 0 0-112-160 0z" />
        <path d="M96 32l480 0 0 352L96 384 96 32zm56 48l0 48 48 0 0-48-48 0zm368 0l-48 0 0 48 48 0 0-48zM152 184l0 48 48 0 0-48-48 0zm368 0l-48 0 0 48 48 0 0-48zM152 288l0 48 48 0 0-48-48 0zm368 0l-48 0 0 48 48 0 0-48zM256 80l0 112 160 0 0-112L256 80zM416 224l-160 0 0 112 160 0 0-112z" />
    </Icon>
);

export default Films;