
import { Icon } from "../../index";

/**
 * A component that renders the `building-lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-lock?s=sharp-solid building-lock}
 * @preview ![building-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/building-lock.svg)
 */
const BuildingLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L384 0l0 193.6c-16.3 16.6-27.4 38.3-30.9 62.4L320 256l0-32-64 0 0 64 64 0 0 32 0 192-80 0 0-128-96 0 0 128L0 512 0 0zM128 224l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0zM64 96l0 64 64 0 0-64L64 96zm160 0l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0zM464 240c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default BuildingLock;