
import { Icon, generic } from "../../index";

/**
 * A component that renders the `triangle-person-digging` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-person-digging?s=duotone triangle-person-digging}
 * @preview ![triangle-person-digging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/triangle-person-digging.svg)
 */
const TrianglePersonDigging: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M69.5 419.8c-7.3 12.4-7.3 27.7-.2 40.1S89.7 480 104 480l432 0c14.3 0 27.6-7.7 34.7-20.1s7-27.8-.2-40.1l-216-368C347.3 39.5 334.2 32 320 32s-27.3 7.5-34.5 19.8l-216 368zm107.9-26.2c10.7-24 21.3-48 32-72c2.5-5.6 5-11.2 7.5-16.8l15.6 9.8 64 40c4.7 2.9 7.5 8.1 7.5 13.6l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-23.1-40.9-25.5-24.5 55.2c-2.7 6-8.5 9.5-14.6 9.5c-2.2 0-4.4-.4-6.5-1.4c-8.1-3.6-11.7-13-8.1-21.1zm47-125.9c-1-4.3-.2-8.8 2.3-12.5c1.4-2.1 2.8-4.2 4.2-6.4c10.3-15.5 27.7-24.8 46.3-24.8c22.7 0 43.2 13.8 51.6 34.9l19.7 49.2L402 339l16.3-27.2c2.9-4.8 8.1-7.8 13.7-7.8s10.8 2.9 13.7 7.8l48 80c3 4.9 3 11.1 .2 16.1s-8.2 8.1-13.9 8.1l-96 0c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2 .2-16.1l15.2-25.4L232 277.9c-3.8-2.2-6.6-5.9-7.6-10.2zM336 184a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M288 184a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm40.8 74.9l19.7 49.2L402 339l16.3-27.2c2.9-4.8 8.1-7.8 13.7-7.8s10.8 2.9 13.7 7.8l48 80c3 4.9 3 11.1 .2 16.1s-8.2 8.1-13.9 8.1l-96 0c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2 .2-16.1l15.2-25.4L232 277.9c-3.8-2.2-6.6-5.9-7.6-10.2s-.2-8.8 2.3-12.5l4.2-6.4c10.3-15.5 27.7-24.8 46.3-24.8c22.7 0 43.2 13.8 51.6 34.9zm-96.3 55.5l64 40c4.7 2.9 7.5 8.1 7.5 13.6l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-23.1-40.9-25.5-24.5 55.2c-3.6 8.1-13 11.7-21.1 8.1s-11.7-13-8.1-21.1l32-72 7.5-16.8 15.6 9.8z" />
    </Icon>
);

export default TrianglePersonDigging;