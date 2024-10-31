
import { Icon } from "../../index";

/**
 * A component that renders the `brake-warning` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brake-warning?s=solid brake-warning}
 * @preview ![brake-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/brake-warning.svg)
 */
const BrakeWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 256a224 224 0 1 1 448 0A224 224 0 1 1 96 256zM344 152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zM320 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM91.1 109C63.8 151.4 48 201.8 48 256s15.8 104.6 43.1 147c7.2 11.1 4 26-7.2 33.2s-26 4-33.2-7.2C18.6 379.1 0 319.7 0 256S18.6 132.9 50.7 83c7.2-11.1 22-14.4 33.2-7.2s14.4 22 7.2 33.2zM589.3 83C621.4 132.9 640 192.3 640 256s-18.6 123.1-50.7 173c-7.2 11.1-22 14.4-33.2 7.2s-14.4-22-7.2-33.2c27.3-42.4 43.1-92.8 43.1-147s-15.8-104.6-43.1-147c-7.2-11.1-4-26 7.2-33.2s26-4 33.2 7.2z" />
    </Icon>
);

export default BrakeWarning;