
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-awesome` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-awesome?s=sharp-duotone-solid face-awesome}
 * @preview ![face-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-awesome.svg)
 */
const FaceAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm80-72c0-35.3 28.7-64 64-64c3.4 0 6.7 .3 10 .8c22.6 3.5 41.3 18.9 49.5 39.6c2.9 7.3 4.5 15.3 4.5 23.6l0 40L80 224l0-40zM96 288l320 0c-1.4 6.3-2.8 12.7-4.2 19c-5 22.6-14.7 43.2-27.9 60.9C354.5 407.2 307.6 432 256 432c-74.8 0-139.5-51.9-155.8-125L96 288zm176-96c0-39.8 32.2-72 72-72c5.8 0 11.4 .7 16.8 2c22 5.3 40.1 20.6 49.1 40.9c3.9 8.9 6.1 18.8 6.1 29.1l0 32-144 0 0-32z" />
        <path d="M154 120.8c22.6 3.5 41.3 18.9 49.5 39.6c-5.6 9.4-15.8 15.6-27.5 15.6c-17.7 0-32-14.3-32-32c0-9.1 3.8-17.4 10-23.2zM360.8 122c22 5.3 40.1 20.6 49.1 40.9c-5.8 8-15.2 13.1-25.9 13.1c-17.7 0-32-14.3-32-32c0-8.5 3.3-16.3 8.8-22zM96 288l320 0-4.2 19c-5 22.6-14.7 43.2-27.9 60.9C370.5 357.9 354 352 336 352c-44.2 0-80 35.8-80 80c-74.8 0-139.5-51.9-155.8-125L96 288z" />
    </Icon>
);

export default FaceAwesome;