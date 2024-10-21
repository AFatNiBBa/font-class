
import { Icon } from "../../index";

/**
 * A component that renders the `square-this-way-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-this-way-up?s=sharp-solid square-this-way-up}
 * @preview ![square-this-way-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-this-way-up.svg)
 */
const SquareThisWayUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM160 320l-64 0 0-128-40 0 0-24 72-72 72 72 0 24-40 0 0 128zM64 384l320 0 0 32L64 416l0-32zM248 192l0-24 72-72 72 72 0 24-40 0 0 128-64 0 0-128-40 0z" />
    </Icon>
);

export default SquareThisWayUp;