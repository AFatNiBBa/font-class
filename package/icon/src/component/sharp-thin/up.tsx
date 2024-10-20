
import { Icon } from "../../index";

/**
 * A component that renders the `up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up?s=sharp-thin up}
 * @preview ![up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/up.svg)
 */
const Up: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M144 240l0 16 0 208 96 0 0-208 0-16 16 0 112 0 0-9.4L192 54.6 16 230.6l0 9.4 112 0 16 0zM0 224L180.7 43.3 192 32l11.3 11.3L384 224l0 16 0 16-16 0-96 0-16 0 0 16 0 192 0 16-16 0-96 0-16 0 0-16 0-192 0-16-16 0-96 0L0 256l0-16 0-16z" />
    </Icon>
);

export default Up;