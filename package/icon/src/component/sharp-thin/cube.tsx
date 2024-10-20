
import { Icon } from "../../index";

/**
 * A component that renders the `cube` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cube?s=sharp-thin cube}
 * @preview ![cube](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cube.svg)
 */
const Cube: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 7.5l2.7 .9 248 88 5.3 1.9 0 5.6 0 288 0 5.3-4.9 2.1-248 104-3.1 1.3-3.1-1.3-248-104L0 397.3 0 392 0 104l0-5.6 5.3-1.9 248-88 2.7-.9zM16 386.7L248 484l0-270.7L16 116l0 270.7zM264 484l232-97.3L496 116 264 213.3 264 484zM256 24.5L30.2 104.6 256 199.3l225.8-94.7L256 24.5z" />
    </Icon>
);

export default Cube;