
import { Icon } from "../../index";

/**
 * A component that renders the `films` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/films?s=sharp-solid films}
 * @preview ![films](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/films.svg)
 */
const Films: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 32L96 32l0 352 480 0 0-352zM200 80l0 48-48 0 0-48 48 0zm272 0l48 0 0 48-48 0 0-48zM200 184l0 48-48 0 0-48 48 0zm272 0l48 0 0 48-48 0 0-48zM200 288l0 48-48 0 0-48 48 0zm272 0l48 0 0 48-48 0 0-48zM416 80l0 112-160 0 0-112 160 0zM256 224l160 0 0 112-160 0 0-112zM48 120l0-24L0 96l0 24L0 456l0 24 24 0 432 0 24 0 0-48-24 0L48 432l0-312z" />
    </Icon>
);

export default Films;