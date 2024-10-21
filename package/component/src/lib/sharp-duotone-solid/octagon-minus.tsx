
import { Icon, generic } from "../../index";

/**
 * A component that renders the `octagon-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-minus?s=sharp-duotone-solid octagon-minus}
 * @preview ![octagon-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/octagon-minus.svg)
 */
const OctagonMinus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160L160 0 352 0 512 160l0 192L352 512l-192 0L0 352 0 160zm160 72l0 48 24 0 144 0 24 0 0-48-24 0-144 0-24 0z" />
        <path d="M160 232l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
    </Icon>
);

export default OctagonMinus;