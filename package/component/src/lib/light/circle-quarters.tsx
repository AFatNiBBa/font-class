
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarters` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarters?s=light circle-quarters}
 * @preview ![circle-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-quarters.svg)
 */
const CircleQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M402.7 425.3L256 278.6 109.3 425.3C148.6 459.4 199.9 480 256 480s107.4-20.6 146.7-54.7zm22.6-22.6C459.4 363.4 480 312.1 480 256s-20.6-107.4-54.7-146.7L278.6 256 425.3 402.7zm-22.6-316C363.4 52.6 312.1 32 256 32s-107.4 20.6-146.7 54.7L256 233.4 402.7 86.7zm-316 22.6C52.6 148.6 32 199.9 32 256s20.6 107.4 54.7 146.7L233.4 256 86.7 109.3zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleQuarters;