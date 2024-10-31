
import { Icon } from "../../index";

/**
 * A component that renders the `at` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/at?s=sharp-light at}
 * @preview ![at](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/at.svg)
 */
const At: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224l16 0 0 32-16 0C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 96 0 16-16 0-72 0c-33.4 0-62.5-18.7-77.4-46.1c-20.4 28-53.4 46.1-90.6 46.1c-61.9 0-112-50.1-112-112s50.1-112 112-112c31.3 0 59.7 12.9 80 33.6l0-1.6 0-16 32 0 0 16 0 80 0 24c0 30.9 25.1 56 56 56l56 0 0-80C480 132.3 379.7 32 256 32zm80 224a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default At;