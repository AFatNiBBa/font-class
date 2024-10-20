
import { Icon, generic } from "../../index";

/**
 * A component that renders the `brackets-curly` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-curly?s=sharp-duotone-solid brackets-curly}
 * @preview ![brackets-curly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/brackets-curly.svg)
 */
const BracketsCurly: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M352 32l0 64 32 0 64 0 0 96 0 13.3 9.4 9.4L498.7 256l-41.4 41.4-9.4 9.4 0 13.3 0 96-64 0-32 0 0 64 32 0 96 0 32 0 0-32 0-114.7 54.6-54.6 9.4-9.4 0-26.5-9.4-9.4L512 178.7 512 64l0-32-32 0-96 0-32 0z" />
        <path d="M96 32L64 32l0 32 0 114.7L9.4 233.4 0 242.7l0 26.5 9.4 9.4L64 333.3 64 448l0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-96 0-13.3-9.4-9.4L77.3 256l41.4-41.4 9.4-9.4 0-13.3 0-96 64 0 32 0 0-64-32 0L96 32z" />
    </Icon>
);

export default BracketsCurly;