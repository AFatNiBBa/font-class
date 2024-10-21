
import { Icon } from "../../index";

/**
 * A component that renders the `burrito` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burrito?s=sharp-light burrito}
 * @preview ![burrito](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/burrito.svg)
 */
const Burrito: typeof Icon = x => (
    <Icon {...x}>
        <path d="M269 80.3L32.3 317c23.9 12.2 51 19 79.7 19c79.2 0 146.2-52.3 168.3-124.3c5-16.3 7.7-33.7 7.7-51.7c0-28.7-6.9-55.8-19-79.7zM32 352.1l0 34.7L125.3 480l69.5 0 237-237c-23.9-12.2-51-19-79.7-19c-15.2 0-29.9 1.9-43.9 5.5C279.5 310.2 202.5 368 112 368c-28.3 0-55.4-5.7-80-15.9zM450 270L208 512l-96 0L0 400l0-96L242 62c8.2-35.5 40-62 78-62c11.4 0 22.2 2.4 32 6.7C361.8 2.4 372.6 0 384 0c34.6 0 64.1 22 75.2 52.8C490 63.9 512 93.4 512 128c0 11.4-2.4 22.2-6.7 32c4.3 9.8 6.7 20.6 6.7 32c0 38-26.5 69.8-62 78zM320 160c0 11.9-1 23.6-2.9 34.9c11.4-1.9 23-2.9 34.9-2.9c42.1 0 81.2 12.5 113.9 33.9c8.7-8.7 14.1-20.7 14.1-34c0-8.8-2.3-16.9-6.4-24l-4.6-8 4.6-8c4.1-7 6.4-15.2 6.4-24c0-22.8-15.9-41.9-37.2-46.8L433 79l-2.2-9.8C425.9 47.9 406.8 32 384 32c-8.8 0-16.9 2.3-24 6.4L352 43l-8-4.6c-7-4.1-15.2-6.4-24-6.4c-13.3 0-25.3 5.4-33.9 14.1C307.5 78.8 320 117.9 320 160z" />
    </Icon>
);

export default Burrito;