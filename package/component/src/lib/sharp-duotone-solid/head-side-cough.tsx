
import { Icon, generic } from "../../index";

/**
 * A component that renders the `head-side-cough` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-cough?s=sharp-duotone-solid head-side-cough}
 * @preview ![head-side-cough](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/head-side-cough.svg)
 */
const HeadSideCough: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224.3C0 100.4 100.4 0 224.3 0L256 0C358.1 0 441.6 79.7 447.7 180.3L505 252l7 8.8 0 11.2 0 16 0 32-32 0-32 0 0 32L320 368l0 40 128 8 0 64-128 0 0 32-32 0-32 0L96 512l-32 0 0-32 0-98.8C23 339.3 0 283 0 224.3zM320 192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M592 288a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-40 24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-64 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm128 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM592 480a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-40-72a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default HeadSideCough;