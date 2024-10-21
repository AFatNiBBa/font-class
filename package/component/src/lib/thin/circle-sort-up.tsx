
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort-up?s=thin circle-sort-up}
 * @preview ![circle-sort-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-sort-up.svg)
 */
const CircleSortUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM267.3 411.3c-6.2 6.2-16.4 6.2-22.6 0l-96-96c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l96 96 96-96c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-96 96zm0-310.6l96 96c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9l-192 0c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l96-96c6.2-6.2 16.4-6.2 22.6 0zM256 112l-96 96 192 0-96-96z" />
    </Icon>
);

export default CircleSortUp;