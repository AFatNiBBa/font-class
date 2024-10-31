
import { Icon } from "../../index";

/**
 * A component that renders the `circle-p` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-p?s=sharp-solid circle-p}
 * @preview ![circle-p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-p.svg)
 */
const CircleP: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128l92 0c50.8 0 92 41.2 92 92s-41.2 92-92 92l-68 0 0 48 0 24-48 0 0-24 0-72 0-136 0-24 24 0zm92 136c24.3 0 44-19.7 44-44s-19.7-44-44-44l-68 0 0 88 68 0z" />
    </Icon>
);

export default CircleP;