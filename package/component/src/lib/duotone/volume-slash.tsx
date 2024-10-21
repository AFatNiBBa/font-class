
import { Icon, generic } from "../../index";

/**
 * A component that renders the `volume-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-slash?s=duotone volume-slash}
 * @preview ![volume-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/volume-slash.svg)
 */
const VolumeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 224l0 64c0 35.3 28.7 64 64 64l67.8 0L298.7 471.9c6 5.3 13.6 8.1 21.3 8.1c4.4 0 8.9-.9 13.1-2.8C344.6 472 352 460.6 352 448l0-74.7L82.9 161.3C53.8 167.4 32 193.1 32 224zm165.8-94.2C249.2 170 300.6 210.3 352 250.6L352 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L197.8 129.8zM410.8 185c-8.4 10.3-6.8 25.4 3.5 33.8C425.1 227.6 432 241 432 256s-6.9 28.4-17.7 37.3c-1.3 1-2.4 2.2-3.4 3.4c12.7 10 25.5 20 38.2 29.9c19-17.5 31-42.7 31-70.6c0-30.1-13.9-56.9-35.4-74.5c-10.3-8.4-25.4-6.8-33.8 3.5zm60.5-74.5c-8.4 10.3-6.8 25.4 3.5 33.8C507.3 170.7 528 210.9 528 256c0 39.1-15.6 74.5-40.9 100.5c12.6 9.9 25.3 19.8 37.9 29.7C556.7 352 576 306.3 576 256c0-60.1-27.7-113.8-70.9-149c-10.3-8.4-25.4-6.8-33.8 3.5z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default VolumeSlash;