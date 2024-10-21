
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cat-space` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cat-space?s=sharp-duotone-solid cat-space}
 * @preview ![cat-space](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cat-space.svg)
 */
const CatSpace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M241.3 46.7L288 64 241.3 81.3 224 128 206.7 81.3 160 64l46.7-17.3L224 0l17.3 46.7zM288 160a160 160 0 1 1 320 0 160 160 0 1 1 -320 0zM352 32l0 128c0 53 43 96 96 96s96-43 96-96l0-128L480 96l-64 0L352 32z" />
        <path d="M416 96l64 0 64-64 0 128c0 53-43 96-96 96s-96-43-96-96l0-128 64 64zm0 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM160 277.8c29.4-44.3 76.8-75.6 131.6-83.8C307.3 266.1 371.3 320 448 320c11 0 21.7-1.1 32-3.2L480 480l0 32-64 0 0-32 0-140.8L280 448l56 0 32 0 0 64-32 0-208 0-32 0 0-32 0-288c0-17.7-14.3-32-32-32l-32 0 0-64 32 0c53 0 96 43 96 96l0 85.8z" />
    </Icon>
);

export default CatSpace;