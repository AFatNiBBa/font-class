
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stethoscope` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stethoscope?s=duotone stethoscope}
 * @preview ![stethoscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/stethoscope.svg)
 */
const Stethoscope: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M160.5 348.9c5.1 1 10.3 1.8 15.5 2.3c2.6 .3 5.3 .5 7.9 .6c1.3 .1 2.7 .1 4 .1s2.7 0 4 0c11.2 0 22.1-1.2 32.8-2.8C231.3 404.8 278.6 448 336 448c61.9 0 112-50.1 112-112l0-70.7c4.9 2.1 10.1 3.8 15.4 4.9c2.7 .6 5.4 1 8.2 1.3c1.4 .1 2.8 .3 4.2 .3s2.8 .1 4.3 .1c11.4 0 22.2-2.4 32-6.7l0 70.7c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1z" />
        <path d="M122.1 62.4c16.8-5.6 25.8-23.7 20.2-40.5S118.6-3.9 101.9 1.6L75.8 10.3C49.6 19.1 32 43.5 32 71.1L32 192c0 88.4 71.6 160 160 160s160-71.6 160-160l0-120.9c0-27.5-17.6-52-43.8-60.7L282.1 1.6c-16.8-5.6-34.9 3.5-40.5 20.2s3.5 34.9 20.2 40.5L288 71.1 288 192c0 53-43 96-96 96s-96-43-96-96L96 71.1l26.1-8.7zM512 192a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160z" />
    </Icon>
);

export default Stethoscope;