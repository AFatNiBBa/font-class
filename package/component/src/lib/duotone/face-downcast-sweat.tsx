
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-downcast-sweat` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-downcast-sweat?s=duotone face-downcast-sweat}
 * @preview ![face-downcast-sweat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-downcast-sweat.svg)
 */
const FaceDowncastSweat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0c-51.4 0-99.3 15.2-139.4 41.2c1.5 3.1 3 6.2 4.3 9.3c3.4 8 7.1 19 7.1 30.5c0 44.3-36.6 79-80 79c-9.6 0-18.8-1.7-27.4-4.8C7.3 186.1 0 220.2 0 256zm96 16c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zm76.1 117.3C188.2 371.4 216.3 352 256 352s67.8 19.4 83.9 37.3c5.9 6.6 5.4 16.7-1.2 22.6s-16.7 5.4-22.6-1.2c-11.7-13-31.6-26.7-60.1-26.7s-48.4 13.7-60.1 26.7c-5.9 6.6-16 7.1-22.6 1.2s-7.1-16-1.2-22.6zM288 272c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16z" />
        <path d="M48 128C21.5 128 0 107 0 81C0 61 28.6 20.6 41.6 3.3c3.2-4.4 9.6-4.4 12.8 0C67.6 20.6 96 61 96 81c0 26-21.5 47-48 47zM96 272c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zm192 0c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default FaceDowncastSweat;