
import { Icon } from "../../index";

/**
 * A component that renders the `closed-captioning` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/closed-captioning?s=sharp-thin closed-captioning}
 * @preview ![closed-captioning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/closed-captioning.svg)
 */
const ClosedCaptioning: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 48l0 416L16 464 16 48l544 0zM16 32L0 32 0 48 0 464l0 16 16 0 544 0 16 0 0-16 0-416 0-16-16 0L16 32zM192 176c27.3 0 51.4 13.7 65.9 34.6l13.2-9.1C253.8 176.5 224.8 160 192 160c-53 0-96 43-96 96s43 96 96 96c32.8 0 61.8-16.5 79.1-41.5l-13.2-9.1C243.4 322.3 219.3 336 192 336c-44.2 0-80-35.8-80-80s35.8-80 80-80zm128 80c0-44.2 35.8-80 80-80c27.3 0 51.4 13.7 65.9 34.6l13.2-9.1C461.8 176.5 432.8 160 400 160c-53 0-96 43-96 96s43 96 96 96c32.8 0 61.8-16.5 79.1-41.5l-13.2-9.1C451.4 322.3 427.3 336 400 336c-44.2 0-80-35.8-80-80z" />
    </Icon>
);

export default ClosedCaptioning;