
import { Icon } from "../../index";

/**
 * A component that renders the `face-mask` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-mask?s=sharp-thin face-mask}
 * @preview ![face-mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-mask.svg)
 */
const FaceMask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M480 400c-43.8 58.3-113.5 96-192 96s-148.2-37.7-192-96l48 0 32 48 224 0 32-48 48 0zm11-16l-3.1 0-56 0 0-91.2 95.6-51c.3 4.7 .4 9.4 .4 14.2c0 47.1-13.5 91-36.9 128zM526 224.6l-94 50.1 0-2.7 0-16-16 0-256 0-16 0 0 16 0 2.7L50 224.6C65.4 106.9 166.1 16 288 16s222.6 90.9 238 208.6zm15-8C522 93.9 416 0 288 0S54 93.9 35 216.5l-6.3-3.4-7.5 14.1 7.1 3.8 4.7 2.5c-.6 7.4-1 14.9-1 22.4c0 141.4 114.6 256 256 256s256-114.6 256-256c0-7.6-.3-15-1-22.4l4.7-2.5 7.1-3.8-7.5-14.1-6.3 3.4zM48.4 241.8l95.6 51 0 91.2-56 0-3.1 0C61.5 347 48 303.1 48 256c0-4.8 .1-9.5 .4-14.2zM416 272l0 123.2L391.4 432l-206.9 0L160 395.2 160 272l256 0zM184 312l0 16 8 0 192 0 8 0 0-16-8 0-192 0-8 0zm0 64l0 16 8 0 192 0 8 0 0-16-8 0-192 0-8 0zm56-208l8 0 0-16-8 0c-53.3 0-89.5 22.1-101.7 34.3l-5.7 5.7L144 203.3l5.7-5.7c9.1-9.1 41.2-29.7 90.3-29.7zm186.3 29.7l5.7 5.7L443.3 192l-5.7-5.7C425.5 174.1 389.3 152 336 152l-8 0 0 16 8 0c49.1 0 81.2 20.5 90.3 29.7z" />
    </Icon>
);

export default FaceMask;