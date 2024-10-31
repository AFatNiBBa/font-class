
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-eye` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-eye?s=sharp-thin arrows-to-eye}
 * @preview ![arrows-to-eye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrows-to-eye.svg)
 */
const ArrowsToEye: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M37.7 26.3L32 20.7 20.7 32l5.7 5.7L132.7 144 56 144l-8 0 0 16 8 0 96 0 8 0 0-8 0-96 0-8-16 0 0 8 0 76.7L37.7 26.3zm564.7 0L496 132.7 496 56l0-8-16 0 0 8 0 96 0 8 8 0 96 0 8 0 0-16-8 0-76.7 0L613.7 37.7l5.7-5.7L608 20.7l-5.7 5.7zM202.8 334.3c-27.7-25.8-47.1-56.3-57.3-78.3c10.2-22 29.6-52.5 57.3-78.3C233.1 149.6 272.4 128 320 128s86.9 21.6 117.2 49.7c27.7 25.8 47.1 56.3 57.3 78.3c-10.2 22-29.6 52.5-57.3 78.3C406.9 362.4 367.6 384 320 384s-86.9-21.6-117.2-49.7zM320 400c105.6 0 172-96 192-144c-20-48-86.4-144-192-144s-172 96-192 144c20 48 86.4 144 192 144zm282.3 85.7l5.7 5.7L619.3 480l-5.7-5.7L507.3 368l76.7 0 8 0 0-16-8 0-96 0-8 0 0 8 0 96 0 8 16 0 0-8 0-76.7L602.3 485.7zm-564.7 0L144 379.3l0 76.7 0 8 16 0 0-8 0-96 0-8-8 0-96 0-8 0 0 16 8 0 76.7 0L26.3 474.3 20.7 480 32 491.3l5.7-5.7zM256 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default ArrowsToEye;