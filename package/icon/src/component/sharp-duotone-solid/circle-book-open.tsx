
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-book-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-book-open?s=sharp-duotone-solid circle-book-open}
 * @preview ![circle-book-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-book-open.svg)
 */
const CircleBookOpen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-80s28.2-16 56-16s56 16 56 16l0 176s-28.2-16-56-16s-56 16-56 16l0-176zm144 0s28.2-16 56-16s56 16 56 16l0 176s-28.2-16-56-16s-56 16-56 16l0-176z" />
        <path d="M240 352s-28.2-16-56-16s-56 16-56 16l0-176s28.2-16 56-16s56 16 56 16l0 176zm144 0s-28.2-16-56-16s-56 16-56 16l0-176s28.2-16 56-16s56 16 56 16l0 176z" />
    </Icon>
);

export default CircleBookOpen;