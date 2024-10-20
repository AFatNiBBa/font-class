
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-music` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-music?s=sharp-duotone-solid cloud-music}
 * @preview ![cloud-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cloud-music.svg)
 */
const CloudMusic: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336L0 480l144 0 368 0 128 0 0-128c0-59.6-40.8-109.8-96-124l0-36c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192l0 8.2C40.1 220 0 273.3 0 336zm192 40c0-17.7 21.5-32 48-32c5.6 0 11 .6 16 1.8l0-81.8 0-32 0-11.1 10.4-3.9 128-48 21.6-8.1 0 23.1 0 32 0 128c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-74.7-96 36L288 376c0 17.7-21.5 32-48 32s-48-14.3-48-32z" />
        <path d="M416 160.9l0 23.1 0 32 0 128c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-74.7-96 36L288 376c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-81.8 0-32 0-11.1 10.4-3.9 128-48 21.6-8.1z" />
    </Icon>
);

export default CloudMusic;