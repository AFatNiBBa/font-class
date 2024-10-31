
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-landscape` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-landscape?s=duotone image-landscape}
 * @preview ![image-landscape](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/image-landscape.svg)
 */
const ImageLandscape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm128 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm2.4 178.4c4 8.3 12.4 13.6 21.6 13.6l80 0 48 0 144 0c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144C343.5 196 336 192 328 192s-15.5 4-20 10.7l-56 84L234.7 265c-4.6-5.7-11.4-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4z" />
        <path d="M328 192c8 0 15.5 4 20 10.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S432.9 384 424 384l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C312.5 196 320 192 328 192z" />
    </Icon>
);

export default ImageLandscape;