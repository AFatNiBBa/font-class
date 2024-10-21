
import { Icon } from "../../index";

/**
 * A component that renders the `poll-people` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/poll-people?s=sharp-thin poll-people}
 * @preview ![poll-people](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/poll-people.svg)
 */
const PollPeople: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 48A32 32 0 1 0 48 48a32 32 0 1 0 64 0zM32 48a48 48 0 1 1 96 0A48 48 0 1 1 32 48zm480 0l0 128 112 0 0-128L512 48zm-16 0L240 48l0 128 256 0 0-128zM224 32l16 0 384 0 16 0 0 16 0 128 0 16-16 0-384 0-16 0 0-16 0-128 0-16zM384 336l0 128 240 0 0-128-240 0zm-16 0l-128 0 0 128 128 0 0-128zM224 320l16 0 384 0 16 0 0 16 0 128 0 16-16 0-384 0-16 0 0-16 0-128 0-16zM112 336a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-80 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm11.5 96L22.2 496l115.6 0-21.3-64-72.9 0zM128 416l26.7 80 5.3 16-16.9 0L16.9 512 0 512l5.3-16L32 416l96 0zM22.2 208l115.6 0-21.3-64-72.9 0L22.2 208zM32 128l96 0 26.7 80 5.3 16-16.9 0L16.9 224 0 224l5.3-16L32 128z" />
    </Icon>
);

export default PollPeople;