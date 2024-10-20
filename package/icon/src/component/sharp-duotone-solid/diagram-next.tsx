
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-next` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-next?s=sharp-duotone-solid diagram-next}
 * @preview ![diagram-next](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diagram-next.svg)
 */
const DiagramNext: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 480l512 0 0-192-128 0 0 32 0 13.3-9.4 9.4-96 96L256 461.3l-22.6-22.6-96-96-9.4-9.4 0-13.3 0-32L0 288z" />
        <path d="M512 224l0-192L0 32 0 224l232 0 0 64-72 0 0 32 96 96 96-96 0-32-72 0 0-64 232 0z" />
    </Icon>
);

export default DiagramNext;