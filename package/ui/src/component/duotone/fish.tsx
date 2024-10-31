
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fish` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish?s=duotone fish}
 * @preview ![fish](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fish.svg)
 */
const Fish: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160c0 5.4 1.4 10.9 4.2 15.9L50 256 4.2 336.1c-7.2 12.6-5 28.4 5.3 38.6s26.1 12.2 38.7 4.9l89.7-52.3c12.2 14.6 26.5 29.4 42.7 43.1c39.2 33.1 92 61.5 155.5 61.5s116.3-28.5 155.5-61.5c39.1-33 66.9-72.4 81-99.8c2.4-4.6 3.6-9.6 3.6-14.7s-1.2-10.1-3.6-14.7c-14.1-27.4-41.9-66.8-81-99.8C452.3 108.5 399.4 80 336 80s-116.3 28.5-155.5 61.5c-16.2 13.7-30.5 28.5-42.7 43.1L48.1 132.4c-12.5-7.3-28.4-5.3-38.7 4.9C3.2 143.4 0 151.7 0 160zm448 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M416 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default Fish;