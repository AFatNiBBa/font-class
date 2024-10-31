
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-previous` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-previous?s=sharp-duotone-solid diagram-previous}
 * @preview ![diagram-previous](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diagram-previous.svg)
 */
const DiagramPrevious: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 224l128 0 0-32 0-13.3 9.4-9.4 96-96L256 50.7l22.6 22.6 96 96 9.4 9.4 0 13.3 0 32 128 0 0-192L0 32z" />
        <path d="M512 288l0 192L0 480 0 288l232 0 0-64-72 0 0-32 96-96 96 96 0 32-72 0 0 64 232 0z" />
    </Icon>
);

export default DiagramPrevious;