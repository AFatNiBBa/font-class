
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-phone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone?s=sharp-duotone-solid circle-phone}
 * @preview ![circle-phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-phone.svg)
 */
const CirclePhone: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 144l72-16 40 72-41.9 33.5c18.1 34.2 46.2 62.3 80.4 80.4L312 272l72 40-16 72-16 0c-123.7 0-224-100.3-224-224l0-16z" />
        <path d="M128 144l72-16 40 72-41.9 33.5c18.1 34.2 46.2 62.3 80.4 80.4L312 272l72 40-16 72H352c-123.7 0-224-100.3-224-224l0-16z" />
    </Icon>
);

export default CirclePhone;