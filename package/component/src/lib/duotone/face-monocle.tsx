
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-monocle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-monocle?s=duotone face-monocle}
 * @preview ![face-monocle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-monocle.svg)
 */
const FaceMonocle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c65.8 0 125.9-24.8 171.2-65.7c-7.3-16.2-11.2-34-11.2-52.4l0-91.5c-20.3 20.7-48.7 33.6-80 33.6c-61.9 0-112-50.1-112-112s50.1-112 112-112s112 50.1 112 112l0 169.9c0 1.2 0 2.3 .1 3.5s.1 2.3 .2 3.4c.2 2.3 .4 4.6 .7 6.8c.6 4.5 1.6 8.9 2.9 13.2C489.4 376.2 512 318.7 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256zm112.4-64c0-17.7 14.3-32 32-32c8.8 0 16.8 3.6 22.6 9.4c2.9 2.9 5.2 6.3 6.9 10.2c.8 1.9 1.4 3.9 1.9 6c.2 1 .4 2.1 .5 3.2c.1 .5 .1 1.1 .1 1.6s0 1 0 1.8c0 .5 0 1 0 1.5s-.1 1.1-.1 1.6c-.1 1.1-.3 2.1-.5 3.2c-.4 2.1-1.1 4.1-1.9 6c-1.6 3.8-4 7.3-6.9 10.2c-5.8 5.8-13.8 9.4-22.6 9.4c-17.7 0-32-14.3-32-32zM144 352c0-8.8 7.2-16 16-16c17.7 0 45.3 3.5 72.2 13.9c26.8 10.4 54.9 28.5 70.1 59c4 7.9 .7 17.5-7.2 21.5s-17.5 .7-21.5-7.2c-10.3-20.7-30.3-34.6-53.1-43.4C197.9 370.9 174.3 368 160 368c-8.8 0-16-7.2-16-16zM259.5 106c-5.5-6.9-4.4-17 2.5-22.5c7.7-6.2 15.5-12.4 23.2-18.6C298.9 54 315.9 48 333.5 48c15.2 0 30.1 4.5 42.8 13c2.9 1.9 5.7 3.8 8.6 5.7c7.4 4.9 9.3 14.8 4.4 22.2s-14.8 9.3-22.2 4.4l-8.6-5.7c-7.4-5-16.2-7.6-25.1-7.6c-10.3 0-20.2 3.5-28.2 9.9c-7.7 6.2-15.5 12.4-23.2 18.6c-6.9 5.5-17 4.4-22.5-2.5z" />
        <path d="M305.2 89.9L282 108.5c-6.9 5.5-17 4.4-22.5-2.5s-4.4-17 2.5-22.5l23.2-18.6C298.9 54 315.9 48 333.5 48c15.2 0 30.1 4.5 42.8 13l8.6 5.7c7.4 4.9 9.3 14.8 4.4 22.2s-14.8 9.3-22.2 4.4l-8.6-5.7c-7.4-5-16.2-7.6-25.1-7.6c-10.3 0-20.2 3.5-28.2 9.9zM416 224a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm0 169.9l0-91.5c-20.3 20.7-48.7 33.6-80 33.6c-61.9 0-112-50.1-112-112s50.1-112 112-112s112 50.1 112 112l0 169.9c0 33.1 17 63.9 45.1 81.4l11.4 7.1c7.5 4.7 9.8 14.6 5.1 22s-14.6 9.8-22 5.1l-11.4-7.1C438.7 479.1 416 438.1 416 393.9zM112.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm176 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default FaceMonocle;