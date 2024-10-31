
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-mobile` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-mobile?s=solid laptop-mobile}
 * @preview ![laptop-mobile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/laptop-mobile.svg)
 */
const LaptopMobile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 0C92.7 0 64 28.7 64 64l0 224-44.8 0C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384L352 384l0-96-224 0 0-224 320 0 0 32 64 0 0-32c0-35.3-28.7-64-64-64L128 0zM448 448l0-256 128 0 0 256-128 0zM384 176l0 288c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-160 0c-26.5 0-48 21.5-48 48z" />
    </Icon>
);

export default LaptopMobile;