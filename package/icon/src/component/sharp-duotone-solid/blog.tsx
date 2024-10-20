
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blog` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blog?s=sharp-duotone-solid blog}
 * @preview ![blog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/blog.svg)
 */
const Blog: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 0l0 64c141.4 0 256 114.6 256 256l64 0C512 143.3 368.7 0 192 0zm0 96l0 64c88.4 0 160 71.6 160 160l64 0C416 196.3 315.7 96 192 96z" />
        <path d="M96 96l0 48 0 224c0 26.5 21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48l-16 0 0-96 16 0c79.5 0 144 64.5 144 144s-64.5 144-144 144S0 447.5 0 368L0 144 0 96l96 0z" />
    </Icon>
);

export default Blog;