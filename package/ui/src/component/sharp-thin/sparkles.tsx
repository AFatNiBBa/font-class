
import { Icon } from "../../index";

/**
 * A component that renders the `sparkles` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkles?s=sharp-thin sparkles}
 * @preview ![sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sparkles.svg)
 */
const Sparkles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M440 40l0 8 0 56 56 0 8 0 0 16-8 0-56 0 0 56 0 8-16 0 0-8 0-56-56 0-8 0 0-16 8 0 56 0 0-56 0-8 16 0zm0 288l0 8 0 56 56 0 8 0 0 16-8 0-56 0 0 56 0 8-16 0 0-8 0-56-56 0-8 0 0-16 8 0 56 0 0-56 0-8 16 0zm-73.9-63.1L256 320 200.9 430.1 192 448l-8.9-17.9L128 320 17.9 264.9 0 256l17.9-8.9L128 192 183.1 81.9 192 64l8.9 17.9L256 192l110.1 55.1L384 256l-17.9 8.9zM241.7 312.8l2.4-4.8 4.8-2.4L348.2 256l-99.4-49.7-4.8-2.4-2.4-4.8L192 99.8l-49.7 99.4-2.4 4.8-4.8 2.4L35.8 256l99.4 49.7 4.8 2.4 2.4 4.8L192 412.2l49.7-99.4z" />
    </Icon>
);

export default Sparkles;