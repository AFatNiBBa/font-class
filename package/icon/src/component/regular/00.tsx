
import { Icon } from "../../index";

/**
 * A component that renders the `00` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/00?s=regular 00}
 * @preview ![00](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/00.svg)
 */
const $00: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 32C64.5 32 0 96.5 0 176L0 336c0 79.5 64.5 144 144 144s144-64.5 144-144l0-160c0-79.5-64.5-144-144-144zM48 176c0-53 43-96 96-96s96 43 96 96l0 160c0 53-43 96-96 96s-96-43-96-96l0-160zM496 32c-79.5 0-144 64.5-144 144l0 160c0 79.5 64.5 144 144 144s144-64.5 144-144l0-160c0-79.5-64.5-144-144-144zM400 176c0-53 43-96 96-96s96 43 96 96l0 160c0 53-43 96-96 96s-96-43-96-96l0-160z" />
    </Icon>
);

export default $00;