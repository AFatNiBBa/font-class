
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-center-vertical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-center-vertical?s=sharp-solid objects-align-center-vertical}
 * @preview ![objects-align-center-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/objects-align-center-vertical.svg)
 */
const ObjectsAlignCenterVertical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32l160 0 0 200 64 0 0-136 160 0 0 136 64 0 0 48-64 0 0 136-160 0 0-136-64 0 0 200L64 480l0-200L0 280l0-48 64 0L64 32z" />
    </Icon>
);

export default ObjectsAlignCenterVertical;