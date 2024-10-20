
import { Icon } from "../../index";

/**
 * A component that renders the `person` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person?s=sharp-regular person}
 * @preview ![person](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person.svg)
 */
const Person: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM94.8 128l14.1 0 102.2 0 14.1 0 6.9 12.4 75.3 136 11.6 21-42 23.3-11.6-21L224 224.9 224 488l0 24-48 0 0-24 0-136-32 0 0 136 0 24-48 0 0-24 0-263.1L54.6 299.6 43 320.6 1 297.4l11.6-21 75.3-136L94.8 128zM144 304l32 0 0-128-32 0 0 128z" />
    </Icon>
);

export default Person;