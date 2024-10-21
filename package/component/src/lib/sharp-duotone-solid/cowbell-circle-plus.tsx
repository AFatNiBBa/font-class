
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cowbell-circle-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell-circle-plus?s=sharp-duotone-solid cowbell-circle-plus}
 * @preview ![cowbell-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cowbell-circle-plus.svg)
 */
const CowbellCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l262.6 0c-4.3-15.3-6.6-31.4-6.6-48c0-87.6 63.9-160.2 147.7-173.7L384 96l-64 0 0-72 0-24L296 0 152 0 128 0l0 24 0 72L64 96 0 416zm160 32c0 35.3 28.7 64 64 64c29.2 0 53.9-19.6 61.5-46.4c-3.8-5.7-7.2-11.5-10.3-17.6L160 448zM176 48l96 0 0 48-96 0 0-48z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-80l-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48 0-16z" />
    </Icon>
);

export default CowbellCirclePlus;