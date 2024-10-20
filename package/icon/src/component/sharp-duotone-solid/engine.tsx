
import { Icon, generic } from "../../index";

/**
 * A component that renders the `engine` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/engine?s=sharp-duotone-solid engine}
 * @preview ![engine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/engine.svg)
 */
const Engine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 136l0 24L0 352l0 24 48 0 0-24 0-72 48 0 0-48-48 0 0-72 0-24L0 136zM184 64l0 48 24 0 72 0 0 32 48 0 0-32 72 0 24 0 0-48-24 0L208 64l-24 0zM544 192l0 256 96 0 0-256-96 0z" />
        <path d="M96 144l64 0 48 0 224 0 80 64 0 240-288 0-51.2-64L96 384l0-240zm128 80l-64 0 0 64 64 0 0-64zm96 0l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default Engine;