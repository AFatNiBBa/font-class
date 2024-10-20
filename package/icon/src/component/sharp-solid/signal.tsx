
import { Icon } from "../../index";

/**
 * A component that renders the `signal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal?s=sharp-solid signal}
 * @preview ![signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/signal.svg)
 */
const Signal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 0l0 32 0 448 0 32-64 0 0-32 0-448 0-32 64 0zM480 96l0 32 0 352 0 32-64 0 0-32 0-352 0-32 64 0zM352 224l0 256 0 32-64 0 0-32 0-256 0-32 64 0 0 32zM224 288l0 32 0 160 0 32-64 0 0-32 0-160 0-32 64 0zM96 416l0 64 0 32-64 0 0-32 0-64 0-32 64 0 0 32z" />
    </Icon>
);

export default Signal;