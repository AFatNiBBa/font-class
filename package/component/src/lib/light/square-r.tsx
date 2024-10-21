
import { Icon } from "../../index";

/**
 * A component that renders the `square-r` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-r?s=light square-r}
 * @preview ![square-r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-r.svg)
 */
const SquareR: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm160 32l80 0c44.2 0 80 35.8 80 80c0 34.8-22.2 64.4-53.2 75.4l50.5 75.7c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4L231.4 288 160 288l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96 0-112c0-17.7 14.3-32 32-32zm80 128c26.5 0 48-21.5 48-48s-21.5-48-48-48l-80 0 0 96 80 0z" />
    </Icon>
);

export default SquareR;