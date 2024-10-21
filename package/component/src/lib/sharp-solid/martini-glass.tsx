
import { Icon } from "../../index";

/**
 * A component that renders the `martini-glass` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass?s=sharp-solid martini-glass}
 * @preview ![martini-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/martini-glass.svg)
 */
const MartiniGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 48L16 64 210.7 258.7 224 272l0 176-64 0-32 0 0 64 32 0 96 0 96 0 32 0 0-64-32 0-64 0 0-176 13.3-13.3L496 64l16-16 0-48L448 0 64 0 0 0 0 48zm341.5 80l-171 0-64-64 299 0-64 64z" />
    </Icon>
);

export default MartiniGlass;