
import { Icon, generic } from "../../index";

/**
 * A component that renders the `manhole` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/manhole?s=sharp-duotone-solid manhole}
 * @preview ![manhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/manhole.svg)
 */
const Manhole: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 256c0 77.5 55 142.1 128.2 156.8c1.6-16.2 15.2-28.8 31.8-28.8s30.3 12.6 31.8 28.8C361 398.1 416 333.5 416 256s-55-142.1-128.2-156.8C286.3 115.4 272.6 128 256 128s-30.3-12.6-31.8-28.8C151 113.9 96 178.5 96 256zm80-80l32 0 0 32-32 0 0-32zm0 64l32 0 0 32-32 0 0-32zm0 64l32 0 0 32-32 0 0-32zm64-128l32 0 0 32-32 0 0-32zm0 64l32 0 0 32-32 0 0-32zm0 64l32 0 0 32-32 0 0-32zm64-128l32 0 0 32-32 0 0-32zm0 64l32 0 0 32-32 0 0-32zm0 64l32 0 0 32-32 0 0-32z" />
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-448a192 192 0 1 1 0 384 192 192 0 1 1 0-384z" />
    </Icon>
);

export default Manhole;