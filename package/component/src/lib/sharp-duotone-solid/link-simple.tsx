
import { Icon, generic } from "../../index";

/**
 * A component that renders the `link-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple?s=sharp-duotone-solid link-simple}
 * @preview ![link-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/link-simple.svg)
 */
const LinkSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M160 224l32 0 192 0 32 0 0 64-32 0-192 0-32 0 0-64z" />
        <path d="M160 96C71.6 96 0 167.6 0 256s71.6 160 160 160l64 0 32 0 0-64-32 0-64 0c-53 0-96-43-96-96s43-96 96-96l64 0 32 0 0-64-32 0-64 0zm256 0l-64 0-32 0 0 64 32 0 64 0c53 0 96 43 96 96s-43 96-96 96l-64 0-32 0 0 64 32 0 64 0c88.4 0 160-71.6 160-160s-71.6-160-160-160z" />
    </Icon>
);

export default LinkSimple;