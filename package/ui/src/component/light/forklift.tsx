
import { Icon } from "../../index";

/**
 * A component that renders the `forklift` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forklift?s=light forklift}
 * @preview ![forklift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/forklift.svg)
 */
const Forklift: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 0c-17.7 0-32 14.3-32 32l0 128-48 0c-44.2 0-80 35.8-80 80L0 384l0 32c0 53 43 96 96 96s96-43 96-96l64 0c0 53 43 96 96 96s96-43 96-96c0-28.4-12.4-54-32-71.6l0-56.4 0-28.5c0-4.7-1-9.3-3-13.5L306.8 18.5C301.6 7.2 290.2 0 277.8 0L160 0zM128 192l19.5 0 94.8 87.5C248.2 285 256 288 264 288l120 0 0 37.5c-10-3.5-20.8-5.5-32-5.5c-41.8 0-77.4 26.7-90.5 64l-74.9 0c-13.2-37.3-48.7-64-90.5-64c-24.6 0-47 9.2-64 24.4L32 240c0-26.5 21.5-48 48-48l48 0zm136 64L160 160l0-128 117.8 0L382.3 256 264 256zm88 224a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM96 480a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM512 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 416c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-112 0 0-400z" />
    </Icon>
);

export default Forklift;