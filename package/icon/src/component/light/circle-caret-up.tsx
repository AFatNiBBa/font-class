
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-up?s=light circle-caret-up}
 * @preview ![circle-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-caret-up.svg)
 */
const CircleCaretUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352c-9.6 0-18.7 4-25.2 11L135.3 273.8c-4.7 5.1-7.3 11.8-7.3 18.7c0 15.2 12.3 27.5 27.5 27.5l201 0c15.2 0 27.5-12.3 27.5-27.5c0-6.9-2.6-13.6-7.3-18.7L281.2 171c-6.5-7-15.6-11-25.2-11zm-1.7 32.7c.4-.5 1.1-.7 1.7-.7s1.3 .3 1.7 .7L346.2 288l-180.3 0 88.4-95.3z" />
    </Icon>
);

export default CircleCaretUp;