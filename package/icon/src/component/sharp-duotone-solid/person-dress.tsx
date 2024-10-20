
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-dress` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress?s=sharp-duotone-solid person-dress}
 * @preview ![person-dress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-dress.svg)
 */
const PersonDress: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M112 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M108.9 128l-17.5 0L82 142.8 .2 270.8l53.9 34.4 42-65.8L48 384l40 0 0 96 0 32 64 0 0-32 0-96 16 0 0 96 0 32 64 0 0-32 0-96 40 0L223.8 239.4l42 65.8 53.9-34.4L238 142.8 228.6 128l-17.5 0-102.2 0z" />
    </Icon>
);

export default PersonDress;