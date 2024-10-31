
import { Icon } from "../../index";

/**
 * A component that renders the `films` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/films?s=sharp-light films}
 * @preview ![films](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/films.svg)
 */
const Films: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 272l0-48 224 0 0 48 0 80-224 0 0-80zm0-80l0-48 0-80 224 0 0 80 0 48-224 0zM464 32l-16 0L224 32l-16 0-16 0-64 0L96 32l0 32 0 64 0 16 0 16 0 96 0 16 0 16 0 64 0 32 32 0 64 0 16 0 16 0 224 0 16 0 16 0 64 0 32 0 0-32 0-64 0-16 0-16 0-96 0-16 0-16 0-64 0-32-32 0-64 0-16 0zM128 64l64 0 0 64-64 0 0-64zm0 96l64 0 0 48 0 48-64 0 0-96zm0 128l64 0 0 64-64 0 0-64zm416 64l-64 0 0-64 64 0 0 64zm0-96l-64 0 0-48 0-48 64 0 0 96zm0-128l-64 0 0-64 64 0 0 64zM32 112l0-16L0 96l0 16L0 464l0 16 16 0 448 0 16 0 0-32-16 0L32 448l0-336z" />
    </Icon>
);

export default Films;