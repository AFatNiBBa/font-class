
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-center-horizontal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-center-horizontal?s=sharp-solid objects-align-center-horizontal}
 * @preview ![objects-align-center-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/objects-align-center-horizontal.svg)
 */
const ObjectsAlignCenterHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 0L232 0l0 64L32 64l0 160 200 0 0 64L96 288l0 160 136 0 0 64 48 0 0-64 136 0 0-160-136 0 0-64 200 0 0-160L280 64l0-64z" />
    </Icon>
);

export default ObjectsAlignCenterHorizontal;