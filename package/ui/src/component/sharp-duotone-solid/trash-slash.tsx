
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-slash?s=sharp-duotone-solid trash-slash}
 * @preview ![trash-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trash-slash.svg)
 */
const TrashSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l128 0L240 0 400 0l16 32 128 0 0 64L153 96 96 51.8 96 32zm36.5 168.4L489.9 482 488 512l-336 0L132.5 200.4zM194.2 128L512 128 497.3 363.3C396.2 284.9 295.2 206.4 194.2 128z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default TrashSlash;