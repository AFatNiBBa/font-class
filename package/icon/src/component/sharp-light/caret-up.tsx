
import { Icon } from "../../index";

/**
 * A component that renders the `caret-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-up?s=sharp-light caret-up}
 * @preview ![caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/caret-up.svg)
 */
const CaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 288l256 0 0-1.7L160 171 32 286.2l0 1.7zm0 32L0 320l0-32 0-16L160 128 320 272l0 16 0 32-32 0L32 320z" />
    </Icon>
);

export default CaretUp;