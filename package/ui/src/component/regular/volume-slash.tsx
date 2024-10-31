
import { Icon } from "../../index";

/**
 * A component that renders the `volume-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-slash?s=regular volume-slash}
 * @preview ![volume-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/volume-slash.svg)
 */
const VolumeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.1 386.2C556.7 352 576 306.3 576 256c0-60.1-27.7-113.8-70.9-149c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C507.3 170.7 528 210.9 528 256c0 39.1-15.6 74.5-40.9 100.5L449 326.6c19-17.5 31-42.7 31-70.6c0-30.1-13.9-56.9-35.4-74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C425.1 227.6 432 241 432 256s-6.9 28.4-17.7 37.3c-1.3 1-2.4 2.2-3.4 3.4L352 250.6l0-188.8C352 45.3 338.7 32 322.2 32c-7.3 0-14.3 2.7-19.8 7.5L199.5 131 38.8 5.1zm199.1 156L304 102.3 304 213l-66.1-51.8zM32 216l0 80c0 30.9 25.1 56 56 56l78.9 0L302.4 472.5c5.5 4.8 12.5 7.5 19.8 7.5c16.5 0 29.8-13.3 29.8-29.8l0-76.9-48-37.8 0 74.2L191.9 310.1c-4.4-3.9-10.1-6.1-15.9-6.1l-88 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8l54.2 0L81.7 160.4C53.7 163.5 32 187.2 32 216z" />
    </Icon>
);

export default VolumeSlash;