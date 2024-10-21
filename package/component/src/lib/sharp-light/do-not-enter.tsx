
import { Icon } from "../../index";

/**
 * A component that renders the `do-not-enter` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/do-not-enter?s=sharp-light do-not-enter}
 * @preview ![do-not-enter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/do-not-enter.svg)
 */
const DoNotEnter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm80-56l32 0 288 0 32 0 0 32 0 48 0 32-32 0-288 0-32 0 0-32 0-48 0-32zm32 32l0 48 288 0 0-48-288 0z" />
    </Icon>
);

export default DoNotEnter;