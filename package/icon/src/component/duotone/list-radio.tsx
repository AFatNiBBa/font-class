
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-radio` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-radio?s=duotone list-radio}
 * @preview ![list-radio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/list-radio.svg)
 */
const ListRadio: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 96c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32z" />
        <path d="M64 160A64 64 0 1 0 64 32a64 64 0 1 0 0 128zm0 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 88a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 88a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default ListRadio;