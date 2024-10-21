
import { Icon } from "../../index";

/**
 * A component that renders the `chair` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chair?s=solid chair}
 * @preview ![chair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chair.svg)
 */
const Chair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M248 48l0 208 48 0 0-197.3c23.9 13.8 40 39.7 40 69.3l0 128 48 0 0-128C384 57.3 326.7 0 256 0L192 0C121.3 0 64 57.3 64 128l0 128 48 0 0-128c0-29.6 16.1-55.5 40-69.3L152 256l48 0 0-208 48 0zM48 288c-12.1 0-23.2 6.8-28.6 17.7l-16 32c-5 9.9-4.4 21.7 1.4 31.1S20.9 384 32 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 256 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c11.1 0 21.4-5.7 27.2-15.2s6.4-21.2 1.4-31.1l-16-32C423.2 294.8 412.1 288 400 288L48 288z" />
    </Icon>
);

export default Chair;