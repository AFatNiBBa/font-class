
import { Icon } from "../../index";

/**
 * A component that renders the `caret-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-up?s=sharp-thin caret-up}
 * @preview ![caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/caret-up.svg)
 */
const CaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 279.1L160 149.5 304 279.1l0 24.9L16 304l0-24.9zM160 128L0 272l0 32 0 16 16 0 288 0 16 0 0-16 0-32L160 128z" />
    </Icon>
);

export default CaretUp;