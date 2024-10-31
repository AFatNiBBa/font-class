
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-downcast-sweat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-downcast-sweat?s=sharp-duotone-solid face-downcast-sweat}
 * @preview ![face-downcast-sweat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-downcast-sweat.svg)
 */
const FaceDowncastSweat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0c-51 0-98.5 14.9-138.4 40.6C124.4 52.6 128 66.1 128 80c0 44.2-35.8 80-80 80c-9.6 0-18.8-1.7-27.4-4.8C7.3 186.1 0 220.2 0 256zm96 0l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32zm65.4 145.2l10.7-11.9C188.2 371.4 216.3 352 256 352s67.8 19.4 83.9 37.3l10.7 11.9-23.8 21.4-10.7-11.9c-11.7-13-31.6-26.7-60.1-26.7s-48.4 13.7-60.1 26.7l-10.7 11.9-23.8-21.4zM288 256l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32z" />
        <path d="M48 0L9.6 51.2C3.4 59.5 0 69.6 0 80c0 26.5 21.5 48 48 48s48-21.5 48-48c0-10.4-3.4-20.5-9.6-28.8L48 0zM96 256l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0zm192 0l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0z" />
    </Icon>
);

export default FaceDowncastSweat;