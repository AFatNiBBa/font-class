
import { Icon } from "../../index";

/**
 * A component that renders the `lasso` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lasso?s=sharp-light lasso}
 * @preview ![lasso](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/lasso.svg)
 */
const Lasso: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 176c0 97.2-128.9 176-288 176c-22.9 0-45.3-1.6-66.7-4.7c11.9 17.2 18.7 38 18.7 59.7c0 58-47 105-105 105l-87 0-16 0 0-32 16 0 87 0c40.3 0 73-32.7 73-73c0-27.6-15.6-52.9-40.4-65.3l-34.9-17.4C52.9 293 0 238.3 0 176C0 78.8 128.9 0 288 0S576 78.8 576 176zM288 320c141.4 0 256-64.5 256-144S429.4 32 288 32S32 96.5 32 176s114.6 144 256 144z" />
    </Icon>
);

export default Lasso;