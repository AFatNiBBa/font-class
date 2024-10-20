
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-bookmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bookmark?s=sharp-duotone-solid circle-bookmark}
 * @preview ![circle-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-bookmark.svg)
 */
const CircleBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l192 0 0 256-96-64-96 64 0-256z" />
        <path d="M256 320l-96 64V128H352V384l-96-64z" />
    </Icon>
);

export default CircleBookmark;