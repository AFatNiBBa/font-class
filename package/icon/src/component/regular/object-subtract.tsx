
import { Icon } from "../../index";

/**
 * A component that renders the `object-subtract` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-subtract?s=regular object-subtract}
 * @preview ![object-subtract](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/object-subtract.svg)
 */
const ObjectSubtract: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 48l32 0L96 0 64 0C28.7 0 0 28.7 0 64L0 96l48 0 0-32c0-8.8 7.2-16 16-16zm160 0l0-48L128 0l0 48 96 0zM48 128L0 128l0 96 48 0 0-96zm0 128L0 256l0 32c0 35.3 28.7 64 64 64l32 0 0-48-32 0c-8.8 0-16-7.2-16-16l0-32zm80 96l32 0 48 0 16 0 0-48-96 0 0 48zm32 32l0 64c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-64 0 0 48 64 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-64-48 0zM352 208l0-48 0-32-48 0 0 96 48 0 0-16zm0-144c0-35.3-28.7-64-64-64L256 0l0 48 32 0c8.8 0 16 7.2 16 16l0 32 48 0 0-32zM256 304l0 48 32 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16l-32 0z" />
    </Icon>
);

export default ObjectSubtract;