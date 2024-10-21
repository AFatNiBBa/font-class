
import { Icon, generic } from "../../index";

/**
 * A component that renders the `burrito` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burrito?s=sharp-duotone-solid burrito}
 * @preview ![burrito](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/burrito.svg)
 */
const Burrito: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 335.3L0 400 112 512l96 0L459.4 260.6C429.7 237.6 392.4 224 352 224c-15.2 0-29.9 1.9-43.9 5.5C279.5 310.2 202.5 368 112 368c-41.2 0-79.7-12-112-32.7zm4.6-35.9C34.3 322.4 71.6 336 112 336c79.2 0 146.2-52.3 168.3-124.3c5-16.3 7.7-33.7 7.7-51.7c0-40.4-13.6-77.7-36.6-107.4L4.6 299.4z" />
        <path d="M320 160c0-53.6-20.3-102.5-53.6-139.4C280.6 7.8 299.4 0 320 0c11.4 0 22.2 2.4 32 6.7C361.8 2.4 372.6 0 384 0c34.6 0 64.1 22 75.2 52.8C490 63.9 512 93.4 512 128c0 11.4-2.4 22.2-6.7 32c4.3 9.8 6.7 20.6 6.7 32c0 20.6-7.8 39.4-20.6 53.6C454.5 212.3 405.6 192 352 192c-11.9 0-23.6 1-34.9 2.9c1.9-11.4 2.9-23 2.9-34.9z" />
    </Icon>
);

export default Burrito;