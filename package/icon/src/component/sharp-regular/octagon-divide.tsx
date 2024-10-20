
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-divide` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-divide?s=sharp-regular octagon-divide}
 * @preview ![octagon-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/octagon-divide.svg)
 */
const OctagonDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 332.1l0-152.2L179.9 48l152.2 0L464 179.9l0 152.2L332.1 464l-152.2 0L48 332.1zM160 0L0 160 0 352 160 512l192 0L512 352l0-192L352 0 160 0zM288 128l-64 0 0 64 64 0 0-64zM168 232l-24 0 0 48 24 0 176 0 24 0 0-48-24 0-176 0zm56 88l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default OctagonDivide;