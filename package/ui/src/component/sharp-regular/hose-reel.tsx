
import { Icon } from "../../index";

/**
 * A component that renders the `hose-reel` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hose-reel?s=sharp-regular hose-reel}
 * @preview ![hose-reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hose-reel.svg)
 */
const HoseReel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 48c-114.9 0-208 93.1-208 208s93.1 208 208 208c45.6 0 87.7-14.6 122-39.5l28.2 38.9C428 494 376.1 512 320 512C178.6 512 64 397.4 64 256S178.6 0 320 0S576 114.6 576 256l0 96 16 0 24 0 0 48-24 0-2.3 0-11.4 80 13.7 0 0 32-16 0-48 0-16 0 0-32 13.7 0-11.4-80-2.3 0-24 0 0-48 24 0 16 0 0-96c0-114.9-93.1-208-208-208zM208 256a112 112 0 1 0 224 0 112 112 0 1 0 -224 0zM320 416a160 160 0 1 1 0-320 160 160 0 1 1 0 320zM256 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default HoseReel;