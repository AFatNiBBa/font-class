
import { Icon } from "../../index";

/**
 * A component that renders the `00` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/00?s=thin 00}
 * @preview ![00](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/00.svg)
 */
const $00: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 32C64.5 32 0 96.5 0 176L0 336c0 79.5 64.5 144 144 144s144-64.5 144-144l0-160c0-79.5-64.5-144-144-144zM16 176C16 105.3 73.3 48 144 48s128 57.3 128 128l0 160c0 70.7-57.3 128-128 128S16 406.7 16 336l0-160zM496 32c-79.5 0-144 64.5-144 144l0 160c0 79.5 64.5 144 144 144s144-64.5 144-144l0-160c0-79.5-64.5-144-144-144zM368 176c0-70.7 57.3-128 128-128s128 57.3 128 128l0 160c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-160z" />
    </Icon>
);

export default $00;