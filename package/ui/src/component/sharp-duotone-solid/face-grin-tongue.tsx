
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-tongue` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-tongue?s=sharp-duotone-solid face-grin-tongue}
 * @preview ![face-grin-tongue](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-grin-tongue.svg)
 */
const FaceGrinTongue: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 368.9 73.1 464.7 174.5 498.8C165.3 484 160 466.6 160 448l0-47.3c-31.9-23.3-55.2-57.8-64-97.9c46.2 18.3 101.2 29 160.2 29s114.1-10.6 160.2-29c-8.8 40.2-32.3 75-64.5 98.3l0 46.9c0 18.6-5.3 36-14.5 50.8C438.9 464.7 512 368.9 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256zm144.4-48c0-17.7 14.3-32 32-32c8.8 0 16.8 3.6 22.6 9.4c2.9 2.9 5.2 6.3 6.9 10.2c.8 1.9 1.4 3.9 1.9 6c.2 1 .4 2.1 .5 3.2c.1 .5 .1 1.1 .1 1.6s0 1 0 1.8c0 .5 0 1 0 1.5s-.1 1.1-.1 1.6c-.1 1.1-.3 2.1-.5 3.2c-.4 2.1-1.1 4.1-1.9 6c-1.6 3.8-4 7.3-6.9 10.2c-5.8 5.8-13.8 9.4-22.6 9.4c-17.7 0-32-14.3-32-32zm224 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M208.4 208a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm160 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 448l0-64-48 0 0 24-32 0 0-24-48 0 0 64c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default FaceGrinTongue;