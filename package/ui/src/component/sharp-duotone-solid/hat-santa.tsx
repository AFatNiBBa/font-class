
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-santa` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-santa?s=sharp-duotone-solid hat-santa}
 * @preview ![hat-santa](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hat-santa.svg)
 */
const HatSanta: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384l48 0 416 0 48 0 0 96L0 480l0-96zM481.3 254.5l19.2-27.2-.7-3.7c-1.9-9.7-3.8-19.3-5.7-29c8-1.4 16-2.8 24-4.1c2.9-.5 5.9-1 8.8-1.5l18.6-27.7 27.2 19.2 32.7-6.4 5.6 32.8 27.7 18.6-19.2 27.2 6.4 32.7L593.1 291l-18.6 27.7-27.2-19.2-32.7 6.4L509 273.1l-27.7-18.6z" />
        <path d="M48 384L149 137.1C175 73.5 236.9 32 305.6 32c49.8 0 97 21.9 129.1 59.9l83.4 98.6-24 4.1 5.7 29L384 192l80 192L48 384z" />
    </Icon>
);

export default HatSanta;