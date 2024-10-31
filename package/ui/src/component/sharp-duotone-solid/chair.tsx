
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chair` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chair?s=sharp-duotone-solid chair}
 * @preview ![chair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chair.svg)
 */
const Chair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 384l0 96 0 32 64 0 0-32 0-96-64 0zM64 0l0 48 0 240 48 0 0-240 40 0 0 240 48 0 0-240 48 0 0 240 48 0 0-240 40 0 0 240 48 0 0-240 0-48L336 0 112 0 64 0zM352 384l0 96 0 32 64 0 0-32 0-96-64 0z" />
        <path d="M0 352v32H448V352l-32-64H32L0 352z" />
    </Icon>
);

export default Chair;