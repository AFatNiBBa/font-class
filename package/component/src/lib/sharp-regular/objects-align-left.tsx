
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-left?s=sharp-regular objects-align-left}
 * @preview ![objects-align-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/objects-align-left.svg)
 */
const ObjectsAlignLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 512L0 0 48 0l0 512L0 512zM176 176l288 0 0-64-288 0 0 64zm-48-64l0-48 48 0 288 0 48 0 0 48 0 64 0 48-48 0-288 0-48 0 0-48 0-64zm48 288l160 0 0-64-160 0 0 64zm-48-64l0-48 48 0 160 0 48 0 0 48 0 64 0 48-48 0-160 0-48 0 0-48 0-64z" />
    </Icon>
);

export default ObjectsAlignLeft;