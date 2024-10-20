
import { Icon } from "../../index";

/**
 * A component that renders the `split` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/split?s=sharp-solid split}
 * @preview ![split](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/split.svg)
 */
const Split: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 32l96 96-96 96-32 0 0-64-50.7 0-96 96 96 96 50.7 0 0-64 32 0 96 96-96 96-32 0 0-64-64 0-13.3 0-9.4-9.4L178.7 288 32 288 0 288l0-64 32 0 146.7 0L297.4 105.4l9.4-9.4L320 96l64 0 0-64 32 0z" />
    </Icon>
);

export default Split;