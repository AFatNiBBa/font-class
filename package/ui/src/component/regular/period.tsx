
import { Icon } from "../../index";

/**
 * A component that renders the `period` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/period?s=regular period}
 * @preview ![period](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/period.svg)
 */
const Period: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M96 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 96a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
    </Icon>
);

export default Period;