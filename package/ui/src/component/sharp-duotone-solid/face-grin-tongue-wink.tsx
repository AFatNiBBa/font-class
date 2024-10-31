
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-tongue-wink` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-tongue-wink?s=sharp-duotone-solid face-grin-tongue-wink}
 * @preview ![face-grin-tongue-wink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-grin-tongue-wink.svg)
 */
const FaceGrinTongueWink: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 368.9 73.1 464.7 174.5 498.8C165.3 484 160 466.6 160 448l0-47.3c-31.9-23.3-55.2-57.8-64-97.9c46.2 18.3 101.2 29 160.2 29s114.1-10.6 160.2-29c-8.8 40.2-32.3 75-64.5 98.3l0 46.9c0 18.6-5.3 36-14.5 50.8C438.9 464.7 512 368.9 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256zm91.2-37.6c34.4-45.9 103.2-45.9 137.6 0c-8.6 6.4-17.1 12.8-25.6 19.2c-21.6-28.8-64.8-28.8-86.4 0c-8.5-6.4-17.1-12.8-25.6-19.2zM400 208a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M336 184a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM203.2 237.6c-21.6-28.8-64.8-28.8-86.4 0L91.2 218.4c34.4-45.9 103.2-45.9 137.6 0l-25.6 19.2zM320 384l0 64c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-64 48 0 0 24 32 0 0-24 48 0z" />
    </Icon>
);

export default FaceGrinTongueWink;