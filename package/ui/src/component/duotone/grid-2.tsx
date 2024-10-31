
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grid-2` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-2?s=duotone grid-2}
 * @preview ![grid-2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/grid-2.svg)
 */
const Grid_2: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 328l0 112c0 22.1 17.9 40 40 40l112 0c22.1 0 40-17.9 40-40l0-112c0-22.1-17.9-40-40-40L72 288c-22.1 0-40 17.9-40 40zM288 72l0 112c0 22.1 17.9 40 40 40l112 0c22.1 0 40-17.9 40-40l0-112c0-22.1-17.9-40-40-40L328 32c-22.1 0-40 17.9-40 40z" />
        <path d="M224 80c0-26.5-21.5-48-48-48L80 32C53.5 32 32 53.5 32 80l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96zM480 336c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96z" />
    </Icon>
);

export default Grid_2;