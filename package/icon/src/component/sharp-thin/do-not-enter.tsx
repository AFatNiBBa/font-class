
import { Icon } from "../../index";

/**
 * A component that renders the `do-not-enter` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/do-not-enter?s=sharp-thin do-not-enter}
 * @preview ![do-not-enter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/do-not-enter.svg)
 */
const DoNotEnter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm80-48l16 0 320 0 16 0 0 16 0 64 0 16-16 0L96 304l-16 0 0-16 0-64 0-16zm16 16l0 64 320 0 0-64L96 224z" />
    </Icon>
);

export default DoNotEnter;