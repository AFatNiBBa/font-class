
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort-down?s=regular circle-sort-down}
 * @preview ![circle-sort-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-sort-down.svg)
 */
const CircleSortDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM267.3 411.3l96-96c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9l-192 0c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l96 96c6.2 6.2 16.4 6.2 22.6 0zm0-310.6c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9l192 0c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-96-96zM313.4 192l-114.7 0L256 134.6 313.4 192z" />
    </Icon>
);

export default CircleSortDown;