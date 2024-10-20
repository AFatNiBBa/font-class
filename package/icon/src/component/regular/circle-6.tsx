
import { Icon } from "../../index";

/**
 * A component that renders the `circle-6` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-6?s=regular circle-6}
 * @preview ![circle-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-6.svg)
 */
const Circle_6: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-96-48c0-32.4 14.2-63.2 38.8-84.3l81.6-70c10.1-8.6 25.2-7.5 33.8 2.6s7.5 25.2-2.6 33.8L282 195.6c40.4 11.4 70 48.4 70 92.4c0 53-43 96-96 96s-96-43-96-96z" />
    </Icon>
);

export default Circle_6;