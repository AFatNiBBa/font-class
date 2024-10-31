
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-divide` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-divide?s=sharp-solid octagon-divide}
 * @preview ![octagon-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/octagon-divide.svg)
 */
const OctagonDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 160L0 352 160 512l192 0L512 352l0-192L352 0 160 0 0 160zm288-32l0 64-64 0 0-64 64 0zM168 232l176 0 24 0 0 48-24 0-176 0-24 0 0-48 24 0zm56 88l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default OctagonDivide;