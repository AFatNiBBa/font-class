
import { Icon } from "../../index";

/**
 * A component that renders the `closed-captioning` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/closed-captioning?s=light closed-captioning}
 * @preview ![closed-captioning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/closed-captioning.svg)
 */
const ClosedCaptioning: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm200 96c-35.3 0-64 28.7-64 64s28.7 64 64 64c17.4 0 33.2-7 44.8-18.3c6.3-6.2 16.4-6.1 22.6 .2s6.1 16.4-.2 22.6c-17.3 17-41 27.4-67.2 27.4c-53 0-96-43-96-96s43-96 96-96c26.2 0 49.9 10.5 67.2 27.4c6.3 6.2 6.4 16.3 .2 22.6s-16.3 6.4-22.6 .2C233.2 199 217.4 192 200 192zm192 0c-35.3 0-64 28.7-64 64s28.7 64 64 64c17.4 0 33.2-7 44.8-18.3c6.3-6.2 16.4-6.1 22.6 .2s6.1 16.4-.2 22.6c-17.3 17-41 27.4-67.2 27.4c-53 0-96-43-96-96s43-96 96-96c26.2 0 49.9 10.5 67.2 27.4c6.3 6.2 6.4 16.3 .2 22.6s-16.3 6.4-22.6 .2C425.2 199 409.4 192 392 192z" />
    </Icon>
);

export default ClosedCaptioning;