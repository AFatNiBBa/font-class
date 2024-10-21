
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eye` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye?s=duotone eye}
 * @preview ![eye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/eye.svg)
 */
const Eye: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 4.2 .8 8.4 2.5 12.3C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c1.6-3.9 2.5-8.1 2.5-12.3s-.8-8.4-2.5-12.3c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32s-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7C.8 247.6 0 251.8 0 256zm432 0a144 144 0 1 1 -288 0 144 144 0 1 1 288 0z" />
        <path d="M224 256c35.3 0 64-28.7 64-64c0-7.1-1.2-13.9-3.3-20.3c-1.8-5.5 1.6-11.9 7.4-11.7c40.8 1.7 77.5 29.6 88.6 71.1c13.7 51.2-16.7 103.9-67.9 117.6s-103.9-16.7-117.6-67.9c-1.9-6.9-2.9-13.9-3.2-20.7c-.3-5.8 6.1-9.2 11.7-7.4c6.4 2.1 13.2 3.3 20.3 3.3z" />
    </Icon>
);

export default Eye;