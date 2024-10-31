
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thermometer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thermometer?s=duotone thermometer}
 * @preview ![thermometer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/thermometer.svg)
 */
const Thermometer: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 488c0 6.1 2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l89-89 88.8 0c14.9 0 29.1-5.9 39.6-16.4L481.8 176.2c19.4-19.4 30.2-45.6 30.2-73C512 46.2 465.8 0 408.8 0c-27.4 0-53.6 10.9-73 30.2c-15.2 15.2-30.3 30.3-45.5 45.5c19 19 38 38 57 57c1.6 1.6 2.7 3.4 3.5 5.3c.4 1 .7 2 .9 3c.1 .5 .2 1 .2 1.5c0 .3 0 .5 .1 1.5c0 1-.1 1.3-.1 1.6c0 .5-.1 1-.2 1.5c-.2 1-.5 2-.9 3c-.8 1.9-1.9 3.7-3.5 5.3c-6.3 6.2-16.4 6.2-22.6 0c-19-19-38-38-57-57c-13.8 13.8-27.6 27.6-41.4 41.4c19 19 38 38 57 57c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0c-19-19-38-38-57-57c-13.8 13.8-27.6 27.6-41.4 41.4c19 19 38 38 57 57c6.2 6.2 6.2 16.4 0 22.6c-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7c-19-19-38-38-57-57l-27.3 27.3C101.9 264.2 96 278.4 96 293.3l0 88.8L7 471c-4.7 4.7-7 10.8-7 17z" />
        <path d="M139.7 226.3l57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57-22.6 22.6zm64-64l57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57-22.6 22.6zm64-64l57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57L267.7 98.3z" />
    </Icon>
);

export default Thermometer;