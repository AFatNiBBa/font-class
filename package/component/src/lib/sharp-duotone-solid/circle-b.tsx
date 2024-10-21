
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-b` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-b?s=sharp-duotone-solid circle-b}
 * @preview ![circle-b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-b.svg)
 */
const CircleB: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l24 0 92 0c42 0 76 34 76 76c0 16.2-5.1 31.3-13.8 43.7C356.3 261.6 368 283.4 368 308c0 42-34 76-76 76l-108 0-24 0 0-24 0-80 0-24 0-24 0-80 0-24zm48 48l0 56 68 0c15.5 0 28-12.5 28-28s-12.5-28-28-28l-68 0zm0 104l0 56 84 0c15.5 0 28-12.5 28-28s-12.5-28-28-28l-16 0-68 0z" />
        <path d="M184 128l-24 0 0 24 0 80 0 24 0 24 0 80 0 24 24 0 108 0c42 0 76-34 76-76c0-24.6-11.7-46.4-29.8-60.3c8.7-12.4 13.8-27.4 13.8-43.7c0-42-34-76-76-76l-92 0zm92 104l-68 0 0-56 68 0c15.5 0 28 12.5 28 28s-12.5 28-28 28zm-68 48l68 0 16 0c15.5 0 28 12.5 28 28s-12.5 28-28 28l-84 0 0-56z" />
    </Icon>
);

export default CircleB;