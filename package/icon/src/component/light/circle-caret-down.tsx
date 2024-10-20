
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-down?s=light circle-caret-down}
 * @preview ![circle-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-caret-down.svg)
 */
const CircleCaretDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zm0 352c9.6 0 18.7-4 25.2-11l95.5-102.8c4.7-5.1 7.3-11.8 7.3-18.7c0-15.2-12.3-27.5-27.5-27.5l-201 0c-15.2 0-27.5 12.3-27.5 27.5c0 6.9 2.6 13.6 7.3 18.7L230.8 341c6.5 7 15.6 11 25.2 11zm1.7-32.7c-.4 .5-1.1 .7-1.7 .7s-1.3-.3-1.7-.7L165.8 224l180.3 0-88.4 95.3z" />
    </Icon>
);

export default CircleCaretDown;