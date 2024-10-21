
import { Icon, generic } from "../../index";

/**
 * A component that renders the `campfire` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/campfire?s=duotone campfire}
 * @preview ![campfire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/campfire.svg)
 */
const Campfire: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 174.7C112 255.2 175.4 320 256 320c79.8 0 144-64.7 144-145.3c0-27.3-9.9-55.4-23.6-80.1C362.7 69.7 344.7 47 326.9 30.4c-5-4.7-11.5-7.1-17.9-7.1c-6.8 0-14 2.5-18.8 8.1l-11 12.5L262.1 25.8c-1.8-1.9-3.6-4-5.4-6.1C248.6 10.4 239.9 .3 227.2 0c-6.5-.2-13.1 2.1-18.3 6.8c-21.1 19.2-45 44.4-63.8 72.9c-18.7 28.3-33.1 61-33.1 95zm87.3 43.6c0-33.2 33.7-66.4 49.8-80.4c4.9-4.2 11.9-4.2 16.8 0c16.1 14 49.8 47.2 49.8 80.4c0 32.1-26 58.2-58.2 58.2s-58.2-26-58.2-58.2z" />
        <path d="M1.9 309.2c5.9-16.6 24.3-25.3 40.9-19.4L256 366l213.2-76.2c16.6-5.9 35 2.7 40.9 19.4s-2.7 35-19.4 40.9L351.1 400l139.6 49.9c16.6 5.9 25.3 24.3 19.4 40.9s-24.3 25.3-40.9 19.4L256 434 42.8 510.1c-16.6 5.9-35-2.7-40.9-19.4s2.7-35 19.4-40.9L160.9 400 21.2 350.1C4.6 344.2-4.1 325.9 1.9 309.2z" />
    </Icon>
);

export default Campfire;