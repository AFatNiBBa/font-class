
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-minus?s=sharp-thin octagon-minus}
 * @preview ![octagon-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/octagon-minus.svg)
 */
const OctagonMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 345.4l0-178.7L166.6 16l178.7 0L496 166.6l0 178.7L345.4 496l-178.7 0L16 345.4zM160 0L0 160 0 352 160 512l192 0L512 352l0-192L352 0 160 0zm-8 264l208 0 0-16-208 0 0 16z" />
    </Icon>
);

export default OctagonMinus;