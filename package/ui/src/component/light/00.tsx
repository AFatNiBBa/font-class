
import { Icon } from "../../index";

/**
 * A component that renders the `00` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/00?s=light 00}
 * @preview ![00](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/00.svg)
 */
const $00: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 32C64.5 32 0 96.5 0 176L0 336c0 79.5 64.5 144 144 144s144-64.5 144-144l0-160c0-79.5-64.5-144-144-144zM32 176C32 114.1 82.1 64 144 64s112 50.1 112 112l0 160c0 61.9-50.1 112-112 112S32 397.9 32 336l0-160zM496 32c-79.5 0-144 64.5-144 144l0 160c0 79.5 64.5 144 144 144s144-64.5 144-144l0-160c0-79.5-64.5-144-144-144zM384 176c0-61.9 50.1-112 112-112s112 50.1 112 112l0 160c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-160z" />
    </Icon>
);

export default $00;