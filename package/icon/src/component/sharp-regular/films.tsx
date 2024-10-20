
import { Icon } from "../../index";

/**
 * A component that renders the `films` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/films?s=sharp-regular films}
 * @preview ![films](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/films.svg)
 */
const Films: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 264l0-32 160 0 0 32 0 72-160 0 0-72zm0-80l0-32 0-72 160 0 0 72 0 32-160 0zM440 32l-24 0L256 32l-24 0-24 0-64 0L96 32l0 48 0 48 0 24 0 24 0 64 0 24 0 24 0 48 0 48 48 0 64 0 24 0 24 0 160 0 24 0 24 0 64 0 48 0 0-48 0-48 0-24 0-24 0-64 0-24 0-24 0-48 0-48-48 0-64 0-24 0zM144 80l64 0 0 48-64 0 0-48zm0 96l64 0 0 32 0 32-64 0 0-64zm0 112l64 0 0 48-64 0 0-48zm384 48l-64 0 0-48 64 0 0 48zm0-96l-64 0 0-32 0-32 64 0 0 64zm0-112l-64 0 0-48 64 0 0 48zM48 120l0-24L0 96l0 24L0 456l0 24 24 0 432 0 24 0 0-48-24 0L48 432l0-312z" />
    </Icon>
);

export default Films;