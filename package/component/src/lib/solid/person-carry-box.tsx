
import { Icon } from "../../index";

/**
 * A component that renders the `person-carry-box` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-carry-box?s=solid person-carry-box}
 * @preview ![person-carry-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/person-carry-box.svg)
 */
const PersonCarryBox: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M80 96A48 48 0 1 0 80 0a48 48 0 1 0 0 96zM96 306.7l0-65.1 16.6 24.9c8.9 13.4 23.9 21.4 39.9 21.4l71.4 0 128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L224 96c-17.7 0-32 14.3-32 32l0 96-30.9 0-42.6-64c-13.3-20-35.8-32-59.9-32C26.2 128 0 154.2 0 186.6l0 88.1c0 17 6.7 33.3 18.7 45.3l79.4 79.4 14.3 85.9c2.9 17.4 19.4 29.2 36.8 26.3s29.2-19.4 26.3-36.8l-15.2-90.9c-1.6-9.9-6.3-19-13.4-26.1l-51-51zM0 346.5L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32c0 0 0 0 0 0l0-69.5-64-64z" />
    </Icon>
);

export default PersonCarryBox;