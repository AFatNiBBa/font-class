
import { Icon, generic } from "../../index";

/**
 * A component that renders the `martini-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass?s=sharp-duotone-solid martini-glass}
 * @preview ![martini-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/martini-glass.svg)
 */
const MartiniGlass: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 48 16 64 210.7 258.7 224 272l0 176-64 0-32 0 0 64 32 0 96 0 96 0 32 0 0-64-32 0-64 0 0-176 13.3-13.3L496 64l16-16 0-48L448 0 64 0 0 0zM106.5 64l299 0c-21.3 21.3-42.7 42.7-64 64L256 213.5c-28.5-28.5-57-57-85.5-85.5l-64-64z" />
        <path d="M341.5 128l-171 0L256 213.5 341.5 128z" />
    </Icon>
);

export default MartiniGlass;