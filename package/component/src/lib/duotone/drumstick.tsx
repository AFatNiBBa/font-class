
import { Icon, generic } from "../../index";

/**
 * A component that renders the `drumstick` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drumstick?s=duotone drumstick}
 * @preview ![drumstick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/drumstick.svg)
 */
const Drumstick: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 380c0 33.1 26.9 60 60 60c6.3 0 12 5.7 12 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-5-.6-9.8-1.8-14.5c-4.2-16.9-5.2-37.1 7.2-49.4l36.4-36.4c-39.2-3-70.5-34.3-73.5-73.5l-36.4 36.4c-12.3 12.3-32.5 11.4-49.4 7.2C69.8 320.6 65 320 60 320c-33.1 0-60 26.9-60 60z" />
        <path d="M160 176v96c0 44.2 35.8 80 80 80h96c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176z" />
    </Icon>
);

export default Drumstick;