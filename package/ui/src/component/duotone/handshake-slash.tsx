
import { Icon, generic } from "../../index";

/**
 * A component that renders the `handshake-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-slash?s=duotone handshake-slash}
 * @preview ![handshake-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/handshake-slash.svg)
 */
const HandshakeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 144L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-180.4L40.6 128 16 128c-8.8 0-16 7.2-16 16zM64 336a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64-139.2L128 352l28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c.8-.8 1.5-1.7 2.2-2.6L128 196.8zm36.5-93.2c14.4 11.3 28.9 22.6 43.3 34l81.8-66.2c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-35.5 23.7zm69.2 54.2c21.1 16.5 42.2 33 63.2 49.6l77.2-60.1c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2l-89.7 72.6zm89.2 69.9c57.6 45.2 115.2 90.3 172.9 135.5c-1.1-11.3-6.3-22.3-15.3-30.7l-134.2-123-23.4 18.2zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm64 208a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default HandshakeSlash;