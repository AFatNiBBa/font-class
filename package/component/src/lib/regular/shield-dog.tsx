
import { Icon } from "../../index";

/**
 * A component that renders the `shield-dog` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-dog?s=regular shield-dog}
 * @preview ![shield-dog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shield-dog.svg)
 */
const ShieldDog: typeof Icon = x => (
    <Icon {...x}>
        <path d="M73 127L256 49.4 439 127c5.9 2.5 9.1 7.8 9 12.8c-.4 91.4-38.4 249.3-186.3 320.1c-3.6 1.7-7.8 1.7-11.3 0C102.4 389 64.5 231.2 64 139.7c0-5 3.1-10.2 9-12.8zM457.7 82.8L269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.8 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2zM160.9 270.2l-15 30c-1.2 2.5-1.9 5.2-1.9 8c0 7.1 4.3 13.6 10.8 16.4l98.7 42.3c1.7 .7 3.4 1.1 5.2 1.1c7.3 0 13.3-5.9 13.3-13.3l0-50.7 48 0c44.2 0 80-35.8 80-80l0-32c0-8.8-7.2-16-16-16l-64 0-7.2-14.3c-5.4-10.8-16.5-17.7-28.6-17.7L240 144l0 64c0 35.3-28.7 64-64 64c-5.2 0-10.3-.6-15.1-1.8zM160 144c-8.8 0-16 7.2-16 16l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 0-32-8 0-40 0zm96 48a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default ShieldDog;