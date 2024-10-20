
import { Icon } from "../../index";

/**
 * A component that renders the `tv-retro` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv-retro?s=sharp-regular tv-retro}
 * @preview ![tv-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tv-retro.svg)
 */
const TvRetro: typeof Icon = x => (
    <Icon {...x}>
        <path d="M168 6.1l17 17 71 71 71-71 17-17L377.9 40 361 57l-39 39L464 96l48 0 0 48 0 320 0 48-48 0L48 512 0 512l0-48L0 144 0 96l48 0 142.1 0L151 57l-17-17L168 6.1zM48 144l0 320 416 0 0-320L48 144zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM392 304a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM352 192l0 224L96 416l0-224 256 0z" />
    </Icon>
);

export default TvRetro;