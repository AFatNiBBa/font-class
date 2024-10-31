
import { Icon } from "../../index";

/**
 * A component that renders the `bullseye-arrow` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye-arrow?s=sharp-thin bullseye-arrow}
 * @preview ![bullseye-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bullseye-arrow.svg)
 */
const BullseyeArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c26.5 0 52 4 76 11.5L319.1 24.4C299 18.9 277.8 16 256 16C123.5 16 16 123.5 16 256s107.5 240 240 240s240-107.5 240-240c0-21.8-2.9-43-8.4-63.1L500.5 180c7.4 24 11.5 49.5 11.5 76c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0zm0 88c8.5 0 16.9 .6 25.1 1.9l2.8 16.7c-9-1.7-18.4-2.6-27.9-2.6c-83.9 0-152 68.1-152 152s68.1 152 152 152s152-68.1 152-152c0-9.5-.9-18.8-2.6-27.9l16.7 2.8c1.2 8.2 1.9 16.6 1.9 25.1c0 92.8-75.2 168-168 168s-168-75.2-168-168s75.2-168 168-168zm14.1 97.4L255.4 200c-30.5 .3-55.1 25-55.4 55.4l-.6 .6 .6 .6c.3 30.5 25 55.1 55.4 55.4l.6 .6 .6-.6c30.5-.3 55.1-25 55.4-55.4l14.6-14.6c.9 4.5 1.4 9.2 1.4 14.1c0 39.8-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72c4.8 0 9.5 .5 14.1 1.4zM406.6 94.1L381.1 30.2 328.6 82.7l12.8 76.6 65.3-65.3zm-54 76.6l76.6 12.8 52.5-52.5-63.8-25.5-65.3 65.3zm-13.9 13.9l-77.1 77.1-5.7 5.7L244.7 256l5.7-5.7 77.1-77.1L312.1 81.3l-.7-4.1 2.9-2.9 64-64 8.6-8.6L391.4 13l30.7 76.8L499 120.6l11.3 4.5-8.6 8.6-64 64-2.9 2.9-4.1-.7-91.9-15.3z" />
    </Icon>
);

export default BullseyeArrow;