
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-hand-over-mouth` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-hand-over-mouth?s=duotone face-hand-over-mouth}
 * @preview ![face-hand-over-mouth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-hand-over-mouth.svg)
 */
const FaceHandOverMouth: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 94.5 51.2 177 127.3 221.4c-9.8-18-15.3-38.6-15.3-60.5l0-32.8 0-53.6c0-28.7 23.3-52 52-52c17.9 0 33.6 9 43 22.7l47.1-47.1c18.7-18.7 49.1-18.7 67.9 0c1 1 2 2.1 3 3.2c15.7-3.7 32.8 .5 45 12.8s16.5 29.4 12.8 45c1.1 .9 2.2 1.9 3.2 3c18.1 18.1 18.7 47.1 1.8 65.9c16.9 18.8 16.3 47.8-1.8 65.9l-49 49C438.7 465.1 512 369.1 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256zm208.4-64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm160 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M208.4 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm90.9 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-79 79c-5 5-13.7 1.5-13.7-5.7l0-19.7c0-11-9-20-20-20s-20 9-20 20l0 53.6 0 32.8c0 52.6 42.6 95.2 95.2 95.2c25.2 0 49.5-10 67.3-27.9l56.8-56.8c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L321.4 424c-2.6 2.6-6.8 2.6-9.4 0s-2.6-6.8 0-9.4l51.3-51.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L289.4 392c-2.6 2.6-6.8 2.6-9.4 0s-2.6-6.8 0-9.4l67.3-67.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L257.4 360c-2.6 2.6-6.8 2.6-9.4 0s-2.6-6.8 0-9.4l51.3-51.3zM336.4 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default FaceHandOverMouth;