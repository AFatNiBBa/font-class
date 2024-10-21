
import { Icon } from "../../index";

/**
 * A component that renders the `engine` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/engine?s=sharp-solid engine}
 * @preview ![engine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/engine.svg)
 */
const Engine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M400 112l24 0 0-48-24 0L208 64l-24 0 0 48 24 0 72 0 0 16 0 16-72 0-48 0-64 0 0 88-48 0 0-72 0-24L0 136l0 24L0 352l0 24 48 0 0-24 0-72 48 0 0 104 76.8 0L224 448l288 0 0-240-80-64-104 0 0-16 0-16 72 0zM224 224l0 64-64 0 0-64 64 0zm96 0l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zm288-32l-96 0 0 256 96 0 0-256z" />
    </Icon>
);

export default Engine;