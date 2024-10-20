
import { Icon } from "../../index";

/**
 * A component that renders the `right-left-large` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-left-large?s=sharp-light right-left-large}
 * @preview ![right-left-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/right-left-large.svg)
 */
const RightLeftLarge: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M185.4 496L25.4 336l160-160H256v64H416v64h25.4l128-128L441.4 48H416v64H272V80H384V16h70.6l160 160-160 160H384V272H224V208H198.6L70.6 336l128 128H224V400H368v32H256v64H185.4z" />
    </Icon>
);

export default RightLeftLarge;