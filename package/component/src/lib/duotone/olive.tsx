
import { Icon, generic } from "../../index";

/**
 * A component that renders the `olive` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/olive?s=duotone olive}
 * @preview ![olive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/olive.svg)
 */
const Olive: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M256 129.8c0 19.2 11.1 43.1 31.1 63.1c30.3 30.3 69.6 40.1 87.8 21.9s8.4-57.5-21.9-87.8c-20-20-43.9-31.1-63.1-31.1c-9.9 0-18.5 2.9-24.7 9.1s-9.1 14.8-9.1 24.7z" />
        <path d="M160 480C71.6 480 0 408.4 0 320C0 128 181.9 32 280 32c56 0 112 56 112 56s56 56 56 112c0 98.1-96 280-288 280zM287.1 192.9c30.3 30.3 69.6 40.1 87.8 21.9s8.4-57.5-21.9-87.8s-69.6-40.1-87.8-21.9s-8.4 57.5 21.9 87.8z" />
    </Icon>
);

export default Olive;