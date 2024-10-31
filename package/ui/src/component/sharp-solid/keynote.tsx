
import { Icon } from "../../index";

/**
 * A component that renders the `keynote` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keynote?s=sharp-solid keynote}
 * @preview ![keynote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/keynote.svg)
 */
const Keynote: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 0L208 0l0 24-24 0c-48.6 0-88 39.4-88 88l0 48-32 0L0 288l0 64 512 0 0-64L448 160l-304 0 0-48c0-22.1 17.9-40 40-40l24 0 0 24 96 0c26.5 0 48-21.5 48-48s-21.5-48-48-48zM224 448l-64 0-32 0 0 64 32 0 96 0 96 0 32 0 0-64-32 0-64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default Keynote;