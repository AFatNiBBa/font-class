
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort-up` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort-up?s=solid circle-sort-up}
 * @preview ![circle-sort-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-sort-up.svg)
 */
const CircleSortUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM267.3 100.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9l192 0c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-96-96zm0 310.6l96-96c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9l-192 0c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l96 96c6.2 6.2 16.4 6.2 22.6 0zM313.4 320L256 377.4 198.6 320l114.7 0z" />
    </Icon>
);

export default CircleSortUp;