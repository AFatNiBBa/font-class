
import { Icon } from "../../index";

/**
 * A component that renders the `copy` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/copy?s=sharp-thin copy}
 * @preview ![copy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/copy.svg)
 */
const Copy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 368l-256 0 0-352 169.4 0L432 102.6 432 368zM448 96L352 0 176 0 160 0l0 16 0 352 0 16 16 0 256 0 16 0 0-16 0-272zM16 128L0 128l0 16L0 496l0 16 16 0 256 0 16 0 0-16 0-80-16 0 0 80L16 496l0-352 112 0 0-16L16 128z" />
    </Icon>
);

export default Copy;