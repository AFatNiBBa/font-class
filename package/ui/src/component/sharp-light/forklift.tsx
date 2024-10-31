
import { Icon } from "../../index";

/**
 * A component that renders the `forklift` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forklift?s=sharp-light forklift}
 * @preview ![forklift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/forklift.svg)
 */
const Forklift: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 0L128 0l0 16 0 144-96 0L0 160l0 32L0 384l0 32c0 53 43 96 96 96s96-43 96-96l64 0c0 53 43 96 96 96s96-43 96-96c0-28.4-12.4-54-32-71.6l0-56.4 0-32 0-3.5-1.5-3.2-112-240L298.2 0 288 0 144 0zM128 192l19.5 0 94.8 87.5 9.2 8.5 12.5 0 120 0 0 37.5c-10-3.5-20.8-5.5-32-5.5c-41.8 0-77.4 26.7-90.5 64l-74.9 0c-13.2-37.3-48.7-64-90.5-64c-24.6 0-47 9.2-64 24.4L32 192l96 0zm136 64L160 160l0-128 117.8 0L382.3 256 264 256zm88 224a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM96 480a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM512 16l0-16L480 0l0 16 0 416 0 16 16 0 128 0 16 0 0-32-16 0-112 0 0-400z" />
    </Icon>
);

export default Forklift;