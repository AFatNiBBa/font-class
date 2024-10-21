
import { Icon } from "../../index";

/**
 * A component that renders the `bullseye-pointer` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye-pointer?s=sharp-thin bullseye-pointer}
 * @preview ![bullseye-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bullseye-pointer.svg)
 */
const BullseyePointer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256c0 132.5-107.5 240-240 240c-9 0-17.8-.5-26.6-1.5L225 510.1c10.2 1.2 20.5 1.9 31 1.9c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256c0 10.5 .6 20.8 1.9 31l15.6-4.5C16.5 273.8 16 265 16 256C16 123.5 123.5 16 256 16s240 107.5 240 240zM249.6 423.9c2.1 .1 4.2 .1 6.4 .1c92.8 0 168-75.2 168-168s-75.2-168-168-168S88 163.2 88 256c0 2.1 0 4.3 .1 6.4l15.9-4.5c0-.6 0-1.2 0-1.8c0-83.9 68.1-152 152-152s152 68.1 152 152s-68.1 152-152 152c-.6 0-1.2 0-1.8 0l-4.5 15.9zM278 324.6c29-9.3 50-36.5 50-68.6c0-39.8-32.2-72-72-72c-32.1 0-59.3 21-68.6 50l19.9-5.7C217 211.4 235.1 200 256 200c30.9 0 56 25.1 56 56c0 20.9-11.4 39-28.3 48.7L278 324.6zm-14.3-66.4l4-13.8-13.8 4-224 64L4.4 319.6l25.2 8.1 108.7 34.8L2.3 498.3l11.3 11.3L149.6 373.7l34.8 108.7 8.1 25.2 7.3-25.4 64-224zM59.6 320.4l184.8-52.8L191.6 452.4l-30.7-96-1.3-3.9-3.9-1.3-96-30.7z" />
    </Icon>
);

export default BullseyePointer;