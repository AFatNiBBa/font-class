
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-slash?s=duotone trash-slash}
 * @preview ![trash-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/trash-slash.svg)
 */
const TrashSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M98.4 51.8C103.2 40.2 114.6 32 128 32l96 0 7.2-14.3C236.6 6.8 247.7 0 259.8 0L380.2 0c12.1 0 23.2 6.8 28.6 17.7L416 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L154.8 96C136 81.3 117.2 66.5 98.4 51.8zm34.1 148.6L488 480.5C481.2 499 463.5 512 442.9 512l-245.8 0c-25.3 0-46.3-19.7-47.9-45L132.5 200.4zM195.6 128L512 128 497.2 364.4C396.7 285.6 296.1 206.8 195.6 128z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default TrashSlash;