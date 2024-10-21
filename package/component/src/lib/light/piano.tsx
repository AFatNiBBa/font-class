
import { Icon } from "../../index";

/**
 * A component that renders the `piano` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano?s=light piano}
 * @preview ![piano](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/piano.svg)
 */
const Piano: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 384l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-32 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-96 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-32 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-32 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-48 0 0 64c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-64-48 0zm-16-32l64 0 0-24.4c0-12.1-6.8-23.2-17.7-28.6l-58.4-29.2c-31.8-15.9-51.9-48.4-51.9-84C352 100.8 283.2 32 198.3 32L192 32C103.6 32 32 103.6 32 192l0 160 64 0 64 0 64 0 128 0 64 0zm96-24.4l0 24.4 0 16 0 16 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-64 0-16 0-16L0 192C0 86 86 0 192 0l6.3 0C300.8 0 384 83.2 384 185.7c0 23.5 13.2 44.9 34.2 55.4l58.4 29.2c21.7 10.8 35.4 33 35.4 57.2z" />
    </Icon>
);

export default Piano;