
import { Icon } from "../../index";

/**
 * A component that renders the `sleigh` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sleigh?s=sharp-thin sleigh}
 * @preview ![sleigh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sleigh.svg)
 */
const Sleigh: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M8 32L0 32 0 48l8 0 24 0 0 208c0 70.7 57.3 128 128 128l0 80L40 464l-8 0 0 16 8 0 592 0 8 0 0-8 0-80 0-8-16 0 0 8 0 72-192 0 0-80 16 0c70.7 0 128-57.3 128-128l0-144 24 0 8 0 0-16-8 0-24 0-16 0-8 0-8 0-64 0-16 0 0 16 0 112 0 16-16 0-41 0c-83.1 0-159.6-45.7-199-118.9C178.4 66.2 121.1 32 58.8 32L56 32l-8 0L32 32 8 32zM416 464l-240 0 0-80 240 0 0 80zM552 112l8 0 0 144c0 61.9-50.1 112-112 112l-288 0C98.1 368 48 317.9 48 256L48 48l8 0 2.8 0c56.5 0 108.4 31 135.2 80.7C236.1 207.1 318 256 407 256l57 0 16 0 0-16 0-128 64 0 8 0z" />
    </Icon>
);

export default Sleigh;