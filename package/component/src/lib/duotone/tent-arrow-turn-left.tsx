
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tent-arrow-turn-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tent-arrow-turn-left?s=duotone tent-arrow-turn-left}
 * @preview ![tent-arrow-turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tent-arrow-turn-left.svg)
 */
const TentArrowTurnLeft: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64.4 475.3c-1.4 9.2 1.3 18.6 7.4 25.6S86.7 512 96 512l144 0 16 0c17.7 0 32-14.3 32-32l0-118.1c0-5.5 4.4-9.9 9.9-9.9c3.7 0 7.2 2.1 8.8 5.5l68.4 136.8c5.4 10.8 16.5 17.7 28.6 17.7l60.2 0 16 0c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128c-5.7-4.4-12.6-6.5-19.4-6.5s-13.7 2.2-19.4 6.5l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160z" />
        <path d="M121.8 7.9c8.9 9.9 8.1 25-1.8 33.9L86.5 72 456 72c66.3 0 120 53.7 120 120l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40c0-39.8-32.2-72-72-72L86.5 120l33.5 30.2c9.9 8.9 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-80-72C2.9 109.3 0 102.8 0 96s2.9-13.3 7.9-17.8l80-72c9.9-8.9 25-8.1 33.9 1.8z" />
    </Icon>
);

export default TentArrowTurnLeft;