
import { Icon } from "../../index";

/**
 * A component that renders the `octagon` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon?s=sharp-light octagon}
 * @preview ![octagon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/octagon.svg)
 */
const Octagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M173.3 480l165.5 0L480 338.7l0-165.5L338.7 32 173.3 32 32 173.3l0 165.5L173.3 480zM0 160L160 0 352 0 512 160l0 192L352 512l-192 0L0 352 0 160z" />
    </Icon>
);

export default Octagon;