
import { Icon } from "../../index";

/**
 * A component that renders the `infinity` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/infinity?s=thin infinity}
 * @preview ![infinity](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/infinity.svg)
 */
const Infinity: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 240.2C0 169.4 57.4 112 128.2 112c32.7 0 64.2 12.5 88 35L320 245l103.8-98c23.8-22.5 55.3-35 88-35C582.6 112 640 169.4 640 240.2l0 31.6C640 342.6 582.6 400 511.8 400c-32.7 0-64.2-12.5-88-35L320 267 216.2 365c-23.8 22.5-55.3 35-88 35C57.4 400 0 342.6 0 271.8l0-31.6zM308.3 256L205.3 158.6c-20.8-19.7-48.4-30.6-77-30.6C66.2 128 16 178.2 16 240.2l0 31.6C16 333.8 66.2 384 128.2 384c28.7 0 56.2-11 77-30.6L308.3 256zm23.3 0l103.1 97.4c20.8 19.7 48.4 30.6 77 30.6c62 0 112.2-50.2 112.2-112.2l0-31.6c0-62-50.2-112.2-112.2-112.2c-28.6 0-56.2 11-77 30.6L331.7 256z" />
    </Icon>
);

export default Infinity;