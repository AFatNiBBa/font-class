
import { Icon } from "../../index";

/**
 * A component that renders the `clock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock?s=thin clock}
 * @preview ![clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clock.svg)
 */
const Clock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 1 16 256a240 240 0 1 1 480 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM248 104l0 152c0 2.7 1.3 5.2 3.6 6.7l96 64c3.7 2.5 8.6 1.5 11.1-2.2s1.5-8.6-2.2-11.1L264 251.7 264 104c0-4.4-3.6-8-8-8s-8 3.6-8 8z" />
    </Icon>
);

export default Clock;