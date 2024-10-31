
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bus-school` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bus-school?s=duotone bus-school}
 * @preview ![bus-school](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bus-school.svg)
 */
const BusSchool: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 448l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32-96 0zm48.2-291.3c-.1 .5-.1 1.1-.1 1.6s0 1.1 0 1.6c0 21.3 0 42.7 0 64c0 .6 0 1.1 0 1.7s.1 1.1 .1 1.6c.1 1.1 .3 2.1 .5 3.2c.4 2.1 1.1 4.1 1.9 6c1.6 3.8 4 7.3 6.9 10.2c5.8 5.8 13.8 9.4 22.6 9.4l96 0 0-128-96 0c-8.8 0-16.8 3.6-22.6 9.4c-2.9 2.9-5.2 6.3-6.9 10.2c-.8 1.9-1.4 3.9-1.9 6c-.2 1-.4 2.1-.5 3.2zM272 128l0 128 96 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-96 0zm80 320l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32-96 0z" />
        <path d="M256 0C380.8 0 464 35.2 464 80l0 16 0 16 16 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-16 0 0 20.3c9.6 5.5 16 15.9 16 27.7l0 128c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-128c0-11.8 6.4-22.2 16-27.7L48 240l-16 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l16 0 0-16 0-16C48 35.2 131.2 0 256 0zM112 160l0 64c0 17.7 14.3 32 32 32l96 0 0-128-96 0c-17.7 0-32 14.3-32 32zm160 96l96 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-96 0 0 128zM112 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM352 80c0-8.8-7.2-16-16-16L176 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z" />
    </Icon>
);

export default BusSchool;