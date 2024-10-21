
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-root-variable` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-root-variable?s=duotone square-root-variable}
 * @preview ![square-root-variable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-root-variable.svg)
 */
const SquareRootVariable: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32l45.6 0L180.4 464.1C186.1 474 196.7 480 208 480c1.3 0 2.6-.1 3.9-.2c12.7-1.6 23.2-10.5 26.8-22.8L344 96l200 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L344 32c-28.4 0-53.5 18.8-61.4 46.1L198.1 367.6 132.9 255.8C121.4 236.1 100.4 224 77.6 224L32 224c-17.7 0-32 14.3-32 32z" />
        <path d="M521.4 233.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 320l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 365.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 320l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L480 274.7l41.4-41.4z" />
    </Icon>
);

export default SquareRootVariable;