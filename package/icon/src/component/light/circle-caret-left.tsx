
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-left?s=light circle-caret-left}
 * @preview ![circle-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-caret-left.svg)
 */
const CircleCaretLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 1 448 0A224 224 0 1 1 32 256zm480 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zm-352 0c0 9.6 4 18.7 11 25.2l102.8 95.5c5.1 4.7 11.8 7.3 18.7 7.3c15.2 0 27.5-12.3 27.5-27.5l0-201c0-15.2-12.3-27.5-27.5-27.5c-6.9 0-13.6 2.6-18.7 7.3L171 230.8c-7 6.5-11 15.6-11 25.2zm32.7 1.7c-.5-.4-.7-1.1-.7-1.7s.3-1.3 .7-1.7L288 165.8l0 180.3-95.3-88.4z" />
    </Icon>
);

export default CircleCaretLeft;