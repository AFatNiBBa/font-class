
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-p` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-p?s=duotone circle-p}
 * @preview ![circle-p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-p.svg)
 */
const CircleP: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 152c0-13.3 10.7-24 24-24l92 0c50.8 0 92 41.2 92 92s-41.2 92-92 92l-68 0 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72 0-136zm48 24l0 88 68 0c24.3 0 44-19.7 44-44s-19.7-44-44-44l-68 0z" />
        <path d="M160 152c0-13.3 10.7-24 24-24l92 0c50.8 0 92 41.2 92 92s-41.2 92-92 92l-68 0 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72 0-136zm48 112l68 0c24.3 0 44-19.7 44-44s-19.7-44-44-44l-68 0 0 88z" />
    </Icon>
);

export default CircleP;