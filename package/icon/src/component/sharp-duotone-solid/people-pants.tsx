
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-pants` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-pants?s=sharp-duotone-solid people-pants}
 * @preview ![people-pants](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/people-pants.svg)
 */
const PeoplePants: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M112 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm320 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M91.4 128l17.5 0 102.2 0 17.5 0 9.4 14.8 81.7 128-53.9 34.4-33.8-53L232 480l0 32-64 0 0-32 0-128-16 0 0 128 0 32-64 0 0-32 0-227.8-33.8 53L.2 270.8 82 142.8 91.4 128zm320 0l17.5 0 102.2 0 17.5 0 9.4 14.8 81.7 128-53.9 34.4-33.8-53L552 480l0 32-64 0 0-32 0-128-16 0 0 128 0 32-64 0 0-32 0-227.8-33.8 53-53.9-34.4 81.7-128 9.4-14.8z" />
    </Icon>
);

export default PeoplePants;