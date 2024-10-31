
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-dress` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-dress?s=sharp-duotone-solid people-dress}
 * @preview ![people-dress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/people-dress.svg)
 */
const PeopleDress: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M112 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm320 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M91.4 128l17.5 0 102.2 0 17.5 0 9.4 14.8 81.7 128-53.9 34.4-42-65.8L272 384l-40 0 0 96 0 32-64 0 0-32 0-96-16 0 0 96 0 32-64 0 0-32 0-96-40 0L96.2 239.4l-42 65.8L.2 270.8 82 142.8 91.4 128zm320 0l17.5 0 102.2 0 17.5 0 9.4 14.8 81.7 128-53.9 34.4-42-65.8L592 384l-40 0 0 96 0 32-64 0 0-32 0-96-16 0 0 96 0 32-64 0 0-32 0-96-40 0 48.2-144.6-42 65.8-53.9-34.4 81.7-128 9.4-14.8z" />
    </Icon>
);

export default PeopleDress;