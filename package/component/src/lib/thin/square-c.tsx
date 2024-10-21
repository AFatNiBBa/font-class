
import { Icon } from "../../index";

/**
 * A component that renders the `square-c` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-c?s=thin square-c}
 * @preview ![square-c](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-c.svg)
 */
const SquareC: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm144.8 80.8c-43.7 43.7-43.7 114.7 0 158.4s114.7 43.7 158.4 0c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0c-43.7-43.7-114.7-43.7-158.4 0z" />
    </Icon>
);

export default SquareC;