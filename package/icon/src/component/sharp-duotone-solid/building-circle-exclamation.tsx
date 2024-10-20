
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-circle-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-circle-exclamation?s=sharp-duotone-solid building-circle-exclamation}
 * @preview ![building-circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/building-circle-exclamation.svg)
 */
const BuildingCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 232.2c-39.1 32.3-64 81.1-64 135.8s24.9 103.5 64 135.8l0 8.2-144 0 0-128-96 0 0 128L0 512 0 0zM64 96l0 64 64 0 0-64L64 96zm0 128l0 64 64 0 0-64-64 0zM160 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0zM256 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160 48l-32 0 0 32 32 0 0-32zm0-128l0-16-32 0 0 16 0 80 0 16 32 0 0-16 0-80z" />
    </Icon>
);

export default BuildingCircleExclamation;