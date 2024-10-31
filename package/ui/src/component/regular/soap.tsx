
import { Icon } from "../../index";

/**
 * A component that renders the `soap` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/soap?s=regular soap}
 * @preview ![soap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/soap.svg)
 */
const Soap: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM96 192l113.1 0c2.5 17.7 9.2 34 18.9 48L96 240c-26.5 0-48 21.5-48 48l0 128c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-4.1 0c9.6-13.7 16.1-29.6 18.8-46.9c46 7.1 81.3 46.9 81.3 94.9l0 128c0 53-43 96-96 96L96 512c-53 0-96-43-96-96L0 288c0-53 43-96 96-96zm224 96l32 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64s28.7-64 64-64l160 0zM144 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-192 0c-8.8 0-16 7.2-16 16zM320 208a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-112a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM384 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Soap;