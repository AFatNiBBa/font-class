
import { Icon } from "../../index";

/**
 * A component that renders the `dice` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice?s=light dice}
 * @preview ![dice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/dice.svg)
 */
const Dice: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M252.3 57c-15.6-15.6-40.9-15.6-56.6 0L57 195.7c-15.6 15.6-15.6 40.9 0 56.6L195.7 391c15.6 15.6 40.9 15.6 56.6 0L391 252.3c15.6-15.6 15.6-40.9 0-56.6L252.3 57zM173.1 34.3c28.1-28.1 73.7-28.1 101.8 0L413.7 173.1c28.1 28.1 28.1 73.7 0 101.8L274.9 413.7c-28.1 28.1-73.7 28.1-101.8 0L34.3 274.9c-28.1-28.1-28.1-73.7 0-101.8L173.1 34.3zM320 448l0-34.2 32-32 0 66.2c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-109.3 0c0-10.8-1.7-21.6-5-32L576 192c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 144a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM120 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm104 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 152a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM328 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Dice;