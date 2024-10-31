
import { Icon } from "../../index";

/**
 * A component that renders the `volume-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-slash?s=thin volume-slash}
 * @preview ![volume-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/volume-slash.svg)
 */
const VolumeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM576 256c0-62.1-29.5-117.3-75.1-152.3c-3.5-2.7-8.5-2-11.2 1.5s-2 8.5 1.5 11.2C533 148.5 560 199.1 560 256c0 29.5-7.3 57.4-20.1 81.8l12.8 10.1C567.5 320.6 576 289.3 576 256zM352 61.8C352 45.3 338.7 32 322.2 32c-7.3 0-14.3 2.7-19.8 7.5l-66 58.7 12.8 10.1L313 51.5c2.5-2.2 5.8-3.5 9.2-3.5c7.6 0 13.8 6.2 13.8 13.8l0 115.1 16 12.6 0-127.7zM88 176l14.5 0L82.5 160.3C54.2 163 32 186.9 32 216l0 80c0 30.9 25.1 56 56 56l78.9 0L302.4 472.5c5.5 4.8 12.5 7.5 19.8 7.5c16.5 0 29.8-13.3 29.8-29.8l0-77.2-16-12.6 0 89.8c0 7.6-6.2 13.8-13.8 13.8c-3.4 0-6.6-1.2-9.2-3.5L175.2 338c-1.5-1.3-3.4-2-5.3-2L88 336c-22.1 0-40-17.9-40-40l0-80c0-22.1 17.9-40 40-40zm376 80c0 6.9-.9 13.6-2.5 20L475 286.6c3.2-9.6 5-19.9 5-30.6c0-31.4-15.1-59.2-38.3-76.8c-3.5-2.7-8.5-1.9-11.2 1.6s-1.9 8.5 1.6 11.2c19.4 14.6 31.9 37.8 31.9 64z" />
    </Icon>
);

export default VolumeSlash;