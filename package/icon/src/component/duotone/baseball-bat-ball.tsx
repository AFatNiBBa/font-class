
import { Icon, generic } from "../../index";

/**
 * A component that renders the `baseball-bat-ball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baseball-bat-ball?s=duotone baseball-bat-ball}
 * @preview ![baseball-bat-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/baseball-bat-ball.svg)
 */
const BaseballBatBall: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M55.3 405.4c17.1 17.1 34.2 34.2 51.3 51.3l51.9-51.9c9.6-9.6 20.3-18.2 31.9-25.5l27.6-17.4c-22.6-22.6-45.2-45.2-67.9-67.9l-17.4 27.6c-7.3 11.5-15.8 22.2-25.5 31.9L55.3 405.4zM352 432a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M424 0c-12.4 0-24.2 4.9-33 13.7L233.5 171.2c-10.5 10.5-19.8 22.1-27.7 34.6l-55.7 88.2 67.9 67.9 88.2-55.7c12.5-7.9 24.1-17.2 34.6-27.7L498.3 121c8.7-8.7 13.7-20.6 13.7-33s-4.9-24.2-13.7-33L457 13.7C448.2 4.9 436.4 0 424 0zM49 399c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L49 399z" />
    </Icon>
);

export default BaseballBatBall;