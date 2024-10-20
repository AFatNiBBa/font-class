
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bluetooth` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bluetooth?s=duotone bluetooth}
 * @preview ![bluetooth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bluetooth.svg)
 */
const Bluetooth: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M178.8 2.9c11.4-5.2 24.8-3.2 34.3 5.1l128 112C348 126 352 134.8 352 144s-4 18-10.9 24.1L240.6 256l100.5 87.9C348 350 352 358.8 352 368s-4 18-10.9 24.1l-128 112c-9.4 8.3-22.9 10.2-34.3 5.1S160 492.6 160 480l0-153.5L85.1 392.1c-13.3 11.6-33.5 10.3-45.2-3s-10.3-33.5 3-45.2L143.4 256 42.9 168.1c-13.3-11.6-14.6-31.9-3-45.2s31.9-14.6 45.2-3L160 185.5 160 32c0-12.6 7.3-24 18.8-29.1zM224 326.5l0 83L271.4 368 224 326.5zm0-141L271.4 144 224 102.5l0 83z" />
    </Icon>
);

export default Bluetooth;