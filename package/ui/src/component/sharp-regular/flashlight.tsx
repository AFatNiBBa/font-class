
import { Icon } from "../../index";

/**
 * A component that renders the `flashlight` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flashlight?s=sharp-regular flashlight}
 * @preview ![flashlight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/flashlight.svg)
 */
const Flashlight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M413.8 314.4l-13-10.4L384 304 48 304l0-96 336 0 16.8 0 13-10.4s0 0 0 0l.2-.2c.3-.2 .9-.7 1.8-1.3c1.8-1.3 4.6-3.3 8.5-5.8c7.7-5 19.3-11.9 34.1-18.8c15.2-7.1 33.2-14.1 53.6-19.3l0 207.7c-20.3-5.1-38.4-12.1-53.6-19.3c-14.7-6.9-26.3-13.8-34.1-18.8c-3.9-2.5-6.7-4.5-8.5-5.8c-.9-.6-1.5-1.1-1.8-1.3l-.2-.2s0 0 0 0zM576 368c-5.4 0-10.8-.2-16-.5l0-223c5.2-.3 10.6-.5 16-.5l16 0 0 224-16 0zM592 96l-16 0c-112 0-192 64-192 64L48 160 0 160l0 48 0 96 0 48 48 0 336 0s80 64 192 64l16 0 48 0 0-48 0-224 0-48-48 0zM248 232l-24 0 0 48 24 0 48 0 24 0 0-48-24 0-48 0z" />
    </Icon>
);

export default Flashlight;