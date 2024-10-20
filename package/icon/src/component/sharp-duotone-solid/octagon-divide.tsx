
import { Icon, generic } from "../../index";

/**
 * A component that renders the `octagon-divide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-divide?s=sharp-duotone-solid octagon-divide}
 * @preview ![octagon-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/octagon-divide.svg)
 */
const OctagonDivide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160L160 0 352 0 512 160l0 192L352 512l-192 0L0 352 0 160zm144 72l0 48 24 0 176 0 24 0 0-48-24 0-176 0-24 0zm80-104l0 64 64 0 0-64-64 0zm0 192l0 64 64 0 0-64-64 0z" />
        <path d="M224 128l64 0 0 64-64 0 0-64zM144 232l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48zm144 88l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default OctagonDivide;