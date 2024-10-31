
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-swirl` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-swirl?s=duotone pen-swirl}
 * @preview ![pen-swirl](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pen-swirl.svg)
 */
const PenSwirl: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M8 256C8 393 119 504 256 504c13.3 0 24-10.7 24-24s-10.7-24-24-24C145.5 456 56 366.5 56 256S145.5 56 256 56c16.4 0 32.3 2 47.6 5.7l38.1-38.5C315 13.4 286.1 8 256 8C119 8 8 119 8 256zM296.8 374c-3.3 12.8 4.4 25.9 17.3 29.2c12.2 3.1 24.9 4.8 38 4.8c83.9 0 152-68.1 152-152c0-29.9-5.3-58.6-15-85.1l-38.5 38.5c3.6 15 5.5 30.6 5.5 46.6c0 57.4-46.6 104-104 104c-9 0-17.7-1.1-26-3.3c-12.8-3.3-25.9 4.4-29.2 17.3z" />
        <path d="M406.1 16L366.4 55.7l89.3 89.3 39.8-38.9c19.1-18.7 19.2-49.4 .4-68.2L473.9 16c-18.8-18.8-49.2-18.7-67.9 0zM343.7 78.4L200.5 221.8c-7 7-12.3 15.6-15.4 25l-23.8 71.3c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l71.5-23.9c9.2-3.1 17.6-8.2 24.5-15L432.8 167.5 343.7 78.4z" />
    </Icon>
);

export default PenSwirl;