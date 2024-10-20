
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-left` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-left?s=solid circle-caret-left}
 * @preview ![circle-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-caret-left.svg)
 */
const CircleCaretLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zm-368 0c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z" />
    </Icon>
);

export default CircleCaretLeft;