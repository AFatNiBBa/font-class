
import { Icon } from "../../index";

/**
 * A component that renders the `circle-book-open` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-book-open?s=sharp-solid circle-book-open}
 * @preview ![circle-book-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-book-open.svg)
 */
const CircleBookOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 336c-27.8 0-56 16-56 16l0-176s28.2-16 56-16s56 16 56 16l0 176s-28.2-16-56-16zm144 0c-27.8 0-56 16-56 16l0-176s28.2-16 56-16s56 16 56 16l0 176s-28.2-16-56-16z" />
    </Icon>
);

export default CircleBookOpen;