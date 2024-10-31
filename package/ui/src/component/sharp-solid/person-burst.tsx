
import { Icon } from "../../index";

/**
 * A component that renders the `person-burst` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-burst?s=sharp-solid person-burst}
 * @preview ![person-burst](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-burst.svg)
 */
const PersonBurst: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 0L133.8 88.5 38.4 66.3l42.9 88.1L4.4 215.2 100 236.6l-.4 98L176 273.2l76.4 61.4-.4-98L312.8 223l15-23.5-57.1-45.1 42.9-88.1L218.2 88.5 176 0zM480 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-51.1 32l-17.5 0L402 142.8l-81.7 128 53.9 34.4 33.8-53L408 480l0 32 64 0 0-32 0-128 16 0 0 128 0 32 64 0 0-32 0-227.8 33.8 53 53.9-34.4L558 142.8 548.6 128l-17.5 0-102.2 0z" />
    </Icon>
);

export default PersonBurst;