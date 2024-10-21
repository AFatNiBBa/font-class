
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-center-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-center-vertical?s=sharp-duotone-solid objects-align-center-vertical}
 * @preview ![objects-align-center-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/objects-align-center-vertical.svg)
 */
const ObjectsAlignCenterVertical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 32l160 0 0 200 0 48 0 200L64 480l0-200 0-48L64 32zM288 96l160 0 0 136 0 48 0 136-160 0 0-136 0-48 0-136z" />
        <path d="M0 280l0-48 64 0 0 48L0 280zm224 0l0-48 64 0 0 48-64 0zm224 0l0-48 64 0 0 48-64 0z" />
    </Icon>
);

export default ObjectsAlignCenterVertical;