
import { Icon } from "../../index";

/**
 * A component that renders the `align-center` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-center?s=sharp-solid align-center}
 * @preview ![align-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/align-center.svg)
 */
const AlignCenter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 32L96 32l0 64 256 0 0-64zm96 128L0 160l0 64 448 0 0-64zM0 416l0 64 448 0 0-64L0 416zM352 288L96 288l0 64 256 0 0-64z" />
    </Icon>
);

export default AlignCenter;