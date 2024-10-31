
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hammer-crash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-crash?s=duotone hammer-crash}
 * @preview ![hammer-crash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hammer-crash.svg)
 */
const HammerCrash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M283.2 383.2c0 4.8 2.2 9.4 6 12.5c5.1 4.1 12.2 4.6 17.9 1.4l91.4-52.2 59.7 86.8c3 4.4 8 6.9 13.2 6.9c1.2 0 2.4-.1 3.6-.4c6.4-1.5 11.2-6.7 12.2-13.1l16.2-104.1 105.1 7.4c6.5 .5 12.7-3.1 15.5-9s1.8-12.9-2.6-17.8L550.1 224l71.3-77.5c4.4-4.8 5.5-11.9 2.6-17.8s-9-9.5-15.5-9l-105.1 7.4L487.3 23c-1-6.5-5.9-11.7-12.2-13.1c-1.2-.3-2.4-.4-3.6-.4c-5.2 0-10.2 2.5-13.2 6.9L405.6 93c12 18.4 14.2 42.5 3.7 63.6l-64 128c-8.9 17.8-25 29.7-43.1 33.8l-18.3 60.1c-.5 1.5-.7 3.1-.7 4.6z" />
        <path d="M43.4 33.7C48.8 22.8 59.9 16 72 16l120 0c5 0 9.9 1.2 14.3 3.4l160 80c15.8 7.9 22.2 27.1 14.3 42.9l-64 128c-7.9 15.8-27.1 22.2-42.9 14.3l-65.9-32.9s0 0 0 0L122 208.8s0 0 0 0L17.7 156.6C1.9 148.7-4.5 129.5 3.4 113.7l40-80zM5.1 442.5L107.6 237.4l85.9 42.9L90.9 485.5c-11.9 23.7-40.7 33.3-64.4 21.5S-6.8 466.2 5.1 442.5z" />
    </Icon>
);

export default HammerCrash;