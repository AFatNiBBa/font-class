
import { Icon } from "../../index";

/**
 * A component that renders the `truck-field` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-field?s=light truck-field}
 * @preview ![truck-field](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/truck-field.svg)
 */
const TruckField: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 64c17.7 0 32 14.3 32 32l0 96 0 32 0 128-101.5 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64L64 352l0-64 0-160 0-32c0-17.7 14.3-32 32-32l224 0zM32 128c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l0 64-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 32 0c0 53 43 96 96 96s96-43 96-96l96 0 32 0c0 53 43 96 96 96s96-43 96-96l32 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-96c0-35.3-28.7-64-64-64l-22.4 0-42.4-78.8C470.8 97.7 454.5 88 436.9 88l-53.4 0c-3.9-31.6-30.9-56-63.5-56L96 32C60.7 32 32 60.7 32 96l0 32zm352 64l0-72 52.9 0c5.9 0 11.3 3.2 14.1 8.4L485.2 192 384 192zm5.5 160l-5.5 0 0-128 127.7 0c.2 0 .4 0 .6 0l31.7 0c17.7 0 32 14.3 32 32l0 96-5.5 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64zM96 384a64 64 0 1 1 128 0A64 64 0 1 1 96 384zm384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default TruckField;