
import { Icon } from "../../index";

/**
 * A component that renders the `person-chalkboard` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-chalkboard?s=sharp-regular person-chalkboard}
 * @preview ![person-chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-chalkboard.svg)
 */
const PersonChalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-51.1 32l-14 0L120 140.2l-76.9 136 41.8 23.6L128 223.6 128 488l0 24 48 0 0-24 0-136 32 0 0 136 0 24 48 0 0-24 0-312 136 0 24 0 0-48-24 0-24 0 0-80 224 0 0 224-224 0 0-48-48 0 0 48 0 48 48 0 224 0 48 0 0-48 0-224 0-48L592 0 368 0 320 0l0 48 0 80-76.9 0-102.2 0zM208 304l-32 0 0-128 32 0 0 128z" />
    </Icon>
);

export default PersonChalkboard;