
import { Icon } from "../../index";

/**
 * A component that renders the `turntable` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turntable?s=sharp-thin turntable}
 * @preview ![turntable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/turntable.svg)
 */
const Turntable: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 48l0 416L16 464 16 48l544 0zM16 32L0 32 0 48 0 464l0 16 16 0 544 0 16 0 0-16 0-416 0-16-16 0L16 32zM224 400a144 144 0 1 1 0-288 144 144 0 1 1 0 288zM64 256a160 160 0 1 0 320 0A160 160 0 1 0 64 256zm144 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm194.5 79.2l28.6 14.3-16.8 33.7-7.2 14.3-28.6-14.3 7.2-14.3 16.8-33.7zM436.2 328l-16.8 33.7L412.2 376l-7.2 14.3 14.3 7.2L448 411.8l14.3 7.2 7.2-14.3 7.2-14.3 16.8-33.7 7.2-14.3-14.3-7.2-7.2-3.6 32-64 .8-1.7 0-1.9 0-160 0-8-16 0 0 8 0 158.1-31.2 62.3-7.2-3.6-14.3-7.2L436.2 328z" />
    </Icon>
);

export default Turntable;