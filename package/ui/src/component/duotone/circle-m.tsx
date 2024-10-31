
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-m` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-m?s=duotone circle-m}
 * @preview ![circle-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-m.svg)
 */
const CircleM: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 152c0-10.4 6.7-19.6 16.6-22.8c2.4-.8 4.9-1.2 7.4-1.2c7.6 0 14.9 3.6 19.5 9.9c28.2 39 56.4 78 84.5 117.1c28.2-39 56.4-78 84.5-117.1c4.6-6.4 11.9-10 19.5-9.9c2.5 0 4.9 .4 7.4 1.2c9.9 3.2 16.6 12.4 16.6 22.8l0 208c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-133.8c-20.2 27.9-40.4 55.9-60.5 83.8c-4.5 6.2-11.7 10-19.5 9.9s-14.9-3.7-19.5-9.9c-20.2-27.9-40.4-55.9-60.5-83.8L176 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208z" />
        <path d="M144.6 129.2c9.9-3.2 20.7 .3 26.8 8.8L256 255l84.5-117.1c6.1-8.4 16.9-12 26.8-8.8s16.6 12.4 16.6 22.8l0 208c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-133.8-60.5 83.8c-4.5 6.2-11.7 9.9-19.5 9.9s-14.9-3.7-19.5-9.9L176 226.2 176 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208c0-10.4 6.7-19.6 16.6-22.8z" />
    </Icon>
);

export default CircleM;