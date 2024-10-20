
import { Icon } from "../../index";

/**
 * A component that renders the `person` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person?s=sharp-solid person}
 * @preview ![person](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person.svg)
 */
const Person: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM91.4 128l17.5 0 102.2 0 17.5 0 9.4 14.8 81.7 128-53.9 34.4-33.8-53L232 480l0 32-64 0 0-32 0-128-16 0 0 128 0 32-64 0 0-32 0-227.8-33.8 53L.2 270.8 82 142.8 91.4 128z" />
    </Icon>
);

export default Person;