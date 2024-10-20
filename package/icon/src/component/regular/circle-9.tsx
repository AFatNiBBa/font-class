
import { Icon } from "../../index";

/**
 * A component that renders the `circle-9` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-9?s=regular circle-9}
 * @preview ![circle-9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-9.svg)
 */
const Circle_9: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-80a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM230 316.4c-40.4-11.4-70-48.4-70-92.4c0-53 43-96 96-96s96 43 96 96c0 32.4-14.2 63.2-38.8 84.3l-81.6 70c-10.1 8.6-25.2 7.5-33.8-2.6s-7.5-25.2 2.6-33.8L230 316.4z" />
    </Icon>
);

export default Circle_9;