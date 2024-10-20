
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-pregnant` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-pregnant?s=sharp-duotone-solid person-pregnant}
 * @preview ![person-pregnant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-pregnant.svg)
 */
const PersonPregnant: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M144 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M140.9 128l-18.1 0-9.3 15.5-76.9 128L20.1 298.9l54.9 33 16.5-27.4 4.6-7.6L96 384l24 0 0 96 0 32 64 0 0-32 0-96 8 0 8 0 0 96 0 32 64 0 0-32 0-96 40 0 48 0 0-64c0-46.8-33.4-85.7-77.7-94.3L256 128l-32 0-32 0-16 0-35.1 0z" />
    </Icon>
);

export default PersonPregnant;