
import { Icon } from "../../index";

/**
 * A component that renders the `square-p` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-p?s=sharp-solid square-p}
 * @preview ![square-p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-p.svg)
 */
const SquareP: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM152 128l92 0c50.8 0 92 41.2 92 92l0 24-3.2 0c-10.6 39.2-46.3 68-88.8 68l-68 0 0 48 0 24-48 0 0-24 0-72 0-136 0-24 24 0zm92 136c24.3 0 44-19.7 44-44s-19.7-44-44-44l-68 0 0 88 68 0z" />
    </Icon>
);

export default SquareP;