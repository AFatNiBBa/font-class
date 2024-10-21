
import { Icon } from "../../index";

/**
 * A component that renders the `hose-reel` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hose-reel?s=thin hose-reel}
 * @preview ![hose-reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/hose-reel.svg)
 */
const HoseReel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 256C80 123.5 187.5 16 320 16s240 107.5 240 240l0 96-23.9 0-.2 0L520 352c-4.4 0-8 3.6-8 8s3.6 8 8 8l8.8 0 14.2 128.1c-4 .5-7.1 3.8-7.1 7.9c0 4.4 3.6 8 8 8l7.9 0 .2 0 31.8 0 .2 0 7.9 0c4.4 0 8-3.6 8-8c0-4.1-3.1-7.5-7.1-7.9L607.2 368l8.8 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-15.9 0-.2 0L576 352l0-96C576 114.6 461.4 0 320 0S64 114.6 64 256s114.6 256 256 256c59.2 0 113.7-20.1 157.1-53.8c3.5-2.7 4.1-7.7 1.4-11.2s-7.7-4.1-11.2-1.4C426.6 477.2 375.5 496 320 496C187.5 496 80 388.5 80 256zM591.1 368L576.8 496l-17.7 0L544.9 368l23.1 0 23.1 0zM320 408a152 152 0 1 1 0-304 152 152 0 1 1 0 304zM152 256a168 168 0 1 0 336 0 168 168 0 1 0 -336 0zm232 0a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm-64-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160z" />
    </Icon>
);

export default HoseReel;