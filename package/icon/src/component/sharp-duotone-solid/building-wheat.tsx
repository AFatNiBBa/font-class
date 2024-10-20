
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-wheat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-wheat?s=sharp-duotone-solid building-wheat}
 * @preview ![building-wheat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/building-wheat.svg)
 */
const BuildingWheat: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 512-144 0 0-128-96 0 0 128L0 512 0 0zM64 96l0 64 64 0 0-64L64 96zm0 128l0 64 64 0 0-64-64 0zM160 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0zM256 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0z" />
        <path d="M640 208l0-16-16 0c-44.2 0-80 35.8-80 80l0 16 16 0c44.2 0 80-35.8 80-80zm0 96l-16 0c-44.2 0-80 35.8-80 80l0 16 16 0c44.2 0 80-35.8 80-80l0-16zm0 112l-16 0c-44.2 0-80 35.8-80 80l0 16 16 0c44.2 0 80-35.8 80-80l0-16zM512 512l0-16c0-44.2-35.8-80-80-80l-16 0 0 16c0 44.2 35.8 80 80 80l16 0zm0-128c0-44.2-35.8-80-80-80l-16 0 0 16c0 44.2 35.8 80 80 80l16 0 0-16zm0-96l0-16c0-44.2-35.8-80-80-80l-16 0 0 16c0 44.2 35.8 80 80 80l16 0zM552 56l0-24-48 0 0 24 0 104 0 24 48 0 0-24 0-104zm72 16l-48 0 0 24 0 32 0 24 48 0 0-24 0-32 0-24zM480 96l0-24-48 0 0 24 0 32 0 24 48 0 0-24 0-32z" />
    </Icon>
);

export default BuildingWheat;