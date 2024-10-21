
import { Icon } from "../../index";

/**
 * A component that renders the `manhole` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/manhole?s=sharp-solid manhole}
 * @preview ![manhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/manhole.svg)
 */
const Manhole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 128c16.6 0 30.3-12.6 31.8-28.8C361 113.9 416 178.5 416 256s-55 142.1-128.2 156.8C286.3 396.6 272.6 384 256 384s-30.3 12.6-31.8 28.8C151 398.1 96 333.5 96 256s55-142.1 128.2-156.8c1.6 16.2 15.2 28.8 31.8 28.8zm-80 48l0 32 32 0 0-32-32 0zm0 64l0 32 32 0 0-32-32 0zm32 64l-32 0 0 32 32 0 0-32zm64-128l-32 0 0 32 32 0 0-32zm-32 64l0 32 32 0 0-32-32 0zm32 64l-32 0 0 32 32 0 0-32zm64-128l-32 0 0 32 32 0 0-32zm-32 64l0 32 32 0 0-32-32 0zm32 64l-32 0 0 32 32 0 0-32z" />
    </Icon>
);

export default Manhole;