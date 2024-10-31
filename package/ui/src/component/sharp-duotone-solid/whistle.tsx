
import { Icon, generic } from "../../index";

/**
 * A component that renders the `whistle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whistle?s=sharp-duotone-solid whistle}
 * @preview ![whistle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/whistle.svg)
 */
const Whistle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 256c0-23.6 4.3-46.3 12.1-67.2c6.1-16.3 14.4-31.6 24.4-45.5c3.6-5 7.4-9.7 11.5-14.3c11.4-12.9 24.5-24.3 39-33.8C149.2 75.5 185.2 64 224 64c46.6 0 91.9 15.7 128.5 44.7l78.1 61.8L416 224l32 24 45.9-27.5L640 336 536 448 380.7 367c-34.8 49-92 81-156.7 81C118 448 32 362 32 256zm128 0a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M0 128c0 28.4 18.5 52.5 44.1 60.8c6.1-16.3 14.4-31.6 24.4-45.5c-1.4 .4-2.9 .6-4.5 .6c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16c0 .3 0 .7 0 1c11.4-12.9 24.5-24.3 39-33.8C107.8 76.5 87.4 64 64 64C28.7 64 0 92.7 0 128zM224 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Whistle;